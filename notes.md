## Tables

CREATE TABLE categories (
id SERIAL PRIMARY KEY NOT NULL,
name VARCHAR (50)
);

CREATE TABLE words (
id SERIAL PRIMARY KEY NOT NULL,
name VARCHAR (50),
category_id INT REFERENCES categories(id),
used BOOLEAN DEFAULT false
);

CREATE TABLE word_of_day (
id SERIAL PRIMARY KEY NOT NULL,
word_id INT REFERENCES words("id"),
date VARCHAR(50)
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

## Colors

Primary Hex #010C80
RGB rgb(1,12,128)

Secondary Hex #77D4FC
RGB rgb(119,212,252)
