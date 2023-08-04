import { Box } from '@mui/material';
import React from 'react';
import { imageURL } from '../constants/data';
import {Grid,styled} from '@mui/material';



const Image = styled('img')(({theme})=>({
 [theme.breakpoints.down('md')]:{
    objectFit:'cover',
    height:120
 }
}))

const MidSection = () => {

    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
  return (
    <div>
        
        <Grid lg={12} sm={12} md={12} xs={12} container style={{marginTop:10}}>
            {
                imageURL.map((item)=>{
                    return(
                        <Grid item lg={4} md={12} sm={12} xs={12}>
                        <img src={item} style={{width:"100%"}}/>
                        
                        </Grid>
                    )
                })

            }
        </Grid>
        <Image src={url} style={{marginTop:10 , width:"100%", display:"flex", justifyContent:"space-between"}}/>
    </div>
  )
}

export default MidSection;