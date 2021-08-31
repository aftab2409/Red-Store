import React from 'react';
import image1 from '../../Images/image1.png'
const Header = () => {
    return (
        <>
            <div className="header mt-0 ">
                <div className="container container-navbar">
                    <div className="row mr-0 ml-0">
                        <div className="col-6">
                            <h1>Give Your Workout <br />A New Style!</h1>
                            <p>Success isn't always about greatness. It's about
                                consistenct. consistent <br />hard work gains success.
                                Greatnes will come.
                            </p>
                            <a href="" className="btn">Explore More &#8594;</a>

                        </div>
                        <div className="col-6">
                            <img src={image1} alt="" width="100%" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;