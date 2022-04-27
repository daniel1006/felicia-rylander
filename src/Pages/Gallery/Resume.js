import React from 'react';
import { Grid, Box, Typography,} from '@material-ui/core';
import useStylesResume from './useStylesResume';
import { CallOutlined, EmailOutlined, LocationOnOutlined, PermIdentityOutlined, SchoolOutlined } from '@material-ui/icons';

const Resume = () => {
  const classes = useStylesResume();
  return (
    <Box className={classes.Box} sx={{ width: '100%' }}>
      <Grid container  rowSpacing={1} spacing={6} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

        <Grid className={classes.Left} item xs={3}>
          <Typography variant="h2">Felicia</Typography>
          <Typography variant="h2">Rylander</Typography>
        </Grid>

        <Grid item xs={7}>
         <div className={classes.Underline}>
          <Typography variant="h3">27 years old</Typography>
          <Typography variant="h3">actress</Typography>
         </div>
        </Grid>

        <Grid className={classes.Left} item xs={3}>
          <Typography variant="h4">Profile</Typography>
          <Typography className={classes.PofileBody} body="1">She was in a hurry. Not the standard hurry when you're in a rush to get someplace, but a frantic hurry. The type of hurry where a few seconds could mean life or death. She raced down the road ignoring speed limits and weaving between cars. She was only a few minutes away when traffic came to a dead standstill on the road ahead.</Typography>
          <div className={classes.LeftUnderline}></div>
        </Grid>

        <Grid item xs={7}>
          <Typography variant="h4"> <PermIdentityOutlined/> About me</Typography>
          <Typography body="1">A two-inch layer of freshly fallen snow covered the yard. Stacey peeked outside. To most, it would have been a beautiful sight worthy of taking a photo to put on Instagram. For Stacey, it meant something different. The first snow of the year brought back the witches as the fairies in the yard had to seek shelter to avoid the cold.</Typography>
        </Grid>

       <Grid className={classes.Left} item xs={3}>
          <Typography variant="h4"> Contact </Typography>
          <CallOutlined className={classes.LeftIcons}/>
          <Typography body="1"> phone number</Typography>

          <EmailOutlined className={classes.LeftIcons}/> 
          <Typography body="1">email</Typography>

          <LocationOnOutlined className={classes.LeftIcons}/> 
          <Typography body="1">based in Stockholm, Sweden</Typography> 
          <div className={classes.LeftUnderline}></div>        
        </Grid>

        <Grid item xs={7}>
          <Typography variant="h4">work history</Typography>
          <Typography variant="h5">2009 - 2013</Typography>
          <Typography body="1">She was in a hurry. Not the standard hurry when you're in a rush to get someplace, but a frantic hurry. The type of hurry where a few seconds could mean life or death. She raced down the road ignoring speed limits and weaving between cars. She was only a few minutes away when traffic came to a dead standstill on the road ahead.</Typography>
        </Grid>


        <Grid className={classes.Left} item xs={3}>
          <Typography variant="h4">Skills</Typography>
          <Typography variant="h5">Speaking</Typography>
          <Typography variant="h5">Walking</Typography>
          <Typography variant="h5">Standing</Typography>
        </Grid>

        <Grid item xs={7}>
          <Typography variant="h4">work history</Typography>
          <Typography variant="h5">2009 - 2013</Typography>
          <Typography body="1">She was in a hurry. Not the standard hurry when you're in a rush to get someplace, but a frantic hurry. The type of hurry where a few seconds could mean life or death. She raced down the road ignoring speed limits and weaving between cars. She was only a few minutes away when traffic came to a dead standstill on the road ahead.</Typography>
        </Grid>

      </Grid>
    </Box>
  )
}

export default Resume