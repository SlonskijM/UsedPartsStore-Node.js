import { Router } from "express";
import auth from "../middleware/authMiddleware.js";
import DetailController from "../controllers/detailController.js";

const router = Router();

router.post("/", auth, DetailController.create);
router.get("/", auth, DetailController.getAll);
router.delete("/", auth, DetailController.delete);

export default router;