class Question {
    constructor(question, answer, type){
        this.question = question;
        this.answer = answer;
        this.type = type;
        this.id = Date.now();
    }
}

export default Question;