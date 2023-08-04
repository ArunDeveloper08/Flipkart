import { Box, Button, styled } from '@mui/material';
import React, { useState } from 'react';
import { ShoppingCart, FlashOn } from '@mui/icons-material/';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/action/cartAction';
import { payUsingPaytm } from '../../service/api';
import { post } from '../utils/paytm';
import LoginDialog from '../login/LoginDialog';



const LeftContainer = styled(Box)`
min-width: 39%;
padding :40px 0 0 80px;
`;
const Image = styled('img')({
  padding: '10px 15px',
  border: '1px solid #f0f0f0',
  width: "95%"

});

const StyledButton = styled(Button)`
width: 46%;
height:50px;
border-radius:2px;

`;


const ActionItem = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1)
  const [open, setOpen] = useState(false);

  const { id } = product;
  const buyNow = async () => {

    let response = await payUsingPaytm({ amount: 500, email: 'Arun@gmail.com' });
    let information = {
      action: 'https://securegw-stage.paytm.in/order/process',
      params: response
    }
    post(information);
  }
  const addItemToCart = () => {
    const details = localStorage.getItem("username");
    if (details) {
      dispatch(addToCart(id, quantity))
      navigate("/cart")
    } else {
      setOpen(true)
    }

  }

  return (
    <div>
      <LeftContainer>
        <Box>
          <Image style={{
            mixBlendMode: "darken"
          }} src={product.detailUrl} />
        </Box>

        <StyledButton variant='contained' style={{ marginRight: 10, background: '#ff9f00' }} onClick={() => addItemToCart()}><ShoppingCart />Add to Cart</StyledButton>
        <StyledButton variant='contained' style={{ background: '#fb541b' }} onClick={() => buyNow()}><FlashOn /> Buy Now</StyledButton>
      </LeftContainer>
      <LoginDialog open={open} setOpen={setOpen} />
    </div>
  )
}

export default ActionItem;