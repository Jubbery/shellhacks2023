import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <AppBar>
      <Toolbar>
          <Link to="/"> 
            <Typography
              variant="h6"
              sx={{
                flexGrow: 1,
                textDecoration: "none",
                color: "white",
                marginRight: 2,
              }}
            >
              FreshStart
            </Typography>
          </Link>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
