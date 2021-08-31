import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import product1 from "../../Images/product-1.jpg";
import product2 from "../../Images/product-2.jpg";
import product3 from "../../Images/product-3.jpg";
import product4 from "../../Images/product-4.jpg";

const Portfolia = () => {
    const [Portfolia, setPortfolia] = useState(
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
        ],
    )
    const allPortfolia = Portfolia.map((Portfolia) => (
        <div className="col-lg-3 col-md-4 col-sm-6 products">
            <div class="card">
                <Link class="card-link">
                    <img src={Portfolia.imgurl} alt="" width="100%" />
                </Link>
            </div>

            <h5 className="">{Portfolia.title}</h5>
            <div>
                {Portfolia.icons.map((icon) => (
                    <span className="star"><i className={`${icon}`} aria-hidden="true"></i></span>
                ))}
            </div>
            <p className="">{Portfolia.prize}</p>

        </div>
    ))


    return (
        <>
            <section className="container sec-mt-70">
                <div className="row all-row">
                    <h5 className="">Related Products</h5>
                    <Link to="" className="">View More</Link>
                </div>
                <div className="row ">
                    {allPortfolia}
                </div>
            </section>
        </>
    )
}
export default Portfolia;