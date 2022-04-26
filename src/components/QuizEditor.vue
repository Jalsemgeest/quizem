<template>
    <div>
        Quiz view!
        
        <!-- I think I need to make this repeating and it's own vue so we
        can reference it as it's own object and have an array of them.
        That way we can edit each of them individually. -->
        <ul>
            <li v-for="question in quiz.questions" :key="question.id">
                <QuizQuestion v-bind:q="question" @removeQuestion="removeQuestion" />
            </li>
        </ul>

        <form @submit.prevent="addNewQuestion">
            <button>Add</button>
        </form>

    </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { quizStore } from '@/stores/quizStore.js'
import QuizQuestion from '@/components/QuizQuestion.vue'

export default defineComponent({
    components: {
        QuizQuestion,
    },
    setup() {
        const quiz = quizStore();

        window.stores = { quiz }

        function addNewQuestion() {
            quiz.addQuestion('');
        }

        return {
            quiz,
            addNewQuestion,
        }
    },
    methods: {
        removeQuestion(id) {
            this.quiz.removeQuestion(id);
        }
    }
})
</script>
