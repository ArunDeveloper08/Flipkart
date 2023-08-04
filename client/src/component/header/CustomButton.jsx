import { Badge, Box, Button, Typography, styled } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from "../login/LoginDialog";
import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux";



const Container = styled(Link)(({ theme }) => ({
  display: 'flex',
  textDecoration: 'none',
  cursor: 'pointer',
  color: '#fff',
  [theme.breakpoints.down('md')]: {
    display: 'block',
    marginTop: '20px'
  }
}))


const LoginButton = styled(Button)`

color:#2874f0;
background:#fff;
text-transform:none;    
padding: 5px 40px;
border-radius:2px;
box-shadow:none;
font-weight:600;
height:32px;
margin-left:40px;
&:hover {
  background-color: #b7c8e5;
}
`
const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  margin: '0 3% 0 auto',
  '& > button, & > p , & > div': {
    marginRight: '40px !important',
    fontSize: '15px',
    alignItems: 'center',
  },
  [theme.breakpoints.down('md')]: {
    display: "block",
    color: '#2874f0',

  }


}))



const CustomButton = () => {
  const { cartItems } = useSelector(state => state.cart)
  const { account, setAccount } = useContext(DataContext)
  const [open, setOpen] = useState(false)
  const openDialog = () => {
    setOpen(true)
  }
  return (
    <Wrapper >
      {
        account ? <Profile account={account} setAccount={setAccount} />
          :
          <LoginButton variant="contained" onClick={() => openDialog()}>Login</LoginButton>
      }


      <Typography style={{ marginTop: 3, width: 135 }}>Become a Seller</Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>
      <Container to="/cart">
        <Badge badgeContent={cartItems.length} color="secondary">
          <ShoppingCartIcon />
        </Badge>

        <Typography style={{ marginLeft: 10 }}>Cart</Typography>
      </Container>
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  )
}

export default CustomButton;