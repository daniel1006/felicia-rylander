import React, { useState, useEffect } from 'react';
import useStyles from './useStyles';
import { GridList, GridListTile, Typography, Grid } from '@material-ui/core';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

import './style.css';

const Images = (props) => {
    const classes = useStyles();

    function getCols(screenWidth) {
        if (isWidthUp('lg', screenWidth)) {
          return 3;
        }
  
        if (isWidthUp('md', screenWidth)) {
          return 3;
        }
  
        if (isWidthUp('sm', screenWidth)) {
            return 2;
      }
      if (isWidthUp('xs', screenWidth)) {
        return 1;
  }
  return 1
}
  
      const cols = getCols(props.width); // width is associated when using withWidth()

     const [offsetY, setOffsetY] = useState(0);
      const handleScroll = () => setOffsetY(window.pageYOffset);

      useEffect(() => {
      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
      }, []);

   

    return (
        <div className={classes.root}>
            <Typography>Gallery</Typography>
            <GridList cellHeight={620} spacing={6} cols={cols} className={classes.gridList}>
            
          <GridListTile cols={2}>
            <div style={{ transform: `translateY(${offsetY * 0.8}px)`}}>  
              <img className={classes.firstImage} src={"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"}  />
            </div>   
          </GridListTile>

          <GridListTile >
              <img src={"https://images.unsplash.com/photo-1543096222-72de739f7917?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"}  />
          </GridListTile>

          <GridListTile >
              <img src={"https://images.unsplash.com/photo-1481824429379-07aa5e5b0739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=642&q=80"}  />
          </GridListTile>

          <GridListTile >
          <div className="parallaxScroll1"></div>
          </GridListTile>

          <GridListTile >
              <img src={"https://images.unsplash.com/photo-1575921200158-7689087cfb8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"}  />
          </GridListTile>

          <GridListTile cols={3}>
             <img src={"https://images.unsplash.com/photo-1575921200158-7689087cfb8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"}  />
          </GridListTile>

          <GridListTile >
              <img src={"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"}  />
          </GridListTile>

          <GridListTile >
              <img src={"https://images.unsplash.com/photo-1447194047554-cfe888edc98c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"}  />
          </GridListTile>

          <GridListTile >
              <img src={"https://images.unsplash.com/photo-1469460340997-2f854421e72f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"}  />
          </GridListTile>
      
            </GridList>
        </div>
    )
}

export default withWidth() (Images)
