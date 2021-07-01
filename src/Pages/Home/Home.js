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
                           src="https://images.unsplash.com/photo-1498982261566-1c28c9cf4c02?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
                           title="Services"
                           className={classes.media} /> 
            <MuiThemeProvider theme={theme}>
              <Typography variant="h1" className={classes.title}>Felicia Rylander</Typography> 
            </MuiThemeProvider>  
              </Card>     
            </Grid>
        </Grid>
       </div>

    )
}

export default Home
