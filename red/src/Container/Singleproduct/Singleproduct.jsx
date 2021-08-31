import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import product1 from "../../Images/product-1.jpg";
import product2 from "../../Images/product-2.jpg";
import product3 from "../../Images/product-3.jpg";
import product4 from "../../Images/product-4.jpg";
import product5 from "../../Images/product-5.jpg";
import product6 from "../../Images/product-6.jpg";
import product7 from "../../Images/product-7.jpg";
import product8 from "../../Images/product-8.jpg";
import product9 from "../../Images/product-9.jpg";
import product10 from "../../Images/product-10.jpg";
import product11 from "../../Images/product-11.jpg";
import product12 from "../../Images/product-12.jpg";


const Singleproduct = () => {
    const [Singleproduct, setSingleproduct] = useState(
        [
            {
                imgurl: product1,
                title: 'Red Printed T-Shirt',
                prize: '$50.00',
                icons: ['fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star-o']
            },
            {
                imgurl: product2,
                title: 'Red Printed T-Shirt',
                prize: '$50.00',
                icons: ['fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star-o']
            },
            {
                imgurl: product3,
                title: 'Red Printed T-Shirt',
                prize: '$50.00',
                icons: ['fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star-o']
            },
            {
                imgurl: product4,
                title: 'Red Printed T-Shirt',
                prize: '$50.00',
                icons: ['fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star-o']
            },
            {
                imgurl: product5,
                title: 'Red Printed T-Shirt',
                prize: '$50.00',
                icons: ['fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star-o']
            },
            {
                imgurl: product6,
                title: 'Red Printed T-Shirt',
                prize: '$50.00',
                icons: ['fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star-o']
            },
            {
                imgurl: product7,
                title: 'Red Printed T-Shirt',
                prize: '$50.00',
                icons: ['fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star-o']
            },
            {
                imgurl: product8,
                title: 'Red Printed T-Shirt',
                prize: '$50.00',
                icons: ['fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star-o']
            },
            {
                imgurl: product9,
                title: 'Red Printed T-Shirt',
                prize: '$50.00',
                icons: ['fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star-o']
            },
            {
                imgurl: product10,
                title: 'Red Printed T-Shirt',
                prize: '$50.00',
                icons: ['fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star-o']
            },
            {
                imgurl: product11,
                title: 'Red Printed T-Shirt',
                prize: '$50.00',
                icons: ['fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star-o']
            },
            {
                imgurl: product12,
                title: 'Red Printed T-Shirt',
                prize: '$50.00',
                icons: ['fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star-o']
            },

        ],
    )
    const allSingleproduct = Singleproduct.map((Singleproduct) => (
        <div className="col-lg-3 col-md-4 col-sm-6 products">
            <div class="card">
                <Link  class="card-link">
                    <img src={Singleproduct.imgurl} alt="" width="100%" />
                </Link>
            </div>

            <h5 className="">{Singleproduct.title}</h5>
            <div>
                {Singleproduct.icons.map((icon) => (
                    <span className="star"><i className={`${icon}`} aria-hidden="true"></i></span>
                ))}
            </div>
            <p className="">{Singleproduct.prize}</p>

        </div>
    ))


    return (
        <>
            <section className="container sec-mt-70">
                <div className="row all-row">
                <h5 className="">All Products</h5>
                <select name="" id="">
                    <option value="">Default Shorting</option>
                    <option value="">Short by price</option>
                    <option value="">Short by popular</option>
                    <option value="">Short by rating</option>
                    <option value="">Short by sale</option>
                </select>
                </div>
                <div className="row ">
                    {allSingleproduct}
                </div>
            </section>
        </>
    )
}
export default Singleproduct;