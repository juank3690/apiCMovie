import express from "express";
import movieRouter from "./routes/movie.js";
import tvRouter from "./routes/tv.js";
import peopleRouter from "./routes/people.js";
import trendingRouter from "./routes/trending.js";
import dotenv from "dotenv";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use("/api", express.static(path.join(__dirname, "public")));

dotenv.config();

const PORT = process.env.PORT || 3000;


app.use("/api", movieRouter);
app.use("/api", tvRouter);
app.use("/api", peopleRouter);
app.use("/api", trendingRouter);

app.listen(PORT, () => {
  console.clear();
  console.log("Servidor iniciado");
});
import { fileURLToPath } from 'url';
