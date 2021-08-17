import React from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Add from './Add';
import View from './View';
import Button from '@material-ui/core/Button';

function Home() {
    return (

      

<Grid container spacing={3}>

<Grid item xs={4}>
     <Add/>
     
        </Grid>
        <Grid item xs={8}>
            <View/>
        
        </Grid>


</Grid>

     

  
       
    )
}

export default Home
