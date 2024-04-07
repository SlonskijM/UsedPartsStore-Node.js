import { Car } from "../models/models.js";
class CarController {
    async create(req, res) {
        try {
            const { name } = req.body;
            const car = await Car.create({ name });
            return res.json(car);
        } catch (e) {
            return res.json(e);
        }
    }

    async getAll(req, res) {
        try {
            const cars = await Car.findAll();
            return res.json(cars);
        } catch (e) {
            return res.json(e);
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.body;
            await Car.destroy({ where: { id: id } });
            return res.json({ message: "Модель удалена!" });
        } catch (e) {
            return res.json(e);
        }
    }
}

export default new CarController();