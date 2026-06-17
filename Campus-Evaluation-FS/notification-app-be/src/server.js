import express from "express";
import notificationRoutes from "./routes/notifications.routes.js";

const app = express();

app.use(express.json());

app.use("/notifications", notificationRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
