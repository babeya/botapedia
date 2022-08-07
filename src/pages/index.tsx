import React from "react";

import { graphql, Link } from "gatsby";

import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Layout from "../components/Layout";
import PlantLine from "../components/PlantLine";

const IndexPage = ({ data }: any) => {
  const edges = data?.allPlant?.edges || [];

  return (
    <Layout pageTitle="Botapedia">
      <Stack>
        {edges.map((edge: any) => (
          <PlantLine plant={edge.node} />
        ))}
      </Stack>
    </Layout>
  );
};

export const query = graphql`
  query allPlant {
    allPlant {
      edges {
        node {
          id
          genus
          usualName
          sub_family
          species
          order
          key
          family
          images {
            main {
              childImageSharp {
                gatsbyImageData(
                  width: 160
                  height: 160
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
