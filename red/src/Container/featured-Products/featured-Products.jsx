import React, { Component } from "react";
import { Link } from "react-router-dom";
import product1 from "../../Images/product-1.jpg";
import product2 from "../../Images/product-2.jpg";
import product3 from "../../Images/product-3.jpg";
import product4 from "../../Images/product-4.jpg";
var icons = `<i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star-o" aria-hidden="true"></i>`


class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: [
        {
          imgurl: product1,
          title: 'Red Printed T-Shirt',
          prize: '$50.00',
          icons : ['fa fa-star','fa fa-star','fa fa-star','fa fa-star','fa fa-star-o']
        },
        {
          imgurl: product2,
          title: 'Hrx Shoes',
          prize: '$55.00',
          icons : ['fa fa-star','fa fa-star','fa fa-star','fa fa-star','fa fa-star-o']
        },
        {
          imgurl: product3,
          title: 'Track Pant',
          prize: '$50.00',
          icons : ['fa fa-star','fa fa-star','fa fa-star','fa fa-star','fa fa-star-o']
        },
        {
          imgurl: product4,
          title: 'Puma T-Shirt',
          prize: '$50.00',
          icons : ['fa fa-star','fa fa-star','fa fa-star','fa fa-star','fa fa-star-o']
        },

      ],
    };
    
  }
  clickHandel =()=>{
    this.setState({imgurl:product2})
  }
  render() {


    let allHero = this.state.hero.map((item) => {
      return (
        <div className="col-lg-3 col-md-4 col-sm-6 products">
          <div class="card">
            <Link to={{
              pathname : '/singleItem',
              state : {item},
            }} class="card-link" onClick={clickHandel}>
             
              <img src={item.imgurl} alt="" width="100%" />
              </Link>
          </div>

          <h5 className="">{item.title}</h5>
          <div>
          {item.icons.map((icon)=>(
          <span className="star">
            <i className={`${icon}`} aria-hidden="true"></i>
            </span>
          ))}
          </div>
          <p className="">{item.prize}</p>

        </div>
      );
    });
    return (
      <>
        <section className="container sec-mt-70">
          <h2 className="title text-center">featured Products</h2>
          <div className="row ">

            {allHero}
          </div>
        </section>
      </>
    );
  }
}

export default Product;