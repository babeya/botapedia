import React, { useState, useMemo } from "react";

import { graphql, Link } from "gatsby";

import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";

import { Layout, PlantCard } from "../components";

const IndexPage = ({ data }: any) => {
  const edges = data?.allPlant?.edges || [];

  const [search, setSearch] = useState("");

  const plants = useMemo(() => {
    if (!search) {
      return edges;
    } else {
      return edges.filter((edge: any) =>
        edge?.node?.usualName.includes(search)
      );
    }
  }, [search]);

  return (
    <Layout pageTitle="Botapedia">
      <Box sx={{ display: "flex", alignItems: "flex-end", m: 2 }}>
        <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          id="search"
          label="Rechercher une plante"
          variant="standard"
          sx={{ flexGrow: 1 }}
          onChange={(evt) => {
            setSearch(evt.target.value || "");
          }}
        />
      </Box>

      <Grid container spacing={2}>
        {plants.map((edge: any) => (
          <PlantCard plant={edge.node} />
        ))}
      </Grid>
    </Layout>
  );
};

export const query = graphql`
  query allPlant {
    allPlant(sort: { fields: [usualName], order: ASC }) {
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
                  height: 180
                  width: 280
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
