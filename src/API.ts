import { shuffleArray } from './utils';
import { questions } from './questions'

export type Question = {
  correct_answer: string;
  incorrect_answers: string[];
  question: string;
}

export type QuestionsState = Question & { answers: string[] };


export const fetchQuizQuestions = async (amount: number) => {
  return questions.map((question: Question) => ({
    ...question,
    answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
  }))
}