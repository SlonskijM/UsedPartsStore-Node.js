import { Announcement } from "../models/models.js";
import { JSON, where } from "sequelize";
import * as uuid from "uuid";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

function sortGetAll(info) {
  for (const key in info) {
    if (!info[key]) {
      delete info[key];
    }
  }

  return info;
}

class AnnouncementController {
  async create(req, res) {
    try {
      // const {
      //   carId,
      //   body_year,
      //   volume,
      //   fuelId,
      //   bodyId,
      //   transmissionId,
      //   typeDetailId,
      //   advertisementArticle,
      //   detailNumber,
      //   description,
      //   price,
      //   discount,
      //   partCondition,
      //   VIN,
      // } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));
      // const announcement = await Announcement.create({
      //   carId,
      //   body_year,
      //   volume,
      //   fuelId,
      //   bodyId,
      //   transmissionId,
      //   typeDetailId,
      //   img: fileName,
      //   advertisementArticle,
      //   detailNumber,
      //   description,
      //   price,
      //   discount,
      //   partCondition,
      //   VIN,
      // });
      // for (let i = 0; i < img.length; i++) {
      //   console.log(img[i].name);
      // }

      if (Array.isArray(img)) {
        console.log(img);
      } else {
        console.log(0);
      }

      return res.json(img);
    } catch (e) {
      return res.json(e);
    }
  }

  async getAll(req, res) {
    try {
      const { ...info } = req.body;
      const getInfo = sortGetAll(info);
      const announcements = await Announcement.findAll({
        where: getInfo,
        include: { all: true },
      });
      return res.json(announcements);
    } catch (e) {
      return res.json(e);
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const announcement = await Announcement.findOne({
        where: { id: id },
        include: { all: true },
      });
      if (!announcement) {
        return res.json({ message: "id не найден!" });
      }
      return res.json(announcement);
    } catch (e) {
      return res.json(e);
    }
  }

  async update(req, res) {
    try {
      const { ...info } = req.body;
      const getInfo = sortGetAll(info);
      await Announcement.update(getInfo, {
        where: { id: id },
      });
      const updateAnnouncement = await Announcement.findOne({
        where: { id: id },
      });
      return res.json(updateAnnouncement);
    } catch (e) {
      return res.json(e);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.json({ message: "id не найден!" });
      }
      await Announcement.destroy({ where: id });
      return res.json({ message: "Модель удалена!" });
    } catch (e) {
      return res.json(e);
    }
  }
}

export default new AnnouncementController();
