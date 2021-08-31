import { useState } from "react";
import playlogo from '../../Images/play-store.png';
import applogo from '../../Images/app-store.png'
import logowhite from '../../Images/logo-white.png'
const Footer = () => {
    return (
        <>

            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-3 col-sm-6 ">
                            <h3>Download Our App</h3>
                            <p>Download App for Android and ios mobile phone.</p>
                            <div className="app-logo">
                                <img src={playlogo} alt="play-store"/>
                                    <img src={applogo} alt="app-store"/>
                                 </div>
                             </div>
                                <div className="col-lg-4 col-md-3 col-sm-6 foot-2">
                                    <img src={logowhite} />
                                        <p>Our Purpose Is To Sustainbly Make the Pleasure and Benfits of Sports Accessible to the Many.</p>
                                </div>
                                    <div className=" foot-3 col-lg-2 col-md-3 col-sm-6">
                                        <h3>Useful Links</h3>
                                        <ul className="foot-ul">
                                            <li><a>Coupons</a></li>
                                            <li><a>Blog Post</a></li>
                                            <li><a>Return Policy</a></li>
                                            <li><a>Join Affiliate</a></li>
                                        </ul>
                                    </div>

                                    <div className="foot-3 col-lg-2 col-md-3 col-sm-6">
                                        <h3>Follow us</h3>
                                        <ul className="foot-ul">
                                            <li><a>Facebook</a></li>
                                            <li><a>Twitter</a></li>
                                            <li><a>Instagram</a></li>
                                            <li><a>YouTube</a></li>
                                        </ul>
                                    </div>

                            </div>
                             <hr/>
                             <p className="copyright">Copyright 2002 -Red store</p>
                        </div>
                </div>
        </>
 )
}
export default Footer;