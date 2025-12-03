import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
    res.json({ message: "Backend works!" });
});

app.listen(5000, () => console.log("Server running on port 5000"));
