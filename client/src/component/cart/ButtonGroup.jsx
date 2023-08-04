import { Box, Button, ButtonGroup, styled } from '@mui/material'
import React from 'react';
import { addToCart, lessItemFromCart } from '../../redux/action/cartAction';
import { useDispatch, useSelector } from 'react-redux';


const Component = styled(ButtonGroup)`
margin-top:30px;
`;

const StyledButton = styled(Button)`
border-radius:50%;
`;

const GroupedButton = ({ item }) => {
  const dispatch = useDispatch();

  const { id } = item;

  const addItemToCart = () => {
    dispatch(addToCart(id, 1))
  };

  const lessCart = () => {
    dispatch(lessItemFromCart(id, 1))
  }
  return (
    <>
      <Component>
        <StyledButton disabled={!item.quantity} onClick={() => lessCart()}>-</StyledButton>

        <StyledButton disabled>{item.quantity}</StyledButton>
        <StyledButton onClick={() => addItemToCart()}>+</StyledButton>
      </Component>


    </>
  )
}

export default GroupedButton