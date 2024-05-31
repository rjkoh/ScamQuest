import os
import random

from dotenv import load_dotenv
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_community.document_loaders import TextLoader
from langchain_community.vectorstores import FAISS
from langchain_core.prompts import ChatPromptTemplate
from langchain_text_splitters import RecursiveCharacterTextSplitter

from langchain.chains import create_retrieval_chain
from langchain.chains.combine_documents import create_stuff_documents_chain


# Load environment variables from .env file
load_dotenv()

class GenModel:
    def __init__(self):
        self.llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0)
        self.faiss = self.load_faiss_index()
        self.rag_chain = self.create_rag_chain()
        self.mcq_questions = []
        self.msg_questions = []


    def load_faiss_index(self):
        if os.path.exists('faiss_index'):
            # Load saved FAISS index
            print("Loading saved FAISS index from faiss_index")
            return FAISS.load_local("faiss_index", OpenAIEmbeddings(), allow_dangerous_deserialization=True)
        else:
            # Process text files and create vectors
            loader = TextLoader("docs/data.txt")
            documents = loader.load()
            text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
            docs = text_splitter.split_documents(documents)
            print("Finished splitting documents")
            faiss = FAISS.from_documents(docs, OpenAIEmbeddings())
            # Save FAISS index
            faiss.save_local("faiss_index")
            print("FAISS index saved to faiss_index")
            return faiss
        

    def create_rag_chain(self):
        system_prompt = """You are an assistant for generating educational content about scams in Singapore. \
        Given the following pieces of retrieved context about recent scams, and based on the prompt, generate educational content about scam awareness. \

        {context}"""
        prompt = ChatPromptTemplate.from_messages(
            [
                ("system", system_prompt),
                ("human", "{input}"),
            ]
        )

        retriever = self.faiss.as_retriever()
        question_answer_chain = create_stuff_documents_chain(self.llm, prompt)
        return create_retrieval_chain(retriever, question_answer_chain)

    def generate_msg_question_bank(self) -> str:
        questions = []
        msg_query = "Give me 10 examples of messages that scammers use in Singapore."
        
        msg_response = self.rag_chain.invoke({"input": msg_query})
        
        return msg_response['answer']
    
    def generate_mcq_question_bank(self) -> str:
        mcq_query = """Give me 10 multiple choice questions about scam prevention in Singapore. \
            Format each question such that it starts with Question: and the correct answer
            """
        mcq_response = self.rag_chain.invoke({"input": mcq_query})

        return mcq_response['answer']
    
    def generate_question(self) -> str:
        qn_type = random.choice(["msg", "mcq"])
        if qn_type == "msg":
            if len(self.msg_questions) == 0:
                raw = self.generate_msg_question_bank()
                self.msg_questions = raw.split("\n")
            unprocessed_qn = self.msg_questions.pop()
            qn = unprocessed_qn.split(". ", 1)[1]
            return [qn_type, [qn]]
        else:
            if len(self.mcq_questions) == 0:
                raw = self.generate_mcq_question_bank()
                self.mcq_questions = raw.split("Question:")
            unprocessed_qn = self.mcq_questions.pop()
            print(unprocessed_qn)
            if unprocessed_qn == "":
                return self.generate_question()
            splits = unprocessed_qn.split("\n")
            qn = splits[0].strip()
            a = splits[1].split(") ")[1]
            b = splits[2].split(") ")[1]
            c = splits[3].split(") ")[1]
            d = splits[4].split(") ")[1]
            ans = unprocessed_qn.split("Correct answer: ")[1]
            return [qn_type, [qn, [a, b, c, d], ans]]

        
        
    
    


