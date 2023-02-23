import shuffleArray from 'shuffle-array';

import { CorrectAnswer, FakeAnswer, QuestionAndOptions } from './QuestionAndOptions';

export class QuestionAndOptionsRandomGenerator {
  public generate(min: number = 10, max: number = 19): QuestionAndOptions {
    const multiplicand = Math.floor(Math.random() * (max - min)) + min;
    const multiplier = Math.floor(Math.random() * (max - min)) + min;

    const correctAnswer = this.createCorrectAnswer(multiplicand, multiplier);
    const fakeAnswers = this.createFakeAnswer(multiplicand, multiplier);

    return {
      question: `${multiplicand} x ${multiplier} はいくつ？`,
      options: shuffleArray([correctAnswer, ...fakeAnswers]),
      correctAnswer,
      fakeAnswers,
    };
  };

  private createCorrectAnswer(multiplicand: number, multiplier: number): CorrectAnswer {
    return {
      value: multiplicand * multiplier,
      formula: this.createFormula(multiplicand, multiplier, multiplicand * multiplier),
    };
  }

  private createFakeAnswer(multiplicand: number, multiplier: number): FakeAnswer[] {
    const correctAnswerString = String(multiplicand * multiplier); 
    const secondDigit = Number(correctAnswerString[1]);
    return shuffleArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter((num) => num !== secondDigit))
    .slice(0, 3)
    .map((random) => {
      return correctAnswerString.slice(0, 1) + random + correctAnswerString.slice(2, 3);
    })
    .map((fakeAnswerString) => {
      return Number(fakeAnswerString);
    })
    .map((fakeAnswer) => {
      return {
        value: fakeAnswer,
        formula: this.createFormula(multiplicand, multiplier, fakeAnswer),
      }
    });
  };

  private createFormula(multiplicand: number, multiplier: number, answer: number): string {
    return `${multiplicand}x${multiplier}=${answer}`;
  };
}