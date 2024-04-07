import { User } from "../models/models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const generateJwt = (id, email, role) => {
    return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
        expiresIn: "6h",
    });
};

class UserController {
    async login(req, res) {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(403).json({ message: "Пользователь не найден" });
        }
        let comparePassword = bcrypt.compareSync(
            password,
            user.dataValues.password,
        );
        if (!comparePassword) {
            return res.status(403).json({ message: "Указан неверный пароль" });
        }
        const token = generateJwt(user.dataValues.id, email, user.dataValues.role);
        return res.json({ token });
    }

    // async check(req, res) {
    //   res.json({ message: "work!!!" });
    // }
}

export default new UserController();