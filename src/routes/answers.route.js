const express = require("express");
const app = express.Router();

const Question = require("../models/question.model");

app.post("/", async (req,res) => {

    const {user_answers} = req.body;
    console.log(user_answers);

    try{

        let data = await Question.find({}, {Correct_Answer : 1})
        let points = 0;

       

        for(let i=0;i<user_answers.length;i++){
            if(user_answers[i] === data[i].Correct_Answer){
                points++;
            }
        }
        
        return res.send({Status: "OK", points : points})

    }
    catch (e) {
        res.status(400).send({Status : "Error"});
     }
})

module.exports = app;