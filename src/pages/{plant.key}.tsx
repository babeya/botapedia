import React from "react";

import { graphql, HeadFC } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import {
  Layout,
  BaseHead,
  MarkdownText,
  ClassificationTable,
  TemperatureGauge,
} from "../components";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

type Props = {
  data: { plant: Queries.Plant };
};

const PlantPage = ({
  data: {
    plant: {
      usualName,
      description,
      // @ts-ignore // TODO
      mainImage: { src },
    },
    plant,
  },
}: Props) => {
  const image = getImage(src);

  return (
    <Layout>
      <Grid container spacing={1}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ padding: 1 }}>
            <Typography variant="h2" component="h1">
              {usualName}
            </Typography>
            <Typography>
              <MarkdownText markdown={description?.childMarkdownRemark} />
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack spacing={1} direction="column">
            <Paper sx={{ display: "flex", justifyContent: "center" }}>
              {image ? (
                <GatsbyImage image={image} alt={usualName || ""} />
              ) : null}
            </Paper>
            <Paper sx={{ display: "flex", justifyContent: "center" }}>
              <ClassificationTable plant={plant} />
            </Paper>
            <Paper sx={{ display: "flex", justifyContent: "center" }}>
              <TemperatureGauge plant={plant} />
            </Paper>
          </Stack>
        </Grid>
      </Grid>
    </Layout>
  );
};

export const Head: HeadFC = ({
  data: {
    // @ts-ignore
    plant: { usualName, species },
  },
}) => <BaseHead title={`Botapedia : ${usualName}, ${species}`} />;

export const query = graphql`
  query Plant($key: String) {
    plant(key: { eq: $key }) {
      id
      usualName
      kingdom
      subKingdom
      division
      classP
      subClassP
      order
      family
      genus
      species
      key
      temperatures {
        min
        grow
        max
      }
      description {
        childMarkdownRemark {
          html
          frontmatter {
            author
            href
            name
            title
            type
          }
        }
      }
      mainImage {
        src {
          childImageSharp {
            gatsbyImageData(
              height: 200
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`;

export default PlantPage;
