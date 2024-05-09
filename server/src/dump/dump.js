import { exec } from "node:child_process";
import { google } from "googleapis";
import cron from "node-cron";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const SCOPE = [process.env.SCOPE];

async function backup() {
  try {
    await exec(
      `pg_dump --dbname=postgresql://postgres:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME} >` +
        ` .${process.env.DUMP_PATH}.sql`,
    );
    console.log(Date.now());

    setTimeout(uploadFile, 10000);
  } catch (e) {
    console.error(`error: ${e}`);
  }
}

export async function uploadFile() {
  try {
    const jwtClient = new google.auth.JWT(
      process.env.CLIENT_EMAIL,
      null,
      process.env.PRIVATE_KEY,
      SCOPE,
    );

    const drive = google.drive({ version: "v3", auth: jwtClient });

    const nameDriveDump = Date.now();

    const fileMetaData = {
      name: `dump${nameDriveDump}.sql`,
      parents: [process.env.FOLDER_ID],
    };

    await drive.files.create({
      resource: fileMetaData,
      media: {
        body: fs.createReadStream(process.env.READY_DUMP_PATH),
        mimeType: "text/plain/sql",
      },
      fields: "id",
    });

    fs.unlink(process.env.READY_DUMP_PATH, (err) => {
      if (err) throw err;
      console.log("Файл удален");
    });
  } catch (e) {
    console.error(`error: ${e}`);
  }
}

export const startCron = cron.schedule("* * * * *", () => {
  backup();
});
