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
