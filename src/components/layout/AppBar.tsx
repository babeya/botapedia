import React from "react";

import { Link } from "gatsby";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";

const BotaAppBar = () => (
  <AppBar position="fixed">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <Link to="/" title="Home">
          Botapedia
        </Link>
      </Typography>

      <IconButton
        color="inherit"
        href="https://github.com/babeya/botapedia"
        target="__blank"
        title="Github"
      >
        <GitHubIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default BotaAppBar;
