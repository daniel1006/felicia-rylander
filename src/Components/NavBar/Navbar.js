import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { AppBar, Toolbar, Typography, Drawer, createMuiTheme, MuiThemeProvider, responsiveFontSizes, Menu, MenuItem, Button} from '@material-ui/core';

import useStyles from './useStyles';
import openMenu from './openMenu';
import './index.css';
//import HideOnScroll from './HideOnScroll';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false)

//menu accordian
 const [anchorEl, setAnchorEl] = React.useState(null);
  const open2 = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl(null);
  };
  const HoverMenuClose= () => {
    setAnchorEl(null);
};
//
    const list = () => (
        <div>
            <ul  className={classes.list} >
                <MuiThemeProvider theme={theme}>
                    <li  className={classes.drawerList}><Link onClick={() => setOpen(false)} className="link" to="/" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "none"}}>Home</Link></li>   
                    <li className={classes.drawerList}>
                          <div onClick={() => setOpen(false)}  
                              style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "none", paddingBottom:"6vmin"}}
                              id="basic-button"
                              aria-controls={open2 ? 'basic-menu' : undefined}
                              aria-haspopup="true"
                              aria-expanded={open2 ? 'true' : undefined}
                              onClick={handleClick}>Portfolio
                          </div>
                     <li className={classes.drawerList}><Link onClick={() => setOpen(false)} to="/links" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "none"}}>Links</Link></li>   
                     <li className={classes.drawerList}><Link onClick={() => setOpen(false)} className="messaging" to="/Messaging" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "none"}}>Contacts</Link></li> 
                  </li>  
                </MuiThemeProvider>       
            </ul>
        </div>
    )
  
    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar}>
                <Toolbar className={classes.toolBar}>
                      <Typography variant="h4" className={classes.listItem}><Link className="link" to="/" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "none"}}>Home</Link></Typography> 
                      <Typography variant="h4" className={classes.listItem}
                              style={{color:"rgba(0, 0, 0, 0.87)", cursor: "pointer"}}
                              id="basic-button"
                              aria-controls={open2 ? 'basic-menu' : undefined}
                              aria-haspopup="true"
                              aria-expanded={open2 ? 'true' : undefined}
                              onClick={handleClick}
                              onMouseEnter={handleClick}> Gallery
                      </Typography> 
                      <Typography variant="h4" className={classes.listItem}><Link to="/links" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "none"}}>Links</Link></Typography> 
                      <Typography variant="h4" className={classes.listItem}><Link className="messaging" to="/Messaging" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "none"}}>Contact</Link></Typography> 

                  <Menu
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={open2}
                          onClose={handleClose2}
                          className={classes.MenuStyle}>

                    <div onMouseLeave={HoverMenuClose} >
                            <MenuItem onClick={handleClose2}  className={classes.MenuItem}>Film Work</MenuItem>
                              <Link onClick={() => setOpen(false)} className="link" to="/images" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "none"}}>
                                <MenuItem onClick={handleClose2} className={classes.MenuItem}> Portfolio</MenuItem>
                              </Link>
                            <MenuItem onClick={handleClose2} className={classes.MenuItem}>Resume</MenuItem>
                    </div>
                  </Menu>

                    <div onClick={() => setOpen(!open)} className={classes.menu}>
                      <div className="menu-btn">
                        <div className="menu-btn_burger"></div>
                      </div>
                    </div>

                </Toolbar>
            </AppBar>    

             <Drawer className={classes.drawer} hideBackdrop={true} transitionDuration={500} open={open} anchor={'left'}>
             {list()}
            </Drawer>
     
        </div>
    )
}

export default Navbar