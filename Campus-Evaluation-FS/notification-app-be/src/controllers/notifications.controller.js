import {
  createNotification,
  getNotifications,
  markAsRead,
  deleteNotification,
} from "../services/notifications.service.js";
import { notifications } from "../data/notifications.js";
import { getTop10 } from "../priority.js";
export function create(req, res) {
  const notification = createNotification(req.body);

  res.status(201).json(notification);
}

export function getByStudent(req, res) {
  const studentId = req.params.studentId;

  const result = getNotifications(studentId);

  res.json(result);
}
export function read(req, res) {
  const notification = markAsRead(req.params.id);

  if (!notification) {
    return res.status(404).json({
      message: "Notification not found",
    });
  }

  res.json(notification);
}

export function remove(req, res) {
  const deleted = deleteNotification(req.params.id);

  if (!deleted) {
    return res.status(404).json({
      message: "Notification not found",
    });
  }

  res.json({
    message: "Deleted successfully",
  });
}

export function priority(req, res) {
  res.json(getTop10(notifications));
}
