<template>
    <div>
        Quiz view!

        <form @submit.prevent="addQuestion">
            <input type="text" v-model="qQ" />
            <input type="text" v-model="qA" />
            <select v-model="qT">
                <option value="text" selected="selected">Text</option>
                <option value="image">Image</option>
            </select>
            <button>Add</button>
        </form>

        <div class="qa-preview">
            <div class="qa-preview-question">
                {{ qQ }}
            </div>
            <div v-if="qT == 'text'" class="qa-preview-answer">
                {{ qA }}
            </div>
            <div v-if="qT == 'image'" class="qa-preview-answer">
                <img v-bind:src="qA" />
            </div>
        </div>

        <div class="questions">
            <ul>
                <li v-for="question in quiz.questions" :key="question.id">
                    <div class="question">{{question.question}}</div>
                    <div class="answer">{{question.answer}}</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { quizStore } from '@/stores/quizStore.js'

export default defineComponent({
    setup() {
        const quiz = quizStore();

        const qQ = ref('');
        const qA = ref('');
        const qT = ref('');

        function addQuestion() {
            if (!qQ.value || !qA.value) return;
            quiz.addQuestion(qQ.value, qA.value, 'text');
            qQ.value = '';
            qA.value = '';
        }

        window.stores = { quiz }

        return {
            qQ,
            qA,
            qT,
            addQuestion,

            quiz,
        }
    },
})
</script>
