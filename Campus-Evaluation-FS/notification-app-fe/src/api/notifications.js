export async function fetchNotifications() {
  const response = await fetch("http://localhost:3000/notifications");

  return response.json();
}
