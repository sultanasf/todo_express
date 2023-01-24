const router = require('express').Router();
const Todo = require('../models/todo');

router.post('/add/todo', (req, res) => {
    const { todo } = req.body;
    const newTodo = new Todo({ todo })

    newTodo.save()
        .then(() => {
            console.log('Succesfully add list')
            res.redirect('/')
        })
        .catch((err) => {
            console.log(err);
        })
})

router.get('/delete/todo/:_id', (req, res) => {
    const { _id } = req.params;
    Todo.deleteOne({ _id })
        .then(() => {
            console.log('Deleted succesfully')
            res.redirect('/')
        })
        .catch((err) => {
            console.log(err)
        })
})

module.exports = router;