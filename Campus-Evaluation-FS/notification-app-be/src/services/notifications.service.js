import { notifications } from "../data/notifications.js";
import crypto from "crypto";

export function createNotification(notification) {
  const newNotification = {
    id: crypto.randomUUID(),
    isRead: false,
    createdAt: new Date(),
    ...notification,
  };

  notifications.push(newNotification);

  return newNotification;
}

export function getNotifications(studentId) {
  return notifications.filter((n) => n.studentId == studentId);
}
export function markAsRead(id) {
  const notification = notifications.find((n) => n.id === id);

  if (!notification) {
    return null;
  }

  notification.isRead = true;

  return notification;
}

export function deleteNotification(id) {
  const index = notifications.findIndex((n) => n.id === id);

  if (index === -1) {
    return false;
  }

  notifications.splice(index, 1);

  return true;
}
