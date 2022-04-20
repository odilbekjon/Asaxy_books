const express = require('express')
const router = express.Router()

const Books = require('../controller/Books')

router
    .get('/',Books.GET)
    .post('/',Books.POST)
    .put('/',Books.PUT)
    .delete('/',Books.DELETE)
    .get('/sort_lang/:id',Books.GET_BY_ID)
    .get('/sort_edition/:id',Books.GET_BY_EDITION)
    .get('/sort_author/:id',Books.GET_BY_AUTHOR)
    .get('/sort_limit',Books.GET_BY_LIMIT)
    .get('/sort_name',Books.GET_BY_SORT)
    .get('/search',Books.GET_BY_SERACH)
   

module.exports = router