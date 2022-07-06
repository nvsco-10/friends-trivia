import { FC, MouseEvent } from 'react'
// Types
import { AnswerObject } from '../App'
// Styles
import { Wrapper, ButtonWrapper } from '../assets/Wrappers/QuestionCard'

type Props = {
  question: string;
  answers: string[];
  callback: (e: MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNum: number;
  totalQuestions: number;
}

const QuestionCard: FC<Props>  = ({ 
  question, 
  answers, 
  callback, 
  userAnswer, 
  questionNum, 
  totalQuestions 
}) => {
  return (
    <Wrapper>
      <p className='number'>
        Question: {questionNum} / {totalQuestions}
      </p>
      <p className='question' dangerouslySetInnerHTML={{ __html: question }} />
      <div className='choices-container'>
        {answers.map(answer => (
          <ButtonWrapper 
            correct={userAnswer?.correctAnswer === answer}
            userClicked={userAnswer?.answer === answer}
            key={answer}
          >
            <button 
              disabled={userAnswer ? true : false} 
              value={answer} 
              onClick={callback} 
              className='choice'
            >
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  )
}

export default QuestionCard