import React from "react";

import { graphql, HeadFC } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Layout, BaseHead, MarkdownText } from "../components";

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
      id,
      usualName,
      order,
      family,
      genus,
      species,
      description,
      // @ts-ignore // TODO
      mainImage: { src },
    },
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
              <p>
                {order} - {family} - {genus} - {species}
              </p>
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
    plant: { usualName },
  },
}) => <BaseHead title={`Botapedia : ${usualName}`} />;

export const query = graphql`
  query Plant($key: String) {
    plant(key: { eq: $key }) {
      id
      usualName
      order
      family
      genus
      species
      key
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
