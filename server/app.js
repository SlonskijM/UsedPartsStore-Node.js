import express from "express";
import { DataBase } from "./src/db/db.js";
import router from "./src/routes/index.js";
import cors from "cors";
import fileUpload from "express-fileupload";
import { fileURLToPath } from "url";
import path from "path";
import { PORT } from "./src/environments/env.js";
import { startCron } from "./src/dump/dump.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "./src/static")));
app.use(fileUpload({}));
app.use("/api", router);

startCron.start();

const start = async () => {
  await DataBase.authenticate();
  await app.listen(PORT, () => console.log(`Server start on port ${PORT}`));
};

start();
