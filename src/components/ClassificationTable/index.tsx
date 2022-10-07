import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

type Props = {
  plant: Queries.Plant;
};

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
  },
}: Props) => {
  return (
    <TableContainer>
      <Table>
        <TableBody>
          {kingdom ? (
            <TableRow>
              <TableCell>Règne</TableCell>
              <TableCell>{kingdom}</TableCell>
            </TableRow>
          ) : null}
          {subKingdom ? (
            <TableRow>
              <TableCell>Sous-règne</TableCell>
              <TableCell>{subKingdom}</TableCell>
            </TableRow>
          ) : null}
          {division ? (
            <TableRow>
              <TableCell>Division</TableCell>
              <TableCell>{division}</TableCell>
            </TableRow>
          ) : null}
          {classP ? (
            <TableRow>
              <TableCell>Classe</TableCell>
              <TableCell>{classP}</TableCell>
            </TableRow>
          ) : null}
          {subClassP ? (
            <TableRow>
              <TableCell>Sous-classe</TableCell>
              <TableCell>{subClassP}</TableCell>
            </TableRow>
          ) : null}
          {order ? (
            <TableRow>
              <TableCell>Ordre</TableCell>
              <TableCell>{order}</TableCell>
            </TableRow>
          ) : null}
          {family ? (
            <TableRow>
              <TableCell>Famille</TableCell>
              <TableCell>{family}</TableCell>
            </TableRow>
          ) : null}
          {genus ? (
            <TableRow>
              <TableCell>Genre</TableCell>
              <TableCell>{genus}</TableCell>
            </TableRow>
          ) : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ClassificationTable;
