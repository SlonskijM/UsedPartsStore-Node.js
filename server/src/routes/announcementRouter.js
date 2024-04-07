import { Router } from "express";
import AnnouncementController from "../controllers/announcementController.js";

const router = Router();

router.post("/", AnnouncementController.create);
router.get("/", AnnouncementController.getAll);
router.get("/:id", AnnouncementController.getOne);
router.patch("/:id", AnnouncementController.update);
router.delete("/", AnnouncementController.delete);

export default router;
