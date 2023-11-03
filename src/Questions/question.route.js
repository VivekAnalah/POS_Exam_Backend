const express = require("express");
const app = express.Router();

const Question = require("./question.model");

app.get("/", async (req,res) => {

    try{

        let data = await Question.find({}, {Correct_Answer : 0})

        return res.send({Status: "OK", data : data})

    }
    catch (e) {
        res.status(400).send({Status : "Error"});

    }
})

module.exports = app;
