"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { getQuestions } from "@/util";
import Spinner from "@/components/Spinner";
import Question from "@/components/Question";
import Nav from "./nav";

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);

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

  const selectQuestion = (index) => {
    setQuestionIndex(index);
  }

  return (
    <main className={styles.main}>
      <Nav score={score} />
      <div className={styles.container}>
        {isLoading
        && <Spinner />}
        <Question {...questions[questionIndex]} nextQuestion={nextQuestion} setScore={setScore} score={score}/>
        <div className={styles.questionIndexContainer}>
          <dotlottie-player className={styles.dog} src="https://lottie.host/08449653-a4f8-43df-80c9-84c4df8cd224/OA7QudjeW1.json" background="transparent" speed="1" style={{position: 'absolute', top: '-40px', left: `calc(-15px + ${questionIndex} * (1.5rem + 1.5vw))`, width: '80px', height: '80px', transitionDuration: '2s'}} loop autoplay></dotlottie-player>
          {questions.map((_, index) => (<div key={index} className={styles.questionIndexDot} onClick={() => selectQuestion(index)}>
            <span className={index === questionIndex ? styles.selectedQuestionIndexDot : ''}>.</span>
          </div>))}
        </div>
      </div>
    </main>
  );
}
