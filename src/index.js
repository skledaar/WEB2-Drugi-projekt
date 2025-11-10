import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { authConfig } from "./middleware/auth.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
//import userRouter from "./routes/userRouter";
import blogRouter from "./routes/blogRouter.js";
import { getBySurname } from "./controllers/userController.js";

dotenv.config();

const app = express();

app.set("trust proxy", 1);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../src/views"));

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(authConfig);


app.get("/", (req, res) => {
   res.render("sql");
});

app.use("/blog", blogRouter);

app.get("/users", getBySurname);

app.get("/materimackripto", (req, res) => {
   res.render("materimackripto");
});

//app.use("/users", userRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
