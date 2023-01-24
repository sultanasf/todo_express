const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connection
require('dotenv').config();

mongoose.connect(process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/todo_express', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
app.on('error', (error) => { console.error(error); })
app.once('open', () => { console.log('Connected to Mongoose'); })

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.set('view engine', 'ejs')

const indexRouter = require('./routes/index')
app.use(indexRouter);
const listRouter = require('./routes/list')
app.use(listRouter);

app.listen(process.env.PORT || 3000, () => {
    console.log('server running')
});