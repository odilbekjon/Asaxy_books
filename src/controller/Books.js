const express = require('express')
const app = express()
const { Pool } = require('pg')

app.use(express.json())

// POOL
const pool = new Pool({
    connectionString:'postgres://postgres:odil@localhost:5432/lesson_3'
})

// GET BOOKS
const GET = async (_,res) => {

    const client = await pool.connect()
    
    const { rows } = await client.query('SELECT * FROM books_shop order by book_id desc')

    const { rows : sort_author } = await client.query('SELECT * FROM book_sort_author')
    const { rows : sort_edition } = await client.query('SELECT * FROM book_sort_edition')
    const { rows : sort_language } = await client.query('SELECT * FROM book_sort_language')

    client.release()

    res.render('index', { buildings: { rows, sort_author , sort_edition ,sort_language} })
}

// GET_BY_ID
const GET_BY_ID = async (req,res) => {
    const { id } = req.params
    
    const client = await pool.connect()

    const { rows: [ lang ] } = await client.query('SELECT * FROM book_sort_language WHERE sort_la_id = $1', [ id ])
    const { rows: book } = await client.query('SELECT book_id, book_name, book_price, book_year FROM books_shop WHERE sort_la_id = $1', [lang?.sort_la_id ])
     
    lang.book = book

    client.release()
    res.json(lang)
}

// GET_BY_EDITION
const GET_BY_EDITION = async (req,res) => {
    const { id } = req.params
    
    const client = await pool.connect()

    const { rows: [ edition ] } = await client.query('SELECT * FROM book_sort_edition WHERE  sort_e_id = $1', [ id ])
    const { rows: book } = await client.query('SELECT book_id, book_name, book_price, book_year FROM books_shop WHERE sort_e_id = $1', [edition?.sort_e_id ])
     
    edition.book = book

    client.release()
    res.json(edition)
}

// GET_BY_AUTHOR
const GET_BY_AUTHOR = async (req,res) => {
    const { id } = req.params
    
    const client = await pool.connect()

    const { rows: [ author ] } = await client.query('SELECT * FROM book_sort_author WHERE  sort_a_id = $1', [ id ])
    const { rows: book } = await client.query('SELECT book_id, book_name, book_price, book_year FROM books_shop WHERE sort_a_id = $1', [author?.sort_a_id ])
     
    author.book = book

    client.release()
    res.json(author)
}

// GET_BY_SEARCH
const GET_BY_SERACH = async (req,res) => {
    const { s } = req.query;
    
    const client = await pool.connect()

    if(s){
     const { rows } = await client.query('SELECT * FROM books_shop WHERE book_name LIKE $1', [ `%${s}%` ]);
     if(!rows.length){
        const { rows } = await client.query('SELECT * FROM books_shop WHERE book_name ILIKE $1', [ `% ${s}%` ]);
        return res.json(rows)
     }else{
         return res.json(rows)
     }
    }

    const books = await client.query('SELECT * FROM books_shop');

    client.release()
    res.json(books)
}

// GET_BY_LIMIT
const GET_BY_LIMIT = async (req,res) => {
    const { page, limit } = req.query
    
    const client = await pool.connect()

    const { rows } = await client.query('SELECT * FROM books_shop OFFSET $1 LIMIT $2',
    [ (page - 1) * limit, limit ])
     
    client.release()
    res.json(rows)
}

const GET_BY_SORT = async (req,res) => {
    console.log(req.query);
    const { sortName } = req.query
    
    const client = await pool.connect()

    if (sortName !== "asc" && sortName !== "desc" && sortName === "new") {
        const { rows } = await client.query(
          "SELECT * FROM books_shop order by book_id desc"
        );
        return res.json(rows);
      }
      if (sortName !== "asc" && sortName !== "desc" && sortName === "year") {
        const { rows } = await client.query(
          "SELECT * FROM books_shop order by book_year desc"
        );
        return res.json(rows);
      }
      const { rows } = await client.query(
        "SELECT * FROM books_shop order by book_name " + sortName
    );
     
    client.release()
    res.json(rows)
}

// POST 
const POST = async (req,res) => {
    const { name, price, year, author, edition, language  } = req.body

    const client = await pool.connect()

    const { rows } = await client.query('INSERT INTO books_shop(book_name, book_price,book_year,sort_a_id, sort_e_id,sort_la_id) VALUES($1, $2, $3, $4, $5, $6) RETURNING *',
    [ name, price , year, author,edition, language ])
    
    client.release()

    res.render('index')
    if(rows.length){
       res.redirect("/");
    }
}

// PUT
const PUT = async (req,res) => {
    const { name , id } = req.body

    const client = await pool.connect()

    const { rows } = await client.query('UPDATE books_shop SET book_name = $1  WHERE book_id = $2 RETURNING * ', [ name , id])

    client.release()
    res.json(rows)
}

// DELETE
const DELETE = async (req,res) => {
    const { id } = req.body

    const client = await pool.connect()

    const { rows } = await client.query('DELETE FROM books_shop WHERE book_id = $1 RETURNING *', [ id ])
    console.log(rows);

    res.json(rows)
}


module.exports = {
    GET, GET_BY_ID ,
    GET_BY_EDITION,
    GET_BY_AUTHOR,
    GET_BY_SERACH,
    GET_BY_LIMIT,
    GET_BY_SORT,
    POST, PUT,
    DELETE
}