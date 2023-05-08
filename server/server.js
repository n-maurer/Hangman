require("dotenv").config();
const express = require("express");
const db = require("./db");
const app = express();

app.use(express.json());

//Categories

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

//Words

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

//Word of Day

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
    try {
        const results = await db.query(
            "INSERT INTO word_of_day (word_id, date) VALUES ($1,$2) returning *",
            [request.body.word_id, today]
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

//Update Word of Day
app.put("/api/word-of-day/:id", async (request, response) => {
    var wod_id = request.params.id;
    try {
        const results = await db.query(
            "UPDATE word_of_day SET word_id = $1 WHERE id = $2 RETURNING *",
            [request.body.word_id, wod_id]
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

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is up and listening on port ${port}`);
});
