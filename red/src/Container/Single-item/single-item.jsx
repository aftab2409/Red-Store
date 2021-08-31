import React from 'react';
import Product from '../featured-Products/featured-Products';



const singleItem = (props) => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                    <img src={props}  />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                    <p className="">{props.state}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default singleItem;