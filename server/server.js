require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(express.json());

//Categories

//List all categories
app.get("/api/categories", (request, response) => {
    console.log("route handler ran");
    response.status(200).json({
        status: "success",
        data: {
            categories: [
                "Movies",
                "TV Show Characters",
                "TV Shows",
                "Movie Characters",
            ],
        },
    });
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
