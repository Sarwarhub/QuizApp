import { useState } from 'react'
import React from 'react'
import QuestionList from './QuestionList'
export default function Quiz() {
    const questions = [
        {
            question: "What is react?",
            options: ['CSS Framework ', 'React library', ' React Framework', ' testing tool'],
            answer: 'React library'
        },
        {
            question: " What is the answer of 2 + 2 is ? ",
            options: ['3', '4', '5', '6'],
            answer: '4'
        }
    ]
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const [isAnswered, setIsAnswered] = useState(false);
    const handleClick = (option) => {
        if (!isAnswered) { // Check if the question is already answered
            setCurrentAnswer(option);
            if (option === questions[currentQuestionIndex].answer) {
                setScore(score + 1);
            }
            setIsAnswered(true); // Mark the question as answered
        }
    };
    const handleNextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setCurrentAnswer(null);
        setIsAnswered(false); 
    };
    return (
        <div className='Quiz'>
            {currentQuestionIndex < questions.length ?
                <div>
                    <QuestionList
                        question={questions[currentQuestionIndex].question}
                        options={questions[currentQuestionIndex].options}
                        answer={questions[currentQuestionIndex].answer}
                        handleClick={handleClick}
                        currentAnswer={currentAnswer}
                    />
                    <button disabled={currentAnswer === null} className={currentAnswer ===
                        null ? 'button-disable' : 'button'} onClick={handleNextQuestion}> Next Question </button>
                </div> : <span className='score'> Your score is <b> {score} </b> </span>}
        </div>

    )
}
