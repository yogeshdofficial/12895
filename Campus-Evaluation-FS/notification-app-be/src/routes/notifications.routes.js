import { Router } from "express";

import {
  create,
  getByStudent,
  read,
  remove,
} from "../controllers/notifications.controller.js";
const router = Router();

router.post("/", create);

router.get("/:studentId", getByStudent);
router.patch("/:id/read", read);

router.delete("/:id", remove);
export default router;
