import { Card, CardContent, Typography } from "@mui/material";

export function NotificationCard({ notification }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{notification.type}</Typography>

        <Typography>{notification.message}</Typography>
      </CardContent>
    </Card>
  );
}
