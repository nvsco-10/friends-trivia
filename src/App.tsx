import {MouseEvent} from 'react';
import QuestionCard from './components/QuestionCard';

const App = () => {

  const startTrivia = async () => {

  }

  const checkAnswer = (e: MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div>
      <h1>FRIENDS QUIZ</h1>
      <button className='start' onClick={startTrivia}>
        Start
      </button>
      <p className='score'>Score:</p>
      <p>loading questions...</p>
      <QuestionCard />
      <button className='next' onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default App;
