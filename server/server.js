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
    category_id = request.params.id;
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
        response.status(422).json({
            status: "error",
            message: "Error creating new category",
        });
    }
});

//Delete Category
app.delete("/api/categories/:id", (request, response) => {
    response.status(200).json({
        status: "success",
        category: "Movies",
    });
});

//Edit Category
app.put("/api/categories/:id", (request, response) => {
    console.log(request.params.id);
    console.log(request.body);
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is up and listening on port ${port}`);
});
