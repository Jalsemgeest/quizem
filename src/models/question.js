class Question {
    /**
     * 
     * @param {!string} question 
     * @param {?Array<Answer>} answer 
     */
    constructor(question, answers){
        this.question = question;
        this.answers = answers;
        this.id = Date.now();
    }

    addAnswer(answer) {
        console.log(answer);
    }

    removeAnswer(answerId) {
        console.log(answerId);
    }
}

export default Question;