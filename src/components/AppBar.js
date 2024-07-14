import React from 'react';
import { AppBar as MuiAppBar, Toolbar, Typography, IconButton, InputBase } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import './AppBar.css';

const AppBar = () => {
  return (
    <MuiAppBar position="fixed" className="app-bar">
      <Toolbar>
        <Typography variant="h6" className="app-logo">
          Logo
        </Typography>
        <div className="app-search">
          <IconButton type="submit" aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase placeholder="Search…" />
        </div>
        <Typography variant="h6" className="app-user">
          Username
        </Typography>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
