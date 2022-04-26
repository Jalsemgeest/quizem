import { defineStore } from 'pinia'
import Question from '@/models/question.js'

export const quizStore = defineStore({
    id: 'quiz',
    state: () => ({
        /** @type {Question[]} */
        qState: [new Question('test')],
    }),
    getters: {
        questions: (state) => {
            // We can add some special massaging to make rendering this easier.
            return state.qState;
        },
    },
    actions: {
        addQuestion(question) {
            this.qState.push(new Question(question));
        },
        addAnswer(questionId, answer, type) {
            console.log(questionId, answer, type);
        },
        removeQuestion(questionId) {
            this.qState = this.qState.filter(q => q.id != questionId);
        }
    }
})