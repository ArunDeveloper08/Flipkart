

import { Box, Button, Typography, styled } from '@mui/material';
import React from 'react';
import GroupedButton from './ButtonGroup';
import { removeToCart } from "../../redux/action/cartAction";
import { useDispatch } from 'react-redux';


const Component = styled(Box)`
border-top: 1px solid #f0f0f0;
display:flex;
background:#fff;
`;

const LeftComponent = styled(Box)`
margin:20px;
`;

const SmallText = styled(Typography)`
color: #878787;
font-size:14px;
margin-top:10px;
`;

const Remove = styled(Button)`
margin-top:10px;
font-size:16px;
color:#000;
font-weight:600;
`
const CartItem = ({ item }) => {
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const dispatch = useDispatch();
    console.log("Item", item )
    const removeItemFromCart = (id) => {
        dispatch(removeToCart(id))
    }
    if (item) {
        return (
            <Component>
                <LeftComponent>
                    <img src={item.url} style={{ width: 110, height: 110 }} />
                    <GroupedButton item={item} />
                </LeftComponent>
                <Box style={{ margin: 20 }}>
                    <Typography style={{ wordBreak: "break-word" }}>{item.title.longTitle}</Typography>
                    <SmallText>seller:RetailNet
                        <Box component="span"><img src={adURL} style={{ width: 150, marginLeft: 10 }} /></Box>
                    </SmallText>
                    <Typography style={{ margin: '20px 0' }}>
                        <Box component="span" style={{ fontWeight: 600, fontSize: 18 }}>&#8377;{item.price.cost} </Box>&nbsp;&nbsp;&nbsp;
                        <Box component="span" style={{ color: '#878787' }}><strike>&#8377;{item.price.mrp}</strike></Box> &nbsp;&nbsp;&nbsp;
                        <Box component="span" style={{ color: '#388E3c' }}>{item.price.discount}</Box>
                    </Typography>
                    <Remove onClick={() => removeItemFromCart(item.id)}>Remove</Remove>
                </Box>
            </Component>
        )
    }else{
        <p>No Data</p>
    }
}

export default CartItem;