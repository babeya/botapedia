import React from "react";

import CssBaseline from "@mui/material/CssBaseline";

import Container from "@mui/material/Container";

type Props = {
  pageTitle: string;
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>{children}</Container>
    </React.Fragment>
  );
};

export default Layout;
