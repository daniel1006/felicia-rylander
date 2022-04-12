import React from 'react';
import { Grid, Box, Typography,} from '@material-ui/core';
import useStylesResume from './useStylesResume';
import { CallOutlined, EmailOutlined, LocationOnOutlined, PermIdentityOutlined, SchoolOutlined } from '@material-ui/icons';

const Resume = () => {
  const classes = useStylesResume();
  return (
    <Box className={classes.Box} sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} spacing={6} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

        <Grid item xs={6}>
          <Typography variant="h2">Felicia</Typography>
          <Typography variant="h2">Rylander</Typography>
        </Grid>

        <Grid item xs={6}>
         <div className={classes.Underline}>
          <Typography variant="h3">27 years old</Typography>
          <Typography variant="h3">actress</Typography>
         </div>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="h4"> Contact </Typography>
          <Typography body="1"> <CallOutlined/> phone number</Typography>
          <Typography body="1"> <EmailOutlined/> email</Typography>
          <Typography body="1"> <LocationOnOutlined/> based in Stockholm, Sweden</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="h4"> <PermIdentityOutlined/> About me</Typography>
          <Typography body="1">A two-inch layer of freshly fallen snow covered the yard. Stacey peeked outside. To most, it would have been a beautiful sight worthy of taking a photo to put on Instagram. For Stacey, it meant something different. The first snow of the year brought back the witches as the fairies in the yard had to seek shelter to avoid the cold.</Typography>
        </Grid>

       <Grid item xs={6}>
          <Typography variant="h4"> Skills</Typography>

         <div>
          <Typography className={classes.Line} variant="h5">Speaking</Typography>
           <span className={classes.Cdot}></span>
           <span className={classes.Cdot}></span>
           <span className={classes.Cdot}></span>
           <span className={classes.Cdot}></span>
           <span className={classes.Cdot}></span>
         </div>

         <div>
          <Typography className={classes.Line} variant="h5">Walking</Typography>
           <span className={classes.Cdot}></span>
           <span className={classes.Cdot}></span>
           <span className={classes.Cdot}></span>
           <span className={classes.Dot}></span>
           <span className={classes.Dot}></span>
         </div>

         <div>
          <Typography className={classes.Line} variant="h5">Standing</Typography>
           <span className={classes.Cdot}></span>
           <span className={classes.Dot}></span>
           <span className={classes.Dot}></span>
           <span className={classes.Dot}></span>
           <span className={classes.Dot}></span>
         </div>
         
        </Grid>

        <Grid item xs={6}>
          <Typography variant="h4">work history</Typography>
          <Typography variant="h5">2009 - 2013</Typography>
          <Typography body="1">She was in a hurry. Not the standard hurry when you're in a rush to get someplace, but a frantic hurry. The type of hurry where a few seconds could mean life or death. She raced down the road ignoring speed limits and weaving between cars. She was only a few minutes away when traffic came to a dead standstill on the road ahead.</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="h4">Soft Skills</Typography>
         <div>
          <Typography className={classes.Line} variant="h5">Speaking</Typography>
           <span className={classes.Cdot}></span>
           <span className={classes.Cdot}></span>
           <span className={classes.Cdot}></span>
           <span className={classes.Cdot}></span>
           <span className={classes.Cdot}></span>
         </div>

         <div>
          <Typography className={classes.Line} variant="h5">Walking</Typography>
           <span className={classes.Cdot}></span>
           <span className={classes.Cdot}></span>
           <span className={classes.Cdot}></span>
           <span className={classes.Dot}></span>
           <span className={classes.Dot}></span>
         </div>

         <div>
          <Typography className={classes.Line} variant="h5">Standing</Typography>
           <span className={classes.Cdot}></span>
           <span className={classes.Dot}></span>
           <span className={classes.Dot}></span>
           <span className={classes.Dot}></span>
           <span className={classes.Dot}></span>
         </div>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="h4">work history</Typography>
          <Typography variant="h5">2009 - 2013</Typography>
          <Typography body="1">She was in a hurry. Not the standard hurry when you're in a rush to get someplace, but a frantic hurry. The type of hurry where a few seconds could mean life or death. She raced down the road ignoring speed limits and weaving between cars. She was only a few minutes away when traffic came to a dead standstill on the road ahead.</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="h4"> <SchoolOutlined/> Education</Typography>
          <Typography body="1">- A school name</Typography>
        </Grid>

       <Grid item xs={6}>
          <Typography variant="h4">work history</Typography>
          <Typography variant="h5">2009 - 2013</Typography>
          <Typography body="1">She was in a hurry. Not the standard hurry when you're in a rush to get someplace, but a frantic hurry. The type of hurry where a few seconds could mean life or death. She raced down the road ignoring speed limits and weaving between cars. She was only a few minutes away when traffic came to a dead standstill on the road ahead.</Typography>
       </Grid>

      </Grid>
    </Box>
  )
}

export default Resume