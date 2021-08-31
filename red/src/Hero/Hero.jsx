import React, { Component } from "react";
import item1 from '../Images/category-1.jpg';
import item2 from '../Images/category-2.jpg';
import item3 from '../Images/category-3.jpg';

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: [
        {
          imgurl: item1,
        },
        {
          imgurl: item2,
        },
        {
            imgurl: item3,
          },
      ],
    };
  }
  
  render() {
    let allHero = this.state.hero.map((item, index) => {
      return (
        <div className="col-lg-4 col-md-4 col-sm-6 mt-3 mb-3">
          <div class="card">
              <a href="#" class="card-link">
                <img src={item.imgurl} alt=""  width="100%" />
              </a>
    
            </div>
          </div>
      );
    });
    return (
      <>
        <section className="container sec-mt-70">
          <div className="row ">
            
            {allHero}
          </div>
        </section>
      </>
    );
  }
}

export default Hero;