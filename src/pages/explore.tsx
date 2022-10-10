import React, { useMemo } from "react";

import { graphql, HeadFC } from "gatsby";

import Box from "@mui/material/Box";

import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

import { Layout, BaseHead } from "../components";

const columns: GridColDef[] = [
  { field: "usualName", headerName: "Nom usuel", width: 130 },
  { field: "species", headerName: "Espèce", width: 130 },
  { field: "kingdom", headerName: "Règne", width: 130 },
  { field: "subKingdom", headerName: "Sous-règne", width: 130 },
  { field: "division", headerName: "Division", width: 130 },
  { field: "classP", headerName: "Classe", width: 130 },
  { field: "subClassP", headerName: "Sous-classe", width: 130 },
  { field: "order", headerName: "Ordre", width: 130 },
  { field: "family", headerName: "Famille", width: 130 },
  { field: "genus", headerName: "Genre", width: 130 },
];

const usePlantData = (edges: Queries.PlantEdge[]) => {
  const plants = useMemo(
    () =>
      edges.reduce((acc: Queries.Plant[], edge) => {
        if (edge && edge.node) {
          acc.push(edge.node);
        }
        return acc;
      }, []),
    [edges]
  );

  return plants;
};

const ExplorePage = ({
  data: {
    allPlant: { edges },
  },
}: any) => {
  const plants = usePlantData(edges);

  return (
    <Layout>
      <Box sx={{ height: "80vh" }}>
        <DataGrid rows={plants} columns={columns} checkboxSelection />
      </Box>
    </Layout>
  );
};

export const query = graphql`
  query allPlantNoImage {
    allPlant(sort: { fields: [usualName], order: ASC }) {
      edges {
        node {
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
        }
      }
    }
  }
`;

export const Head: HeadFC = () => (
  <BaseHead
    title={`Botapedia : explorer`}
    // TODO
    description={`Parcourir les plantes`}
  />
);

export default ExplorePage;
