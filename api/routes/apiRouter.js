const teacherRouter = require("./teacher");

const apiRouter = require("express").Router();

apiRouter.use("/api", teacherRouter); 


module.exports = apiRouter;