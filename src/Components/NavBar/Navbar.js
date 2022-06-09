import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { AppBar, Toolbar, createMuiTheme, responsiveFontSizes, Menu, MenuItem, } from '@material-ui/core';

import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

import useStyles from './useStyles';

//import HideOnScroll from './HideOnScroll';

const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    let theme = createMuiTheme();
    theme = responsiveFontSizes(theme);

//menu accordian
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open2 = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget); 
  };

 
  const HoverMenuClose= () => {
    setAnchorEl(null);
};


//speed dial view and options
const actions = [
                 
 { icon:<Link className={classes.Link} to="/" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "none"}}>Home</Link> },
 { icon:                   <Link className={classes.listItem}
                              style={{color:"rgba(0, 0, 0, 0.87)", cursor: "pointer"}}
                              id="basic-button"
                              aria-controls={open2 ? 'basic-menu' : undefined}
                              aria-haspopup="true"
                              aria-expanded={open2 ? 'true' : undefined}
                              onClick={handleClick}> Gallery
                            </Link> },

 {icon: <Link className={classes.Link} to="/Resume" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "none"}}>About Me</Link> },
 {icon: <Link className={classes.Link} to="/Messaging" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "none"}}>Contact</Link>},
];
  
// desktop view
    return (

        <div className={classes.root}>
            <AppBar className={classes.appBar}>
                <Toolbar className={classes.toolBar}>
   
     <SpeedDial
        ariaLabel="SpeedDial basic example"
        icon={<SpeedDialIcon /> }
        direction={'down'}
        FabProps={{ size: "large", style: { backgroundColor: "#90AEB0", marginTop: "525px"} }}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        >

         {actions.map((actions) => (
          <SpeedDialAction
            icon={actions.icon}
            tooltipTitle=""
            FabProps={{ style: { backgroundColor: "transparent", outline: 'solid #90AEB0 3px', width: "109px", height: "109px", } }}
            onClick={handleClose}
            className={classes.menuCircle}
          />
        ))}
       
      </SpeedDial>

                  <Menu
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={open2}
                          className={classes.MenuStyle}>

                    <div onMouseLeave={HoverMenuClose}>
                              <Link onClick={() => setOpen(false)} to="/filmwork" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "none"}}>
                                <MenuItem onClick="{handleClose2} {handleClose}" className={classes.MenuItem}>Film Work</MenuItem>
                              </Link>
                              <Link onClick={() => setOpen(false)} to="/images" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "none"}}>
                                <MenuItem onClick="{handleClose2} {handleClose}" className={classes.MenuItem}> Portfolio</MenuItem>
                              </Link>
                    </div>
                  </Menu>

                </Toolbar>
            </AppBar>    
     
        </div>
    )
}

export default Navbar