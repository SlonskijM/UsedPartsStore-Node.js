import express from "express";
import dotenv from "dotenv";
import { DataBase } from "./src/db/db.js";
import router from "./src/routes/index.js";
import cors from "cors";
import fileUpload from "express-fileupload";
import { fileURLToPath } from "url";
import path from "path";

import { sendPassword } from "./src/telegraf/tgBot.cjs";

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));
app.use("/api", router);

const start = async () => {
  await DataBase.authenticate();
  // await DataBase.sync();
  await app.listen(process.env.PORT, () =>
    console.log(`Server start on port ${process.env.PORT}`),
  );
};

start();
