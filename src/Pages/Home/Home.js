import React from 'react';
import { Card, Grid, Typography,  CardMedia, createMuiTheme, MuiThemeProvider, responsiveFontSizes, container, Container} from '@material-ui/core';
import useStyles from './useStyles';
import "./Homestyle.css"

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const Home = () => {
    const classes = useStyles();
    return (
      <div>
      <style>{`body { margin: 0px; padding: 0px;}`}</style>

        <Grid container className={classes.greetings}>

  
            <Grid className={classes.item} item xs={12} sm={12} md={12} lg={12}>
              <Card className="container">
               <CardMedia  
                  className={classes.media} /> 
                    joghn

              </Card>  
            </Grid>

            <MuiThemeProvider theme={theme}>
              <Typography variant="h1" className={classes.title}>Felicia</Typography> 
              <Typography variant="h1" className={classes.title2}>Rylander</Typography> 
            </MuiThemeProvider>  

        </Grid>
       </div>

    )
}

export default Home
