"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { getQuestions } from "@/util";
import Spinner from "@/components/Spinner";
import Question from "@/components/Question";

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);
  const [questions, setQuestions] = useState([]);

  const [questionIndex, setQuestionIndex] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const questions = await getQuestions();
        setQuestions(questions);
      } catch (error) {
        alert("Something went wrong with loading the questions!");
        console.log(`Error: ${error}`);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [])

  const nextQuestion = () => {
    if ((questionIndex + 1) < questions.length) {
      setQuestionIndex(questionIndex + 1);
    }
  }

  return (
    <main className={styles.container}>
      {isLoading
      && <Spinner />}
      <Question {...questions[questionIndex]} nextQuestion={nextQuestion}/>
      <div className={styles.questionIndexContainer}>
        {questions.map((question, index) => (<div className={styles.questionIndexDot}>
          .
        </div>))}
      </div>
    </main>
  );
}
