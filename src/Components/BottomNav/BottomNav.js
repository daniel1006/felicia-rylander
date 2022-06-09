import React from 'react';
import { Box,Typography } from '@material-ui/core';
import useStyles from './useStyles';

const BottomNav = () => {
    const classes = useStyles();

  return (
    <Box className={classes.Box}>

        <div className={classes.List}>
            <Typography className={classes.ListItem} variant='h4'> Facebook </Typography> 
            <Typography className={classes.ListItemMiddle} variant='h4'> Instagram </Typography> 
            <Typography className={classes.ListItem} variant='h4'> Contact </Typography> 
        </div>

        <Box className={classes.TradeMark}>LanthierWebDesign &reg; {new Date().getFullYear()} </Box>   

    </Box>
  )
}

export default BottomNav