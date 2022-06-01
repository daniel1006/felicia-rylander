import React, { useState, useEffect } from 'react';
import useStyles from './useStyles';
import { GridList, GridListTile,} from '@material-ui/core';
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
      <div className={classes.container}>
        <div className={classes.root}>
            <GridList cellHeight={480} spacing={6} cols={cols} className={classes.gridList}>
            
          <GridListTile cols={2}>
            <div style={{ transform: `translateY(${offsetY * 0.8}px)`}}>  
              <img className={classes.firstImage} src={"https://dl.dropboxusercontent.com/s/0a9bmmj3yjnxzxx/DSC_6954.jpg?dl=0"}  />
            </div>   
          </GridListTile>

          <GridListTile >
                <img src={"https://dl.dropboxusercontent.com/s/ni5pls4x7l7mcf1/feliciarylander_73512673_110237193608074_5066861785948076747_n.jpg?dl=0"}  />
          </GridListTile>

          <GridListTile >
              <img src={"https://dl.dropboxusercontent.com/s/98bkw4zf85n7shz/DSC_6998.jpg?dl=0"}  />
          </GridListTile>

          <GridListTile >
          <div className="parallaxScroll1"></div>
          </GridListTile>

          <GridListTile >
              <img src={"https://dl.dropboxusercontent.com/s/am1yogi7n20g2gs/feliciarylander_222154123_582980702690144_2968276575258465474_n.jpg?dl=0"}  />
          </GridListTile>

          <GridListTile cols={3}>
             <img src={"https://dl.dropboxusercontent.com/s/imw9mp5tdjrj8sv/Felicia6.jpg?dl=0"}  />
          </GridListTile>

          <GridListTile >
              <img src={"https://dl.dropboxusercontent.com/s/rjew6mr8nygua14/Felicia4_max_red_dark_eyes%201.jpg?dl=0"}  />
          </GridListTile>

          <GridListTile >
              <img src={"https://dl.dropboxusercontent.com/s/woabyc6vifkypio/DSC_7014.jpg?dl=0"}  />
          </GridListTile>

          <GridListTile >
              <img src={"https://dl.dropboxusercontent.com/s/gecoglurn620flp/felicia%20cover%20photo.jpg?dl=0"}  />
          </GridListTile>
      
            </GridList>
          </div>
        </div>
    )
}

export default withWidth() (Images)
