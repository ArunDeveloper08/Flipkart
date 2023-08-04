

import { Box, Button, Grid, Typography , styled } from "@mui/material";
import { UseSelector, useSelector } from "react-redux";
import CartItem from "./CartItem";
import TotalView from "./TotalView";
import EmptyCart from "./EmptyCart";

const Container = styled(Grid)(({theme})=>({
    padding:'30px 135px',
    [theme.breakpoints.down("md")]:{
        padding:'15px 0'
    }
}))


const Header=styled(Box)`
padding:15px 24px;
`;

const StyledButton=styled(Button)`
display:flex;
margin-left:auto;
background: #fb641b;
color:#fff;
`;
const Wrapper=styled(Box)`
padding:16px 25px;
 background:#fff;
  boxShadow:0 2px 10px 0 rgb(0 0 0 /!0%);
`;
const LeftComponent=styled(Grid)(({theme})=>({
padding:10,
[theme.breakpoints.down('md')]:{
    marginBottom:15
}

}))



const Cart = () => {
    const { cartItems } = useSelector(state => state.cart);

     console.log({cartItems})
    return (

        <>
            {
                cartItems.length ?
                    <Container container>
                        <Grid item lg={9} md={9} sm={12} xs={12}>
                            <Header>
                                <Typography>My Cart ({cartItems.length})</Typography>
                            </Header>
                            {
                                cartItems.map(item => {

                                    return (
                                        <>
                                            <CartItem item={item} />
                                        </>
                                    )
                                })
                            }

                            <Wrapper >
                                <StyledButton style={{background:"#fb641b"}}>Place order</StyledButton>
                            </Wrapper>
                        </Grid>
                        <LeftComponent item lg={3} md={3} sm={12} xs={12} >
                        <TotalView cartItems={cartItems}/>
                        </LeftComponent>
                    </Container> :
                    <Box>
                        <EmptyCart/>
                    </Box>
            }
        </>
    )
}
export default Cart;