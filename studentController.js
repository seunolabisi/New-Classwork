
const students = require("./model.js")

const studentPage = (req, res)=>{
    res.status(200).json(student)

}
const findOne = (req, res)=>{
    
    const id = req.params.studentId

    const student = students.find((ele)=>ele.id == id)

    if(!student){
        return res.status(404).json("Student with the id does not exits")
    }

    res.status(200).json(student)
}

const addStudent = (req, res)=>{
    console.log(req.body)
    const studentProfile = {
        id:students.length+1,
        name:req.body.name,
        score:req.body.score,
        remark:req.body.remark
    }
    students.create(studentProfile)

    res.status(201).json("New student has been successfully created")
}
module.exports = {studentPage, findOne, addStudent}