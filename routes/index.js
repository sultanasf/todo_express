const router = require('express').Router()
const Todo = require('../models/todo');

router.get('/', async (req, res) => {
    const allList = await Todo.find()
    res.render('index', { todo: allList })
})

module.exports = router;