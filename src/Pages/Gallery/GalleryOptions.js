import React from 'react';
import {Link} from 'react-router-dom';
import useStyles from './useStyles';
import { Typography, CardMedia, Grid } from '@material-ui/core';

const GalleryOptions = () => {
   const classes = useStyles();
; 

    return (
        <div>

        <Grid item sm={6} xs={6} md={4} lg={4}>
          <Link to="/images" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "none"}}>
            <CardMedia component="img"
                        image="https://images.unsplash.com/photo-1612904370314-68f344e324dd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        title="Services"
                        className={classes.media} />
         </Link>
        </Grid>

            <Typography className={classes.link}><Link to="/filmwork" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "none"}}>Films</Link></Typography>
      
        </div>
    )
}

export default GalleryOptions
