const sendTeacherCreated = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.teacher));
};

const sendTeacher = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.teacher));
};

const sendTeachers = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.teachersArray));
};

const sendTeacherUpdated = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify({ message: "Учитель обновлен" }));
};

const sendTeacherDeleted = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.teacher));
};

module.exports = { sendTeacherCreated, sendTeacher, sendTeachers, sendTeacherUpdated, sendTeacherDeleted }