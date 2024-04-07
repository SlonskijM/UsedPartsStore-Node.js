import { Car, TypeDetail } from "../models/models.js";
class DetailController {
    async create(req, res) {
        try {
            const { name } = req.body;
            const detail = await TypeDetail.create({ name });
            return res.json(detail);
        } catch (e) {
            return res.json(e);
        }
    }

    async getAll(req, res) {
        try {
            const details = await TypeDetail.findAll();
            return res.json(details);
        } catch (e) {
            return res.json(e);
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.body;
            await TypeDetail.destroy({ where: { id: id } });
            return res.json({ message: "Модель удалена!" });
        } catch (e) {
            return res.json(e);
        }
    }
}

export default new DetailController();