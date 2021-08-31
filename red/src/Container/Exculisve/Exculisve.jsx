import { useState } from "react";
import exculsive from '../../Images/exclusive.png'

const ExculisveItem = () => {
    const [Items, setItems] = useState([
        {
            imgurl: exculsive,
            subtitle: 'exclusively Available on Redstore',
            title: 'Smart Band 4',
            discruption: 'The Mi Smart Band 4 features a 39.p% larger(than Mi Band 3)AMOLED color full-touch display with adjustable brightness so everything is clear as can be',
        }
    ]
    )

    const allItems = Items.map((item) => (
        <div className="offer-item">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <a href="#">
                        <img src={item.imgurl} className="offer-img" width="100%" />
                    </a>
                </div>


                <div className="col-lg-6 col-md-6 col-sm-6 pr-0 pl-0 ex-offer">
                    <p className="subtitle">{item.subtitle}</p>
                    <h1 className="head-text">{item.title}</h1>
                    <small className="text-discruption">{item.discruption}</small>
                    <a href="" className="btn">Buy Now &#8594;</a>
                </div>

            </div>
        </div>
    ))

    return (
        <>
            <main className=" offer">
                <div className="container exculisve-container">
                        {allItems}
                </div>

            </main>
        </>
    )
}
export default ExculisveItem;


