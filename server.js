const express = require('express')
const Body_Parser = require("body-parser")

const app = express()
app.use(Body_Parser.urlencoded({extended : true}))

app.get("/bmiCalculator", (req, res) => {
    res.sendfile(__dirname + "/bmiCalculator.html")
})

app.post("/bmiCalculator", function (req, res) {
    let height = Number(req.body.height);
    let weight = Number(req.body.weight);
    let result = weight / (height * height)
    res.send("Result : " + result)
})

app.listen("3000", () => {
    console.log('Port is up on 3000')
})