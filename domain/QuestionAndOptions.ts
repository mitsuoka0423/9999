export interface QuestionAndOptions {
  question: string;
  options: Array<CorrectAnswer | FakeAnswer>;
  correctAnswer: CorrectAnswer;
  fakeAnswers: FakeAnswer[];
}

export interface CorrectAnswer {
  value: number;
  formula: string;
};

export interface FakeAnswer {
  value: number;
  formula: string;
};
