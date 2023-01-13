import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function CustomContact() {
  return (
    <Card sx={{ maxWidth: 900 }}>
      <CardContent>
        <Typography
          sx={{
            fontSize: 32,
            fontWeight: "bold",
            textAlign: "center",
            color: "#0A1929",
          }}
          color="text.secondary"
          gutterBottom
        >
            <strong>Siłownia Krzepa</strong>
        </Typography>
        <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
          ul. Kraszewskiego 8a 22-200 Włodawa woj. Lubelskie
        </Typography>
        <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
          kom: 602-470-442
        </Typography>
        <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
          email : silowniakrzepa@gmail.com
        </Typography>
      </CardContent>
    </Card>
  );
}
