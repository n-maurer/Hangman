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
app.get("/api/categories/:id", (request, response) => {
    response.status(200).json({
        status: "success",
        category: "Movies",
    });
});

//Create Category
app.post("/api/categories", (request, response) => {
    console.log(request.body);
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
