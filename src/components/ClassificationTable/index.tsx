import React from "react";

import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import AccountTreeIcon from "@mui/icons-material/AccountTree";

type Props = {
  plant: Queries.Plant;
};

// TODO: Factorize rows !

const ClassificationTable = ({
  plant: {
    kingdom,
    subKingdom,
    division,
    classP,
    subClassP,
    order,
    family,
    genus,
    species,
  },
}: Props) => {
  return (
    <Box sx={{ flex: 1 }}>
      <Typography
        variant="h6"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <AccountTreeIcon sx={{ marginX: 1 }} />
        Classification
      </Typography>
      <TableContainer>
        <Table>
          <TableBody>
            {kingdom ? (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>Règne</TableCell>
                <TableCell>{kingdom}</TableCell>
              </TableRow>
            ) : null}
            {subKingdom ? (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>Sous-règne</TableCell>
                <TableCell>{subKingdom}</TableCell>
              </TableRow>
            ) : null}
            {division ? (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>Division</TableCell>
                <TableCell>{division}</TableCell>
              </TableRow>
            ) : null}
            {classP ? (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>Classe</TableCell>
                <TableCell>{classP}</TableCell>
              </TableRow>
            ) : null}
            {subClassP ? (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>Sous-classe</TableCell>
                <TableCell>{subClassP}</TableCell>
              </TableRow>
            ) : null}
            {order ? (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>Ordre</TableCell>
                <TableCell>{order}</TableCell>
              </TableRow>
            ) : null}
            {family ? (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>Famille</TableCell>
                <TableCell>{family}</TableCell>
              </TableRow>
            ) : null}
            {genus ? (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>Genre</TableCell>
                <TableCell>{genus}</TableCell>
              </TableRow>
            ) : null}
            {species ? (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>Espèce</TableCell>
                <TableCell>{species}</TableCell>
              </TableRow>
            ) : null}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ClassificationTable;
