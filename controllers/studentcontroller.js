const Student = require('../models/Student');

async function addStudent(req,res){
    try{
        console.log(req.body);
        let student = new Student(req.body);
        await student.save();
        res.render('studentadd');
    }
    catch(error){
        console.log(error);
    }
}

async function getStudent(req,res){
    try{
        let students = await Student.find({});
        console.log(students);
        res.render('studentdetails',{
            students : students
        });
    }
    catch(error){ 
    console.log(error);
    }
}


async function getStudentForEdit(req,res) {
    try {
        let id = req.params.id;
        let student = await Student.findOne({_id : id});
        console.log(student);
        res.render('studentforedit',{
            student : student
        })
    } catch (error) {
        console.log(error);
    }
}


async function updateStudent(req,res){
    try{
        let id = req.params.id;
        console.log(req.body," req,body");
        let student = await Student.findOne({_id : id});
        console.log(student);
        student.rollNo = req.body.rollNo;
        student.firstName = req.body.firstName;
        student.lastName = req.body.lastName;
        student.fatherName = req.body.fatherName;
        student.aadharCardNo = req.body.aadharCardNo;
        student.mobileNo =  req.body.mobileNo;
        await student.save();
        let students = await Student.find({});
        res.render('studentdetails',{
            students : students
        });
    }catch(error){
        console.log('Error Occured',error);
    }
}


async function deleteStudent(req,res){
    try {
            let id =  req.params.id;
            await Student.deleteOne({_id : id});
            let students = await Student.find({});
            res.render('studentdetails',{
                students : students
            });
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    addStudent,
    getStudent,
    getStudentForEdit, 
    updateStudent,
    deleteStudent
}