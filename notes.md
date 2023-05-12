## Tables

CREATE TABLE categories (
id SERIAL PRIMARY KEY NOT NULL,
name VARCHAR (50)
);

CREATE TABLE words (
id SERIAL PRIMARY KEY NOT NULL,
name VARCHAR (50) UNIQUE,
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

see tables: \dt

## YouTube Video

https://www.youtube.com/watch?v=7qAXvOFhlDc
2:46:33

https://www.youtube.com/watch?v=NjYsXuSBZ5U
32:10

## Colors

Primary Hex #010C80
RGB rgb(1,12,128)

Secondary Hex #77D4FC
RGB rgb(119,212,252)

## Get into db

psql -d postgres
\c sharkbait

## Scripts

INSERT INTO words(name, category_id) VALUES ('Zootopia', 1), ('Little Mermaid', 1), ('Toy Story', 1), ('Beauty and the Beast', 1), ('Aladdin', 1), ('The Little Rascals', 1), ('Matilda', 1), ('Shrek', 1), ('The Incredibles', 1), ('Cars', 1), ('Happy Feet', 1), ('Ratatouille', 1), ('Up', 1), ('Despicable Me', 1), ('Tangled', 1), ('Inside Out', 1), ('Wreck It Ralph', 1), ('Over the Hedge', 1), ('Mulan', 1), ('Space Jam', 1), ('Hercules', 1), ('Tarzan', 1), ('Sleeping Beauty', 1), ('Star Wars', 1), ('Jurassic Park', 1), ('The Matrix', 1), ('Titanic', 1), ('Jaws', 1), ('The Shining', 1), ('Rocky', 1), ('Forrest Gump', 1), ('The Godfather', 1), ('Jumanji', 1), ('Grease', 1), ('Footloose', 1), ('Twilight', 1), ('Gremlins', 1), ('Ghostbusters', 1), ('Back to the Future', 1), ('The Goonies', 1), ('The Dark Knight', 1), ('Pulp Fiction', 1), ('Fight Club', 1), ('Inception', 1), ('The Avengers', 1), ('Gladiator', 1), ('The Terminator', 1), ('Die Hard', 1), ('The Exorcist', 1), ('Lilo and Stitch', 1), ('Home Alone', 1), ('Stuart Little', 1), ('Frozen', 1), ('Lion King', 1), ('The Shawshank Redemption', 1), ('The Wizard of Oz', 1), ('Top Gun', 1), ('Alien', 1), ('Avatar', 1), ('The Hunger Games', 1), ('Black Panther', 1), ('The Jungle Book', 1), ('Legally Blonde', 1), ('Transformers', 1), ('Friends', 4), ('Breaking Bad', 4), ('Game of Thrones', 4), ('The Office', 4), ('The Simpsons', 4), ('The Walking Dead', 4), ('Lost', 4), ('Black Mirror', 4), ('Sherlock', 4), ('Westworld', 4), ('House of Cards', 4), ('The X Files', 4), ('Stranger Things', 4), ('Family Guy', 4), ('Rick and Morty', 4), ('Ozark', 4), ('The Vampire Diaries', 4), ('Pretty Little Liars', 4), ('One Tree Hill', 4), ('Friday Night Lights', 4), ('American Horror Story', 4), ('Modern Family', 4), ('South Park', 4), ('Tom and Jerry', 4), ('James Bond', 3), ('Indiana Jones', 3), ('Luke Skywalker', 3), ('Darth Vader', 3), ('Harry Potter', 3), ('Hermione Granger', 3), ('Ron Weasley', 3), ('Iron Man', 3), ('Captain America', 3), ('Black Widow', 3), ('Wonder Woman', 3), ('Superman', 3), ('Batman', 3), ('Spider Man', 3), ('Buzz Lightyear', 3), ('Jack Sparrow', 3), ('Spongebob Squarepants', 2), ('Patrick Star', 2), ('Scooby Doo', 2), ('Bugs Bunny', 2), ('Homer Simpson', 2), ('Peter Griffin', 2), ('Squidward Tentacles', 2), ('Garfield', 2), ('Snoopy', 2), ('Popeye', 2), ('Winnie The Pooh', 2), ('Charlie Brown', 2), ('Mickey Mouse', 2), ('Donald Duck', 2), ('Fred Flinstone', 2);
