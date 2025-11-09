import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
//import userRouter from "./routes/userRouter";
import { getBySurname } from "./controllers/userController.js";

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../src/views"));

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
   res.render("sql");
});

app.get("/users", getBySurname);

//app.use("/users", userRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
