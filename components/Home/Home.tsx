import React from "react";
import Image from "next/image";
import { Box, Card, Typography } from "@mui/material";
import { useStyles } from "./styles";

const benefits = [
  { name: "FitProfit", image: "/benefits/fit.png" },
  { name: "MultiSport", image: "/benefits/multisport.png" },
  { name: "MultiSport Senior", image: "/benefits/senior.png" },
  { name: "Medicover Sport", image: "/benefits/medicover.png" },
  { name: "OpenSport24", image: "/benefits/opensport.png" },
  { name: "Fabryka siły", image: "/benefits/fs.png" },
];

function HomeView() {
  const styles = useStyles();
  return (
    <Box>
      <Typography variant={"h3"} className={styles.title}>
        Akceptujemy
      </Typography>
      <Box
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 60 }}
      >
        {benefits.map(benefit => (
          <Card style={{ borderRadius: 5, padding: 5 }} key={benefit.name}>
            <Image
              src={benefit.image}
              alt={benefit.name}
              width={350}
              height={200}
            />
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default HomeView;
