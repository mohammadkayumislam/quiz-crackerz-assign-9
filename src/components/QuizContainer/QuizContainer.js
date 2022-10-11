import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const QuizContainer = () => {
   const quizeIteams= useLoaderData();
   const quizs= quizeIteams.data.questions;
    return (
        <div>
          {
            quizs.map(quiz=> <Question
            key={quiz.id}
            question={quiz}
            ></Question>)
          }
        </div>
    );
};

export default QuizContainer;<h2>Quiz</h2>