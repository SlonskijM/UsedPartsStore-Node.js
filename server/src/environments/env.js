import dotenv from "dotenv";

dotenv.config();

// PORT
const PORT = process.env.PORT || 5000;

// DataBase configurations
const DB_NAME = process.env.DB_NAME || "postgres";
const DB_USER = process.env.DB_USER || "postgres";
const DB_PASSWORD = process.env.DB_PASSWORD || "postgres";
const DB_HOST = process.env.DB_HOST || "postgres";
const DB_PORT = process.env.DB_PORT || 5432;

//

const SECRET_KEY = process.env.SECRET_KEY;

export { PORT, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT, DB_USER, SECRET_KEY };
