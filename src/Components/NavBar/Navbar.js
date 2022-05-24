import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { AppBar, Toolbar, createMuiTheme, responsiveFontSizes, Menu, MenuItem, } from '@material-ui/core';

import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';

import useStyles from './useStyles';
//import HideOnScroll from './HideOnScroll';

const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false)

    let theme = createMuiTheme();
    theme = responsiveFontSizes(theme);

//menu accordian
 const [anchorEl, setAnchorEl] = React.useState(null);
  const open2 = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget); 
  };
  const handleClose2 = () => {
    setAnchorEl(null)
  };
  const HoverMenuClose= () => {
    setAnchorEl(null);
};


//speed dial view and options
const actions = [
                 
 {icon: <Link className={classes.Link} to="/Messaging" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "none"}}>Contact</Link>},
 {icon: <Link className={classes.Link} to="/links" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "none"}}>Links</Link> }, 

 { icon:                   <Link variant="h4" className={classes.listItem}
                              style={{color:"rgba(0, 0, 0, 0.87)", cursor: "pointer"}}
                              id="basic-button"
                              aria-controls={open2 ? 'basic-menu' : undefined}
                              aria-haspopup="true"
                              aria-expanded={open2 ? 'true' : undefined}
                              onClick={handleClick}> Gallery
                            </Link> },

 { icon:<Link className={classes.Link} to="/" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "none"}}>Home</Link> },
];
  
// desktop view
    return (

        <div className={classes.root}>
            <AppBar className={classes.appBar}>
                <Toolbar className={classes.toolBar}>
   
     <SpeedDial
        ariaLabel="SpeedDial basic example"
        icon={<SpeedDialIcon /> }
        direction={'left'}
        FabProps={{ size: "large", style: { backgroundColor: "#ff0000",} }}
        >
    
         {actions.map((actions) => (
          <SpeedDialAction
            icon={actions.icon}
            tooltipTitle=""
            FabProps={{ style: { backgroundColor: "pink", width: "100px", height: "100px"} }}
          />
        ))}
        
      </SpeedDial>

                  <Menu
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={open2}
                          onClose={handleClose2}
                          className={classes.MenuStyle}>

                    <div onMouseLeave={HoverMenuClose}>
                              <Link onClick={() => setOpen(false)} className="link" to="/filmwork" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "none"}}>
                                <MenuItem onClick={handleClose2}  className={classes.MenuItem}>Film Work</MenuItem>
                              </Link>
                              <Link onClick={() => setOpen(false)} className="link" to="/images" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "none"}}>
                                <MenuItem onClick={handleClose2} className={classes.MenuItem}> Portfolio</MenuItem>
                              </Link>
                              <Link onClick={() => setOpen(false)} className="link" to="/resume" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "none"}}>
                                <MenuItem onClick={handleClose2} className={classes.MenuItem}>Resume</MenuItem>
                              </Link>
                    </div>
                  </Menu>

                </Toolbar>
            </AppBar>    
     
        </div>
    )
}

export default Navbar