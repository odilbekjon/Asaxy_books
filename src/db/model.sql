CREATE DATABASE lesson_3;

-- CREATE BOOK_AUTHOR
CREATE TABLE book_sort_author(
    sort_a_id serial not null PRIMARY KEY ,
    sort_a_name text not null 
);

INSERT INTO book_sort_author(sort_a_name) 
VALUES('Xudoyberdi Tuxtaboyev'),
      ('Otkir Hoshimov'),
      ('Bobur'),
      ('Erkin Vohidov'),
      ('Hamsa Hakimzoda'),
      ('Марк Мэнсон'),
      ('Роберт Кийосаки'),
      ('Уолтер Айзексон'),
      ('Richard Koch'),
      ('Barak Obama'),
      ('Toxir Malik');


-- CREATE BOOK_EDITION
CREATE TABLE book_sort_edition(
    sort_e_id serial not null PRIMARY KEY ,
    sort_e_name text not null 
);

INSERT INTO book_sort_edition(sort_e_name)
VALUES('Hilol nashr'),
      ('Ziyo nashr'),
      ('Axat nashr'); 


-- CREATE BOOK_LANGUAGE
CREATE TABLE book_sort_language(
    sort_la_id serial not null PRIMARY KEY ,
    sort_la_name text not null 
);

INSERT INTO book_sort_language(sort_la_name) 
VALUES('Ozbek'),
      ('English'),
      ('Russy');


-- CREATE BOOK_SHOPS
CREATE TABLE books_shop(
    book_id serial PRIMARY KEY not null , 
    book_name text not null , 
    book_price int ,
    book_year VARCHAR(32),
    sort_a_id int REFERENCES book_sort_author(sort_a_id),    
    sort_e_id int REFERENCES book_sort_edition(sort_e_id),    
    sort_la_id int REFERENCES book_sort_language(sort_la_id)    
);

-- INSERT BOOK_SHOP
INSERT INTO books_shop(book_name, book_price, book_year,sort_a_id, sort_e_id,sort_la_id) 
VALUES('Sariq devni minib', 100000, 2014, 1, 2,1),
      ('Chol havosi', 40000, 2013, 2, 2, 1),
      ('Toylar muborak', 70000, 2017, 2, 2, 1),
      ('Ikki eshik orasi', 70000, 2017, 2, 3,1),
      ('Boburnoma', 23000, 2018, 3, 3, 1),
      ('Тонкое искусство пофигизма',  55000, 2019, 7, 3, 3),
      ('Всё хреново.', 98000, 2009, 7, 3, 3),
      ('Nido', 88000, 2008, 4, 1, 1),
      ('Darmon Istamas', 55000, 202, 4, 1, 1),
      ('Bedil', 58000, 2021, 5, 1, 1),
      ('Qiyomat', 98000, 202, 5, 1, 1),
      ('Interseting Book', 10000, 2014, 9, 1, 2),
      ('Full time',  50000, 2013, 9, 1, 2),
      ('Factulness',  60000, 2018, 9, 1, 2),
      ('Jimjitlik', 23000, 2018 , 5, 1, 1),
      ('Sarmoyador',  58000, 2019, 5, 2, 1),
      ('Богатый папа', 65000, 2009, 8, 2, 3),
      ('Стив Джобс', 88000, 2008, 8, 2, 3),
      ('Odamiylik', 55000, 2022, 11, 3, 1),
      ('Tijorat', 58000, 2021, 11 , 3, 1),
      ('Flowers for', 98000, 2022 , 10, 3, 2),
      ('A Promised Land', 99000, 2021, 10, 2, 2),
      ('Easy Way',  78000, 2023 , 10, 1, 2),
      ('Pulils Book',  56000, 202, 10, 1, 2),
      ('Elon Mask Tesla',  45000, 2020, 10, 2, 2);




DROP TABLE  book_sort_author CASCADE;
TRUNCATE TABLE books_shop;
SELECT * FROM book_sort_author;
SELECT * FROM book_sort_edition;
SELECT * FROM book_sort_language;
SELECT * FROM books_shop;

SELECT * FROM books_shop OFFSET 0 LIMIT 10; 

UPDATE books_shop SET book_name = 'Sariq bola' WHERE book_id = 77;
UPDATE markets__branches SET marketB_name = 'Salom market' WHERE market_id = 1

       