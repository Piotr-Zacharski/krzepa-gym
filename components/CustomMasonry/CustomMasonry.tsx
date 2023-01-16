import * as React from "react";
import Box from "@mui/material/Box";
import Image from 'next/image'
import Masonry from "@mui/lab/Masonry";
import { useStyles } from "./styles";
import { Card } from "@mui/material";

export default function CustomMasonry() {
  const styles = useStyles();
  return (
    <Box sx={{ width: 1200, minHeight: 829 }}>
      <Masonry columns={2} spacing={8}>
        {itemData.map((item, index) => (
          <Card key={index} className={styles.image}>
            <Image
              src={`${item.img}?w=162&auto=format`}
              alt={item.title}
              loading="lazy"
              width={200}
              height={400}
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: "block",
                width: "100%",
              }}
            />
          </Card>
        ))}
      </Masonry>
    </Box>
  );
}

const itemData = [
  {
    img: "/img/k1.png",
    title: "Cardio 1",
  },
  {
    img: "/img/k2.png",
    title: "Cardio 2",
  },
  {
    img: "/img/k3.png",
    title: "Cardio 3",
  },
  {
    img: "/img/k4.png",
    title: "Cardio 4",
  },
];
