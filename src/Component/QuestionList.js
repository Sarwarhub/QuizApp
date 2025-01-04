import React from 'react'
import './Quiz.css'


export default function QuestionList({question,options, handleClick,currentAnswer,answer}) {
  return (
    <>
    <div className='Quiz'>
       <h2> {question} </h2>
       <div>
       <ul>
        {options.map((option , index) => (
            <li key={index} onClick={()=> handleClick(option)} className={currentAnswer===
            option && currentAnswer === answer ?'correct': ''}  >{option}</li>
        ))}
       </ul>
       </div>
    </div>
    </>
  )
}
