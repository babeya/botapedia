import React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import AppBar from "./AppBar";

type Props = {
  pageTitle: string;
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar />
      <Toolbar />
      <Container>
        <Box sx={{ m: 2 }}>{children}</Box>
      </Container>
    </React.Fragment>
  );
};

export default Layout;
