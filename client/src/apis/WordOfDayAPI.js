import axios from "axios";

const baseURL =
    process.env.NODE_ENV === "production" ? "api" : "http://localhost:3005/api";

export default axios.create({
    baseURL,
});
