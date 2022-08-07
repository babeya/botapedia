import React from "react";

import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Paper from "@mui/material/Paper";

type Props = {
  plant: any;
};

const PlantLine = ({
  plant: {
    key,
    usualName,
    images: { main },
  },
}: Props) => {
  const image = getImage(main);

  return (
    <Paper>
      {image ? <GatsbyImage image={image} alt={usualName} /> : null}
      <Link to={`/${key}`}>{usualName}</Link>
    </Paper>
  );
};

export default PlantLine;
