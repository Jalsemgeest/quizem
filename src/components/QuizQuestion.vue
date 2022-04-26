<template>
    <div>
        Quiz view!
        <form @submit.prevent="removeQuestion">
            <button>Remove</button>
        </form>
        <!-- I think I need to make this repeating and it's own vue so we
        can reference it as it's own object and have an array of them.
        That way we can edit each of them individually. -->
        <form @submit.prevent="addQuestion">
            <label>Question:</label>
            <input type="text" v-model="q.question" />
            <button>Add</button>
        </form>

        <form @submit.prevent="addAnswer">
            <label>Answer:</label>
            <input type="text" v-model="qA" />
            <select v-model="qT">
                <option value="text" selected="selected">Text</option>
                <option value="image">Image</option>
            </select>
            <button>Add</button>
        </form>

        <ul>
            <li v-for="answer in q.answers" :key="answer.id">
                {{ answer.getAnswerView() }}
            </li>
        </ul>

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
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import Question from '@/models/question.js'

export default defineComponent({
    props: {
        q: Question,
    },
    data: function() {
        return {
            editing: false,
        }
    },
    setup() {
        // this.props.question;
        // // const qQ = ref('question.question');
        // const qA = ref('');
        // const qT = ref('');

        function addQuestion() {
            // if (!qQ.value) return;
            // // quiz.addQuestion(qQ.value, 'text');
            // qQ.value = '';
            // qA.value = '';
        }

        function removeQuestion() {
            this.$emit('removeQuestion', this.q.id);
        }

        return {
            // qQ,
            // qA,
            // qT,
            addQuestion,
            removeQuestion,
        }
    },
    mounted: function() {
        console.log('test');
    },  
})
</script>
