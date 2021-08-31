import { useState } from "react";
import img1 from "../../Images/logo-coca-cola.png";
import img2 from "../../Images/logo-godrej.png";
import img3 from "../../Images/logo-oppo.png";
import img4 from "../../Images/logo-paypal.png";
import img5 from "../../Images/logo-philips.png";

const Partner = () => {
    const [Patner, setPatner] = useState([
        {
            imgurl: img1,
        },
        {
            imgurl: img2,
        },
        {
            imgurl: img3,
        },
        {
            imgurl: img4,
        },
        {
            imgurl: img5,
        }

    ])

    const allPartner = Patner.map((patner) => (
        <div className="offer-item">
                <div className="col-lg-12 brand-col">
                <a href=""><img src={patner.imgurl} className="brandImg" /></a>
                </div>
            
        </div>
    ))

    return (
        <>
            <main className=" brands">
                <div className="container small-container">
                    <div className="row row-brand">
                        {allPartner}
                    </div>
                </div>

            </main>
        </>
    )
}
export default Partner;