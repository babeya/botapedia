import React from "react";

import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

type Props = {
  plant: any;
};

const PlantLine = ({
  plant: {
    key,
    usualName,
    species,
    images: { main },
  },
}: Props) => {
  const image = getImage(main);

  console.log(image);

  return (
    <Grid item xs={12} md={4} lg={3}>
      <Card>
        {/* @ts-ignore TODO */}
        <CardActionArea LinkComponent={Link} to={`/${key}`}>
          <CardMedia component="span">
            {image ? <GatsbyImage image={image} alt={usualName} /> : null}
          </CardMedia>

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {usualName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {species}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Paper></Paper>
    </Grid>
  );
};

export default PlantLine;
