const express = require('express');
const http = require('http');
const PORT = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const db = require('./dataBase').getInstance();

db.setModels();

let {usersRouter, authRouter, adminRouter, feedsRouter} = require('./router');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/user', usersRouter);
app.use('/auth', authRouter);
app.use('/admin', adminRouter);
app.use('/feed', feedsRouter);
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE,PATCH");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});
server.listen(PORT, () => console.log(`Server has been started on port ${PORT}`));
