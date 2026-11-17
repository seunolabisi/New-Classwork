const express = require("express")
require("./db")
const app = express()
app.use(express.json())
const {studentPage,findOne,addStudent} = require("./studentController.js")

const port = 3000
const students = require("./student.js")
app.get("/idmark", studentPage)

app.get("/username/:name", (req, res)=>{
    const name = req.params.name
    res.status(200).json(`Welcome mr ${name}`)
})
app.get("/allstudent", (req, res) => {
    res.status(200).json(students)
})
app.get("/allstudent/:studentId", findOne)

app.post("/newStudent", addStudent)
app.listen(port, ()=>{
    console.log(`My app is running on ${port}`)
})