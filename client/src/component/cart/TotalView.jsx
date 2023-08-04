import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'

const TotalView = ({ cartItems }) => {

    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);

    const totalAmount = () => {
        let price = 0, discount = 0;
        cartItems.map(item => {
            price += (item.price.mrp * +item.quantity)
            discount += (item.price.mrp - item.price.cost) * +item.quantity
            // price += item.price.mrp;
            // discount += (item.price.mrp - item.price.cost)
        })
        setPrice(price);
        setDiscount(discount)
    }
    useEffect(() => {
        totalAmount()
    }, [cartItems])

    return (
        <div>
            <Box style={{ marginTop: 55 }}>
                <Box>
                    <Typography style={{ padding: '15px 24px', background: '#fff', borderBottom: '1px solid #f0f0f0', color: "#878787" }}>
                        PRICE DEATILS
                    </Typography>
                    <Box style={{ padding: '15px 24px', background: '#fff' }}>
                        <Typography style={{ marginBottom: 20, fontSize: 14 }}>Price({cartItems?.length}item)
                            <Box component="span" style={{ float: "right" }}>&#8377;{price}</Box>
                        </Typography>
                        <Typography style={{ marginBottom: 20, fontSize: 14 }}>Discount
                            <Box component="span" style={{ float: "right" }}>-&#8377;{discount}</Box>
                        </Typography>
                        <Typography style={{ marginBottom: 20, fontSize: 14 }}>Delivery Charges
                            <Box component="span" style={{ float: "right" }}>-&#8377;40</Box>
                        </Typography>
                        <Typography style={{ marginBottom: 20, fontSize: 18, fontWeight: 600 }} >Total Amount
                            <Box component="span" style={{ float: "right" }}>&#8377;{price - discount}</Box>
                        </Typography>
                        <Typography style={{ marginBottom: 20, fontSize: 14, color: "green", fontWeight: 500 }}>You will Save &#8377;{discount - 40} on this order</Typography>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default TotalView;