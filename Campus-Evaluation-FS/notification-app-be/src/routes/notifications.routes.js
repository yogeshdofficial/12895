import { Router } from "express";

import {
  create,
  getByStudent,
  read,
  remove,
  priority,
} from "../controllers/notifications.controller.js";

const router = Router();

router.post("/", create);

router.get("/:studentId", getByStudent);
router.patch("/:id/read", read);

router.delete("/:id", remove);
router.get("/priority/top10", priority);

export default router;
