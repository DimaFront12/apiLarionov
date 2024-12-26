const express = require('express');
const bodyParser = require("body-parser");
const apiRouter = require("./routes/apiRouter")

const connectToDatabase = require('./database/connect');

const app = express();
const PORT = 3000;

connectToDatabase();

app.use(
    bodyParser.json(),
    apiRouter,
);

app.listen(PORT, () => {
    console.log(`Server is running at PORT http://localhost:${PORT}`);
});