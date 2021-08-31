import {useState} from 'react';
import product5 from "../../Images/product-5.jpg";
import product6 from "../../Images/product-6.jpg";
import product7 from "../../Images/product-7.jpg";
import product8 from "../../Images/product-8.jpg";
import product9 from "../../Images/product-9.jpg";
import product10 from "../../Images/product-10.jpg";
import product11 from "../../Images/product-11.jpg";
import product12 from "../../Images/product-12.jpg";
import { Link } from 'react-router-dom';
const ProductItem = ()=>{
    const [heros,setHeros] = useState(
        [
            {
              imgurl: product5,
              title: 'Red Printed T-Shirt',
              prize: '$50.00',
              icons : ['fa fa-star','fa fa-star','fa fa-star','fa fa-star','fa fa-star-o']
            },
            {
              imgurl: product6,
              title: 'Red Printed T-Shirt',
              prize: '$50.00',
              icons : ['fa fa-star','fa fa-star','fa fa-star','fa fa-star','fa fa-star-o']
            },
            {
              imgurl: product7,
              title: 'Red Printed T-Shirt',
              prize: '$50.00',
              icons : ['fa fa-star','fa fa-star','fa fa-star','fa fa-star','fa fa-star-o']
            },
            {
              imgurl: product8,
              title: 'Red Printed T-Shirt',
              prize: '$50.00',
              icons : ['fa fa-star','fa fa-star','fa fa-star','fa fa-star','fa fa-star-o']
            },
            {
              imgurl: product9,
              title: 'Red Printed T-Shirt',
              prize: '$50.00',
              icons : ['fa fa-star','fa fa-star','fa fa-star','fa fa-star','fa fa-star-o']
            },
            {
              imgurl: product10,
              title: 'Red Printed T-Shirt',
              prize: '$50.00',
              icons : ['fa fa-star','fa fa-star','fa fa-star','fa fa-star','fa fa-star-o']
            },
            {
              imgurl: product11,
              title: 'Red Printed T-Shirt',
              prize: '$50.00',
              icons : ['fa fa-star','fa fa-star','fa fa-star','fa fa-star','fa fa-star-o']
            },
            {
              imgurl: product12,
              title: 'Red Printed T-Shirt',
              prize: '$50.00',
              icons : ['fa fa-star','fa fa-star','fa fa-star','fa fa-star','fa fa-star-o']
            },
    
          ],
    )
    const allHero =  heros.map((hero)=>(
        <div className="col-lg-3 col-md-4 col-sm-6 products">
        <div class="card">
          <Link to={{
           pathname : 'Portfolia',
           state : hero,
            }} class="card-link">
            <img src={hero.imgurl} alt="" width="100%" />
          </Link>
        </div>

        <h5 className="">{hero.title}</h5>
        <div>
        {hero.icons.map((icon)=>(
          <span className="star"><i className={`${icon}`} aria-hidden="true"></i></span>
        ))}
        </div>
        <p className="">{hero.prize}</p>

      </div>
    ))
   
    
    return(
        <>
        <section className="container sec-mt-70">
          <h2 className="title text-center">Latest Products</h2>
          <div className="row ">

            {allHero}
          </div>
        </section>
      </>
    )
}
export default ProductItem;