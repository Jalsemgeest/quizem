import StringAnswer from '@/components/StringAnswer.vue'
const AnswerType = require("./answertype");

class Answer {
    /**
     * @param {!string} answer Could be a string, a URL, etc.
     * @param {!AnswerType} type The type of answer it should be treated as.
     */
    constructor(id, answer, type) {
        this.id = id;
        this.answer = answer;
        this.type = type;
    }

    /**
     * 
     * @returns The component that should be rendered based on the value stored.
     */
    getAnswerView() {
        switch (this.type) {
            case AnswerType.STRING:
                return new StringAnswer({
                    id: this.id,
                    answerString: this.answer
                });
            case AnswerType.IMAGE_URL:
                return new StringAnswer({
                    id: this.id,
                    answerString: this.answer
                });
        }
        return '';
    }
}

module.exports = Answer;