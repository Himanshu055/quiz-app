import { QuizConfig } from './quiz-config';
import { Question } from './question';

export class Quiz {
    [x: string]: any;
    slice(index: number, arg1: number) {
      throw new Error('Method not implemented.');
    }
    length(length: any) {
      throw new Error('Method not implemented.');
    }
    id: number;
    name: string;
    description: string;
    questions: Question[];
    config: QuizConfig;

    constructor(data: any) {
        if (data) {
            this.id = data.id;
            this.name = data.name;
            this.description = data.description;
            this.config = new QuizConfig(data.config);
            this.questions = [];
            data.questions.forEach(q => {
                this.questions.push(new Question(q));
            });
        }
    }
}
