import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { AppBar, Toolbar, Typography, Drawer, createMuiTheme, MuiThemeProvider, responsiveFontSizes} from '@material-ui/core';

import useStyles from './useStyles';
import openMenu from './openMenu';
import './index.css';
//import HideOnScroll from './HideOnScroll';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const Navbar = () => {
    const classes = useStyles();

    const [open, setOpen] = useState(false)

    const list = () => (
        <div>
            <ul  className={classes.list} >
                <MuiThemeProvider theme={theme}>
                    <li  className={classes.drawerList}><Link onClick={() => setOpen(false)} className="link" to="/" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "none"}}>Home</Link></li>
                     <li className={classes.drawerList}><Link onClick={() => setOpen(false)} className="link" to="/images" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "none"}}>Gallery</Link></li>   
                     <li className={classes.drawerList}>Links</li>  
                     <li className={classes.drawerList}>Contact</li>    
                </MuiThemeProvider>       
            </ul>
        </div>
    )
  
    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar}>
                <Toolbar className={classes.toolBar}>
                      <Typography variant="h4" className={classes.listItem}><Link className="link" to="/" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "none"}}>Home</Link></Typography> 
                      <Typography variant="h4" className={classes.listItem}><Link className="link" to="/images" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "none"}}>Gallery</Link></Typography> 
                      <Typography variant="h4" className={classes.listItem}>Links</Typography> 
                      <Typography variant="h4" className={classes.listItem}>Contact</Typography> 

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

