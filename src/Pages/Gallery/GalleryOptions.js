import React from 'react';
import {Link} from 'react-router-dom';
import useStyles from './useStyles';
import { Typography, CardMedia, Grid } from '@material-ui/core';

const GalleryOptions = () => {
   const classes = useStyles();
; 
// don't know wtf this page is for
    return (
        <div>

        <Grid item sm={6} xs={6} md={4} lg={4}>
          <Link to="/images" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "none"}}>
            <CardMedia component="img"
                        image="https://dl.dropboxusercontent.com/s/am1yogi7n20g2gs/feliciarylander_222154123_582980702690144_2968276575258465474_n.jpg?dl=0"
                        title="Services"
                        className={classes.media} />
         </Link>
        </Grid>

            <Typography className={classes.link}><Link to="/filmwork" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "none"}}>Films</Link></Typography>
      
        </div>
    )
}

export default GalleryOptions
