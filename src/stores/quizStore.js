import { defineStore } from 'pinia'
import Question from '@/models/question.js'

export const quizStore = defineStore({
    id: 'quiz',
    state: () => ({
        /** @type {Question[]} */
        qState: [],
    }),
    getters: {
        questions: (state) => {
            // We can add some special massaging to make rendering this easier.
            return state.qState;
        },
    },
    actions: {
        addQuestion(question, answer, type) {
            this.qState.push(new Question(question, answer, type));
        }
    }
})