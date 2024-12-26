const teacher = require("../models/teacher");

const findAllTeachers = async (req, res, next) => {
    req.teachersArray = await teacher.find({});
    next();
}

const findTeacherById = async (req, res, next) => {
    req.teacher = await teacher.findById(req.params.id);
    next();
}

const createTeacher = async (req, res, next) => {
    req.teacher = await teacher.create(req.body);
    next();
}

const deleteTeacher = async (req, res, next) => {
    req.teacher = await teacher.findByIdAndDelete(req.params.id);
    next();
}

const updateTeacher = async (req, res, next) => {
     req.teacher = await teacher.findByIdAndUpdate(req.params.id, req.body);
     next();
};

module.exports = { findAllTeachers, findTeacherById, createTeacher, deleteTeacher, updateTeacher }