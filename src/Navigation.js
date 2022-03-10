import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useUserAuth } from "./UserAuthContext";

import {Route, useNavigate} from "react-router-dom";



const Navigation = () => {
  const { logOut } = useUserAuth();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function HandleLogout() {
    handleClose();
    logOut();

}
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}><span onClick={()=> navigate('/Home/Landing')}>Home</span></MenuItem>
            <MenuItem onClick={handleClose}><span onClick={()=> navigate('/Home/Active')}>Active Workout</span></MenuItem>
            <MenuItem onClick={handleClose}><span onClick={() => navigate('/Home/Goals')} >Goals</span></MenuItem>
            <MenuItem onClick={handleClose}><span onClick={() => navigate('/Home/Blog')} >Blog</span></MenuItem>
          </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            QM_Workouts
          </Typography>
          <Button onClick={HandleLogout} color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>


  )
}
export default Navigation