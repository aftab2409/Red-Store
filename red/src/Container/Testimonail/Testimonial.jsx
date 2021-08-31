import { useState } from "react"
import test1 from '../../Images/user-1.png';
import test2 from '../../Images/user-2.png';
import test3 from '../../Images/user-3.png';
const Testimonial = () => {
    const [Test, setTest] = useState([
        {
            imgurl: test1,
            name: 'Sean Parker',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta tempore dicta numquam. Ipsam omnis, illum ex officiis nostrum esse veritatis optio,',
            icons: ['fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star-o'],
            icons1: ['fa fa-quote-left']
        },
        {
            imgurl: test2,
            name: 'Mike Smith',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta tempore dicta numquam. Ipsam omnis, illum ex officiis nostrum esse veritatis optio,',
            icons: ['fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star-o'],
            icons1: ['fa fa-quote-left']
        },
        {
            imgurl: test3,
            name: 'Mobel Joe',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta tempore dicta numquam. Ipsam omnis, illum ex officiis nostrum esse veritatis optio,',
            icons: ['fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star-o'],
            icons1: ['fa fa-quote-left']
        }
    ])
    const allTestimonial = Test.map((test) => (

        <div className="col-4 col-test">
            <div class="card card-item">
                <div>
                    {test.icons1.map((icon1) => (
                        <span className="icon-img"><i className={`${icon1}`} aria-hidden="true"></i></span>

                    ))}
                </div>
                
                <p className="para-text">{test.title}</p>
                <div>
                    {test.icons.map((icon) => (
                        <span className="star"><i className={`${icon}`} aria-hidden="true"></i></span>

                    ))}
                </div>
                <a href="#" class="card-img">
                    <img src={test.imgurl} alt="" width="100%" />
                </a>
                <h5 className="heading-text">{test.name}</h5>
            </div>

        </div>
    ))

    return (
        <>
            <main className=" testimonail text-center">
                <div className="container small-container">
                    <div className="row row-item ">
                        {allTestimonial}
                    </div>
                </div>

            </main>
        </>
    )
}
export default Testimonial;

