require("dotenv").config();
const express = require("express");
const db = require("./db");
const app = express();

app.use(express.json());

//Categories//////////////////////////////////////////////////////////

//List all categories
app.get("/api/categories", async (request, response) => {
    try {
        const results = await db.query("SELECT * FROM categories");
        console.log(results);
        response.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                categories: results.rows,
            },
        });
    } catch (err) {
        response.status(500).json({
            status: "error",
            message: "Error getting all categories",
        });
    }
});

//Get one Category details
app.get("/api/categories/:id", async (request, response) => {
    var category_id = request.params.id;
    try {
        const results = await db.query(
            "SELECT * FROM categories WHERE id = $1",
            [category_id]
        );
        console.log(results);
        response.status(200).json({
            status: "success",
            data: {
                categories: results.rows[0],
            },
        });
    } catch (err) {
        response.status(500).json({
            status: "error",
            message: "Error getting category details",
        });
    }
});

//Create Category
app.post("/api/categories", async (request, response) => {
    try {
        const results = await db.query(
            "INSERT INTO categories (name) VALUES ($1) returning *",
            [request.body.name]
        );
        response.status(200).json({
            status: "success",
            data: {
                categories: results.rows[0],
            },
        });
    } catch (err) {
        response.status(400).json({
            status: "error",
            message: "Error creating new category",
        });
    }
});

//Delete Category
app.delete("/api/categories/:id", async (request, response) => {
    var category_id = request.params.id;
    try {
        const results = await db.query(
            "DELETE FROM categories WHERE id = ($1)",
            [category_id]
        );
        response.status(200).json({
            status: "success",
        });
    } catch (err) {
        response.status(400).json({
            status: "error",
            message: "Error deleting category",
        });
    }
});

//Update Category
app.put("/api/categories/:id", async (request, response) => {
    var category_id = request.params.id;
    try {
        const results = await db.query(
            "UPDATE categories SET name = ($1) WHERE id = ($2) returning *",
            [request.body.name, category_id]
        );
        response.status(200).json({
            status: "success",
            data: {
                categories: results.rows[0],
            },
        });
    } catch (err) {
        response.status(400).json({
            status: "error",
            message: "Error updating category",
        });
    }
});

//Words//////////////////////////////////////////////////////////

//List all Words
app.get("/api/words", async (request, response) => {
    try {
        const results = await db.query(
            `SELECT w.id, w.name, w.category_id, c.name AS category_name
             FROM words w
             LEFT JOIN categories c ON w.category_id = c.id`
        );
        console.log(results);
        response.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                words: results.rows,
            },
        });
    } catch (err) {
        response.status(500).json({
            status: "error",
            message: "Error getting all words",
        });
    }
});

//Get one Word details
app.get("/api/words/:id", async (request, response) => {
    var word_id = request.params.id;
    try {
        const results = await db.query(
            `SELECT w.id, w.name, w.category_id, c.name AS category_name
             FROM words w
             LEFT JOIN categories c ON w.category_id = c.id
             WHERE w.id = $1`,
            [word_id]
        );
        console.log(results);
        response.status(200).json({
            status: "success",
            data: {
                categories: results.rows[0],
            },
        });
    } catch (err) {
        response.status(500).json({
            status: "error",
            message: "Error getting word details",
        });
    }
});

//Create Word
app.post("/api/words", async (request, response) => {
    try {
        const results = await db.query(
            "INSERT INTO words (name, category_id) VALUES ($1,$2) returning *",
            [request.body.name, request.body.category_id]
        );
        response.status(200).json({
            status: "success",
            data: {
                words: results.rows[0],
            },
        });
    } catch (err) {
        response.status(400).json({
            status: "error",
            message: "Error creating new word",
        });
    }
});

//Delete Word
app.delete("/api/words/:id", async (request, response) => {
    var word_id = request.params.id;
    try {
        const results = await db.query("DELETE FROM words WHERE id = ($1)", [
            word_id,
        ]);
        response.status(200).json({
            status: "success",
        });
    } catch (err) {
        response.status(400).json({
            status: "error",
            message: "Error deleting word",
        });
    }
});

//Update Word
app.put("/api/words/:id", async (request, response) => {
    var word_id = request.params.id;
    try {
        const results = await db.query(
            "UPDATE words SET name = $1, category_id = $2 WHERE id = $3 RETURNING *",
            [request.body.name, request.body.category_id, word_id]
        );
        response.status(200).json({
            status: "success",
            data: {
                words: results.rows[0],
            },
        });
    } catch (err) {
        response.status(400).json({
            status: "error",
            message: "Error updating word",
        });
    }
});

//Word of Day//////////////////////////////////////////////////////////

//Todays Date
function getTodaysDate() {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }
    let formattedDate = year + "/" + month + "/" + day;
    return formattedDate;
}

//List all Word of Day Table
app.get("/api/word-of-day", async (request, response) => {
    try {
        const results = await db.query(
            `SELECT wod.id, wod.date, wod.word_id, w.name AS word_name
             FROM word_of_day wod
             LEFT JOIN words w ON wod.word_id = w.id`
        );
        console.log(results);
        response.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                word_of_day: results.rows,
            },
        });
    } catch (err) {
        response.status(500).json({
            status: "error",
            message: "Error getting all words",
        });
    }
});

//Random Word from Words Table
app.get("/api/word-of-day/random", async (request, response) => {
    try {
        const randomResults = await db.query(
            `SELECT w.id, w.name, w.category_id, c.name AS category_name
             FROM words w
             LEFT JOIN categories c ON w.category_id = c.id
             ORDER BY random()
             LIMIT 1`
        );
        console.log(randomResults);
        response.status(200).json({
            status: "success",
            results: randomResults.rows.length,
            data: {
                words: randomResults.rows,
            },
        });
    } catch (err) {
        response.status(500).json({
            status: "error",
            message: "Error getting random word",
        });
    }
});

//Create Word of Day
//currently the data you send is just a word id (from word table)
app.post("/api/word-of-day", async (request, response) => {
    var today = getTodaysDate();
    var word_id = request.body.word_id;
    try {
        const results = await db.query(
            "INSERT INTO word_of_day (word_id, date) VALUES ($1,$2) returning *",
            [word_id, today]
        );
        response.status(200).json({
            status: "success",
            data: {
                word_of_day: results.rows[0],
            },
        });
    } catch (err) {
        response.status(400).json({
            status: "error",
            message: "Error creating new word of day",
        });
    }
});

//Delete Word of Day
//By ID
app.delete("/api/word-of-day/:id", async (request, response) => {
    var wod_id = request.params.id;
    try {
        const results = await db.query(
            "DELETE FROM word_of_day WHERE id = ($1)",
            [wod_id]
        );
        response.status(200).json({
            status: "success",
        });
    } catch (err) {
        response.status(400).json({
            status: "error",
            message: "Error deleting word of day",
        });
    }
});

//Clear Word of Day
app.delete("/api/word-of-day/table/clear", async (request, response) => {
    try {
        const results = await db.query("DELETE FROM word_of_day");
        response.status(200).json({
            status: "success",
        });
    } catch (err) {
        response.status(400).json({
            status: "error",
            message: "Error clearing word of day table",
        });
    }
});

//Update Word of Day
//Updates date to todays date
app.put("/api/word-of-day/:id", async (request, response) => {
    var today = getTodaysDate();
    var wod_id = request.params.id;
    try {
        const results = await db.query(
            "UPDATE word_of_day SET word_id = $1, date = $2 WHERE id = $3 RETURNING *",
            [request.body.word_id, today, wod_id]
        );
        response.status(200).json({
            status: "success",
            data: {
                words: results.rows[0],
            },
        });
    } catch (err) {
        response.status(400).json({
            status: "error",
            message: "Error updating word of day",
        });
    }
});

//Used Words//////////////////////////////////////////////////////////

//List Used Words
app.get("/api/used-words", async (request, response) => {
    try {
        const results = await db.query(
            `SELECT u.id, u.date_used, u.word_id, w.name AS word_name
             FROM used_words u
             LEFT JOIN words w ON u.word_id = w.id`
        );
        console.log(results);
        response.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                used_words: results.rows,
            },
        });
    } catch (err) {
        response.status(500).json({
            status: "error",
            message: "Error getting used words",
        });
    }
});

//Get Used Word Details
app.get("/api/used-words/:id", async (request, response) => {
    var word_id = request.params.id;
    try {
        const results = await db.query(
            `SELECT u.id, u.date_used, u.word_id, w.name AS word_name
             FROM used_words u
             LEFT JOIN words w ON u.word_id = w.id
             WHERE u.id = $1`,
            [word_id]
        );
        console.log(results);
        response.status(200).json({
            status: "success",
            data: {
                categories: results.rows[0],
            },
        });
    } catch (err) {
        response.status(500).json({
            status: "error",
            message: "Error getting used word details",
        });
    }
});

//Create Used Word
app.post("/api/used-words", async (request, response) => {
    var word_id = request.body.word_id;
    var date_used = request.body.date_used;
    try {
        const results = await db.query(
            "INSERT INTO used_words (word_id, date_used) VALUES ($1,$2) returning *",
            [word_id, date_used]
        );
        response.status(200).json({
            status: "success",
            data: {
                used_words: results.rows[0],
            },
        });
    } catch (err) {
        response.status(400).json({
            status: "error",
            message: "Error creating new used word",
        });
    }
});

//Update Used Word
app.put("/api/used-words/:id", async (request, response) => {
    var used_word_id = request.params.id;
    word_id = request.body.word_id;
    var date_used = request.body.date_used;
    try {
        const results = await db.query(
            "UPDATE used_words SET word_id = $1, date_used = $2 WHERE id = $3 RETURNING *",
            [word_id, date_used, used_word_id]
        );
        response.status(200).json({
            status: "success",
            data: {
                words: results.rows[0],
            },
        });
    } catch (err) {
        response.status(400).json({
            status: "error",
            message: "Error updating used word",
        });
    }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is up and listening on port ${port}`);
});
