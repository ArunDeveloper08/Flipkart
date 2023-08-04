import React from 'react';
import { Typography, Box, styled, Table, TableBody, TableRow, TableCell } from '@mui/material';
import { LocalOffer } from '@mui/icons-material';


const SmallText = styled(Box)`
font-size:14px;
vertical-align:baseline;
& > p{
    font-size:14px;
    margin-top:10px;
}
`;

const StyledBadge = styled(LocalOffer)`
margin-right:10px;
color:#00CC00;
font-size:15px;

`;

const ColumnText = styled(TableRow)`
font-size:14px;
vertical-align:baseline;
& > td {
    font-size:14px;
    margin-top:10px;
    border:none;
}

`
const ProductDeatil = ({ product }) => {
    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    return (
        <div>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14 }}> 8 Rating & 1 Reviews
                <Box component="span"><img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" style={{ width: 77, marginLeft: 20 }} /></Box>
            </Typography>
            <Typography>
                <Box component="span" style={{ fontSize: 28 }}>&#8377;{product.price.cost} </Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{ color: '#878787' }}><strike>&#8377;{product.price.mrp}</strike></Box> &nbsp;&nbsp;&nbsp;
                <Box component="span" style={{ color: '#388E3c' }}>{product.price.discount}</Box>
            </Typography>
            <Typography>Available Offers</Typography>
            <SmallText>
                <Typography><StyledBadge />Get extra 13% off upto(price inclusive of dicount) T&C </Typography>
                <Typography><StyledBadge />Sign up for Flipkart Pay later and get Flipkart Gift Worth  &#8377;100 know more </Typography>
                <Typography><StyledBadge />Get extra 20% off upto &#8377;50 on 1 item </Typography>
                <Typography><StyledBadge />Buy 2 items save 5% , Buy 3 or more save 10% T&C</Typography>
                <Typography><StyledBadge />5% cashback on Axis Bank Card</Typography>
                <Typography><StyledBadge />No Cost EMI on Bajaj Finserv EMI Card on Cart Value above  &#8377;2999 T&C</Typography>
            </SmallText>
            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{ color: ' #878787' }}>Delivery</TableCell>
                        <TableCell style={{ fontWeight: 600 }}>Delivery by {date.toDateString()} | &#8377;40</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: ' #878787' }}>Warranty</TableCell>
                        <TableCell style={{ fontWeight: 600 }}>No Warranty</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: ' #878787' }}>Seller</TableCell>
                        <TableCell >
                            <Box component="span" style={{ color: '#2874f0' }}>SuperComNet</Box>
                            <Typography>GST invoice available</Typography>
                            <Typography>View more sellers starting form &#8377;{product.price.discount} </Typography>
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: ' #878787' }} colSpan={2}>
                            <img src={adURL} style={{ width: 390 }} alt="points" />
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: ' #878787' }}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </ColumnText>

                </TableBody>
            </Table>

        </div>
    )
}

export default ProductDeatil