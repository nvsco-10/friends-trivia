import { useState, MouseEvent, FC } from 'react';
import { fetchQuizQuestions } from './API';
import { questions } from './questions'
//Components
import QuestionCard from './components/QuestionCard';
import FriendsLogo from './components/FriendsLogo';
import Footer from './components/Footer';
//Types
import { QuestionsState } from './API';
//Styles
import { GlobalStyle, Wrapper } from './App.styles';
//Icons
import { AiFillHeart } from 'react-icons/ai'

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = questions.length;

const App: FC = () => {
  const [ loading, setLoading ] = useState(false);
  const [ questions, setQuestions ] = useState<QuestionsState[]>([]);
  const [ number, setNumber ] = useState(0);
  const [ userAnswers, setUserAnswers ] = useState<AnswerObject[]>([]);
  const [ score, setScore ] = useState(0);
  const [ incorrect, setIncorrect ] = useState(5);
  const [ gameOver, setGameOver ] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    try {
      const newQuestions = await fetchQuizQuestions(
        TOTAL_QUESTIONS
      );
  
      setQuestions(newQuestions);
      setScore(0);
      setIncorrect(5);
      setUserAnswers([]);
      setNumber(0);
      setLoading(false);

    } catch (error) {
      console.log(error)
    }
    
  }

  const checkAnswer = (e: MouseEvent<HTMLButtonElement>) => {
    if(!gameOver){

      // Users answer
      const answer = e.currentTarget.value;

      // Check answer against correct answer
      const correct = questions[number].correct_answer === answer;
      
      // Add score if answer is correct
      if(correct) {
        setScore(prev => prev + 1)
      } else {
        if(incorrect <= 0) {
          setGameOver(true)
          return
        }
        setIncorrect(prev => prev - 1)
      }

        
  

      // Save answer in the array of user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers(prev => [...prev, answerObject])

    }
  }

  const nextQuestion = () => {
    // Move on to next question
    const nextQuestion = number + 1

    if(nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true)
    } else {
      setNumber(nextQuestion)
    }

  }

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <FriendsLogo />
        <h2>Test your knowledge!</h2>

        {(gameOver && userAnswers.length === 0) && (
          <button className='start' onClick={startTrivia}>
            Start Quiz
          </button>
        )} 
        {((gameOver && (userAnswers.length !== 0 )) || (userAnswers.length === TOTAL_QUESTIONS)) &&
          <button className='start' onClick={startTrivia}>
            Restart Quiz
          </button>
        }
        
        {(!gameOver || (gameOver && userAnswers.length !== 0))  && 
          <div className='score-count'>
            <p className='score'>
              Score: {score}
            </p>
            <p className='incorrect'>
              <AiFillHeart className='heart' />{incorrect}
            </p>
          </div>
        }

        {loading && <p>loading questions...</p>}
        
        {((!loading && !gameOver) || (gameOver && userAnswers.length !== 0)) && (
          <QuestionCard
            questionNum={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}  
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}

        {(!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1) &&
          <button className='next' onClick={nextQuestion}>
            Next Question
          </button>
        }
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;
