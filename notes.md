## Tables

CREATE TABLE categories (
id SERIAL PRIMARY KEY NOT NULL,
name VARCHAR (50)
);

CREATE TABLE words (
id SERIAL PRIMARY KEY NOT NULL,
name VARCHAR (50),
category_id INT REFERENCES categories(id)
);

CREATE TABLE word_of_day (
id SERIAL PRIMARY KEY NOT NULL,
word_id INT REFERENCES words("id"),
date DATE
);

CREATE TABLE used_words (
id SERIAL PRIMARY KEY NOT NULL,
word_id INT REFERENCES words("id"),
date_used DATE
);

## Commands

node server.js in server repo to start server
npm start

## YouTube Video

https://www.youtube.com/watch?v=7qAXvOFhlDc
2:46:33
