import React from "react";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import AppBar from "./AppBar";
import Theme from "../theme";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <AppBar />
      <Toolbar />
      <Container>
        <Box sx={{ m: 2 }}>{children}</Box>
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
