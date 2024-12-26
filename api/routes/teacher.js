const teacherRouter = require("express").Router();
const { sendTeacherCreated, sendTeacher, sendTeachers, sendTeacherUpdated, sendTeacherDeleted } = require("../controllers/teacher");
const { findAllTeachers, findTeacherById, createTeacher, deleteTeacher, updateTeacher } = require("../middlewares/teacher");

teacherRouter.get("/teacher", findAllTeachers, sendTeachers);

teacherRouter.get("/teacher/:id", findTeacherById, sendTeacher);

teacherRouter.post("/teacher", createTeacher, sendTeacherCreated);

teacherRouter.delete("/teacher/:id", deleteTeacher, sendTeacherDeleted);

teacherRouter.put("/teacher/:id", updateTeacher, sendTeacherUpdated);

module.exports = teacherRouter;