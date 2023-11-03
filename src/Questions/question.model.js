const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema(

    {
        Question : {type : String},
        Options : {type : Object},
        Correct_Answer: {type: String} 
    },
    {
        timestamps: true
    }
);

const Questions = mongoose.model("questions-answers", QuestionSchema);

module.exports = Questions;