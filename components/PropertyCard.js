import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function PropertyCard({ data, title, color }) {
  return (
    <Card
      sx={{
        bgcolor: color,
        minWidth: 275,
      }}
    >
      <CardContent>
        <Typography
          sx={{
            color: "white",
          }}
          variant="h5"
          gutterBottom
        >
          {data}
        </Typography>
        <Typography
          sx={{
            color: "white",
          }}
          variant="h6"
        >
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default PropertyCard;
