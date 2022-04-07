import React from 'react';
import { Grid, Box, Typography} from '@material-ui/core';
import useStylesResume from './useStylesResume';
import { CallOutlined, EmailOutlined, LocationOnOutlined, PermIdentityOutlined } from '@material-ui/icons';

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
          <Typography variant="h3"> Contact </Typography>
          <Typography body="1"> <CallOutlined/> phone number</Typography>
          <Typography body="1"> <EmailOutlined/> email</Typography>
          <Typography body="1"> <LocationOnOutlined/> based in Stockholm, Sweden</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="h3"> <PermIdentityOutlined/> About me</Typography>
          <Typography body="1">A two-inch layer of freshly fallen snow covered the yard. Stacey peeked outside. To most, it would have been a beautiful sight worthy of taking a photo to put on Instagram. For Stacey, it meant something different. The first snow of the year brought back the witches as the fairies in the yard had to seek shelter to avoid the cold.</Typography>
        </Grid>

       <Grid item xs={6}>
          <Typography body="1"> Soft Skills</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography body="1">work history</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography body="1">Skills</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography body="1">work history</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography body="1">education</Typography>
        </Grid>

       <Grid item xs={6}>
          <Typography body="1">work history</Typography>
       </Grid>

      </Grid>
    </Box>
  )
}

export default Resume