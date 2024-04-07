import { Router } from "express";
import carRouter from "./carRouter.js";
import detailRouter from "./detailRouter.js";
import userRouter from "./userRouter.js";
import announcementRouter from "./announcementRouter.js";

const router = Router();

router.use("/", userRouter);
router.use("/car", carRouter);
router.use("/detail", detailRouter);
router.use("/announcement", announcementRouter);

export default router;