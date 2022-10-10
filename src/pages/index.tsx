import React, { useState, useMemo } from "react";

import { graphql, HeadFC } from "gatsby";

import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";

import { Layout, PlantCard, BaseHead } from "../components";

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
    <Layout>
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

export const Head: HeadFC = () => (
  <BaseHead
    title="Botapedia : L'encyclopédie libre des plantes"
    description="Encyclopédie botanique collaborative libre de droit. Rechercher et comparer les plantes entre elles. Consulter les détails de chaque espèce (phylogénie, environement, culture). Télécharger les données (pdf, json)"
  />
);

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
          mainImage {
            src {
              childImageSharp {
                gatsbyImageData(
                  aspectRatio: 1.3
                  width: 500
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
