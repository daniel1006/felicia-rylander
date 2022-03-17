import React from 'react';
import { Card, Grid, Typography,  CardMedia, createMuiTheme, MuiThemeProvider, responsiveFontSizes,} from '@material-ui/core';
import useStyles from './useStyles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const Home = () => {
    const classes = useStyles();
    return (
      <div>
      <style>{`body { margin: 0px; padding: 0px;}`}</style>

        <Grid className={classes.greetings}>
            <Grid className={classes.item} item xs={12} sm={12} md={12} lg={12}>
              <Card className={classes.container}>
               <CardMedia  component="img"
                           src="https://dl.dropboxusercontent.com/s/gecoglurn620flp/felicia%20cover%20photo.jpg?dl=0"
                           className={classes.media} /> 
            <MuiThemeProvider theme={theme}>
              <Typography variant="h1" className={classes.title}>Felicia</Typography> 
              <Typography variant="h1" className={classes.title2}>Rylander</Typography> 
            </MuiThemeProvider>  
              </Card>     
            </Grid>
        </Grid>
       </div>

    )
}

export default Home
