import styles from './Question.module.css';

export default function Question({ questionId, questionType, body, question, options, answer, nextQuestion }) {

  return (
    <div className={styles.container}>
        {questionType == 0
        && <>
            <h2 className={styles.questionNumber}>{questionId}. {question}</h2>
            <div className={styles.options}>
                {options.map((option, index) => (<div key={index} className={styles.option}>
                    {option}
                </div>))}
            </div>
        </>
        }
    </div>
  );
}
