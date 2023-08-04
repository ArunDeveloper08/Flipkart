import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import { Fragment } from 'react';
import { Box, styled } from '@mui/material';
import { getProducts } from '../../redux/action/productAction';
import { useDispatch , useSelector} from 'react-redux';
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';


const Component= styled(Box)`
padding: 10px;
background: #f2f2f2;
`
const Home = () => {

   const {products}= useSelector( state=> state.getProducts)
    const dispatch= useDispatch()
useEffect(()=>{
    dispatch( getProducts()) 
 
},[dispatch])

    return (
        <Fragment>
            <Navbar />
            <Component>
            <Banner/>
            <MidSlide products={products} title="Deal of the day"  timer={true}/>
            <MidSection/>
            <Slide products={products} title="Discount for you" timer={false}/>
            <Slide products={products} title="suggesting Item" timer={false}/>
            <Slide products={products} title="Top Selection" timer={false}/>
            <MidSection/>
            <Slide products={products} title="Trending" timer={false}/>
         
            <Slide products={products} title="Top Deals on Accessories" timer={false}/>
            </Component>
           
        </Fragment> 
    )
}

export default Home;