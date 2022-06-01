import React from 'react';
import {Link} from 'react-router-dom';
import { Card, Grid, Typography,  CardMedia, createMuiTheme, MuiThemeProvider, responsiveFontSizes, } from '@material-ui/core';
import useStyles from './useStyles';
import "./Homestyle.css"

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const Home = () => {
    const classes = useStyles();
    return (

  <div>

    <style>{`body { margin: 0px; padding: 0px;}`}</style>

    <div className="container">

      <Grid container alignItems="center" justifyContent="space-evenly" direction='row' className={classes.greetings}>

       <div className={classes.media}></div>

          <Grid className={classes.gridItem} item xs={5} sm={5} md={5} lg={5}>
             <MuiThemeProvider theme={theme}>
              
                <Typography variant="h1" className={classes.title}> <Link to="/images" style={{color:"#000000", textDecoration: "none"}}> Felicia </Link></Typography> 
                <Typography variant="h1" className={classes.title2}> <Link to="/images" style={{color:"#000000", textDecoration: "none"}}> Rylander </Link></Typography> 
                  <Typography className={classes.HomeTitles} variant="h4">Model | Actress | Pool Contractor</Typography>
             </MuiThemeProvider>  
          </Grid>
       
          <Grid className={classes.gridItem} item xs={5} sm={5} md={5} lg={5}>
            <Card elevation={0} className={classes.Card}>
              <CardMedia  
                  className={classes.image}
                  component="img"
                  image="https://dl.dropboxusercontent.com/s/gecoglurn620flp/felicia%20cover%20photo.jpg?dl=0"/>  
            </Card>
          </Grid>

      </Grid>

    </div>

  </div>
    )
}

export default Home
