import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../../redux/action/productAction';
import { Box, Typography, Grid, styled } from "@mui/material"
import ActionItem from './ActionItem';
import ProductDeatil from './ProductDeatil';



const Component = styled(Box)`
background:#F2F2F2;
margin-top: 55px;


`
const DetailsView = () => {
    const { id } = useParams()
    const dispatch = useDispatch();
    const { loading, product } = useSelector(state => state.getProductDetails)

    useEffect(() => {
        if (product && id !== product.id)
            dispatch(getProductDetails(id))
    }, [dispatch, id, loading, product])

    return (
        <div>
            <Component>

                {
                    product && Object.keys(product).length &&
                    <Grid container style={{ display: "flex" }}>
                        <Grid item lg={4} md={4} sm={8} xs={12}>

                            <ActionItem product={product} />
                        </Grid>
                        <Grid item lg={8} md={8} sm={8} xs={12} style={{ marginTop: 50 }}>
                           
                            <ProductDeatil product={product}/>
                        </Grid>
                    </Grid>
                }
            </Component>

        </div>
    )
}

export default DetailsView;