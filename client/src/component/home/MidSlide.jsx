

import React from 'react'
import { Box , styled} from '@mui/material';
import Slide from "./Slide";

const Image= styled('img')({

});

const Component = styled(Box)`
display:flex;
`;

const LeftComponent= styled(Box)(({theme})=>({
    width: '83%',
    [theme.breakpoints.down('md')]:{
        width:"100%"
    }
}))



const RightComponent= styled(Box)(({theme})=>({


background:'#fff',
padding :'5px',
marginTop :'10px',
marginLeft:'10px',
width:'15%',
textAlign:'center',
[theme.breakpoints.down('md')]:{
    display:'none'
}
}))


const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

const MidSlide = ({products, title ,  timer}) => {
    return (
        <Component>
            <LeftComponent>
            <Slide products={products} title={title}  timer={timer}/>
            </LeftComponent>
            <RightComponent>
<img src={adURL} alt="add" style={{width:217}}/>
            </RightComponent>
        </Component>
    )
}
export default MidSlide;