import React from 'react';
import { Box,Typography } from '@material-ui/core';
import useStyles from './useStyles';

import './style.css';

const BottomNav = () => {
    const classes = useStyles();

  return (
    <div className={classes.Box}>

        <div className={classes.List}>
            <Typography className="ListItem" variant='h4'> Facebook </Typography> 
            <Typography className="ListItemMiddle" variant='h4'> Instagram </Typography> 
            <Typography className="ListItem" variant='h4'> Contact </Typography> 
        </div>

        <Box className={classes.TradeMark}>LanthierWebDesign &reg; {new Date().getFullYear()} </Box>   

    </div>
  )
}

export default BottomNav