import { Router } from "express";
import auth from "../middleware/authMiddleware.js";
import CarController from "../controllers/carController.js";

const router = Router();

router.post("/", auth, CarController.create);
router.get("/", auth, CarController.getAll);
router.delete("/", auth, CarController.delete);

export default router;