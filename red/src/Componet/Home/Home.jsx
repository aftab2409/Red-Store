import React from 'react'
import ExculisveItem from '../../Container/Exculisve/Exculisve';
import Partner from '../../Container/Partner/Partner';
import ProductItem from '../../Container/Latest-Products/Latest-Products';
import Product from '../../Container/featured-Products/featured-Products';
import Testimonial from '../../Container/Testimonail/Testimonial';
import Hero from '../../Hero/Hero';
import Header from '../Hero-header/Hero-header';





const Home = () => {
    return (
        <>  <Header/>
            <Hero />
            <Product />
            <ProductItem />
            <ExculisveItem/>
            <Testimonial/>
            <Partner/>

        </>
    )
}

export default Home
