import token from "./Icon/MBToken.svg";
import metamask from "./Icon/METAMASK.svg";
import opensea from "./Icon/OpenSea.svg";
import star from "./Icon/rating.svg";
import frame1 from "./Images/Frame1.svg";
import frame2 from "./Images/Frame2.svg";
import frame3 from "./Images/Frame3.svg";
import frame4 from "./Images/Frame4.svg";
import frame5 from "./Images/Frame5.svg";
import frame6 from "./Images/Frame6.svg";
import frame7 from "./Images/Frame7.svg";
import frame8 from "./Images/Frame8.svg";
import space from "./Images/interior.svg";
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

const Main = () => {

    // Open source code: Animate on scroll(aos) 
    // https://github.com/michalsnik/aos#animations

    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])

    return ( 
        <div className="Main">
            <div className="main_header">
                <img src={token} alt="token" />
                <img src={metamask} alt="metamask" />
                <img src={opensea} alt="opensea" />
            </div>
            <h2>Inspiration for your next adventure</h2>
            <div className="main_img">
                <div data-aos="fade-up" className="img_card">
                    <img className="frame" src={frame1} alt="frame1" />
                    <div className="span_div">
                        <span>Desert King</span>
                        <span className="spant">IMBT per night</span>
                    </div>
                    <div className="span_div">
                        <span>2345km</span>
                        <span>available for 2weeks stay</span>
                    </div>
                    <div className="rating">
                        <img src={star} alt="rating" />
                        <img src={star} alt="rating" />
                        <img src={star} alt="rating" />
                        <img src={star} alt="rating" />
                        <img src={star} alt="rating" />
                    </div>
                </div>
                <div data-aos="fade-up" className="img_card">
                    <img className="frame" src={frame2} alt="frame1" />
                    <div className="span_div">
                        <span>Desert King</span>
                        <span className="spant">IMBT per night</span>
                    </div>
                    <div className="span_div">
                        <span>2345km</span>
                        <span>available for 2weeks stay</span>
                    </div>
                    <div className="rating">
                        <img src={star} alt="rating" />
                        <img src={star} alt="rating" />
                        <img src={star} alt="rating" />
                        <img src={star} alt="rating" />
                        <img src={star} alt="rating" />
                    </div>
                </div>
                <div data-aos="fade-up" className="img_card">
                    <img className="frame" src={frame3} alt="frame1" />
                    <div className="span_div">
                        <span>Desert King</span>
                        <span className="spant">IMBT per night</span>
                    </div>
                    <div className="span_div">
                        <span>2345km</span>
                        <span>available for 2weeks stay</span>
                    </div>
                    <div className="rating">
                        <img src={star} alt="rating" />
                        <img src={star} alt="rating" />
                        <img src={star} alt="rating" />
                        <img src={star} alt="rating" />
                        <img src={star} alt="rating" />
                    </div>
                </div>
                <div data-aos="fade-up" className="img_card">
                    <img className="frame" src={frame4} alt="frame1" />
                    <div className="span_div">
                        <span>Desert King</span>
                        <span className="spant">IMBT per night</span>
                    </div>
                    <div className="span_div">
                        <span>2345km</span>
                        <span>available for 2weeks stay</span>
                    </div>
                    <div className="rating">
                        <img src={star} alt="rating" />
                        <img src={star} alt="rating" />
                        <img src={star} alt="rating" />
                        <img src={star} alt="rating" />
                        <img src={star} alt="rating" />
                    </div>
                </div>
                <div data-aos="fade-up" className="img_card">
                    <img className="frame" src={frame5} alt="frame1" />
                    <div className="span_div">
                        <span>Desert King</span>
                        <span className="spant">IMBT per night</span>
                    </div>
                    <div className="span_div">
                        <span>2345km</span>
                        <span>available for 2weeks stay</span>
                    </div>
                    <div className="rating">
                        <img src={star} alt="rating" />
                        <img src={star} alt="rating" />
                        <img src={star} alt="rating" />
                        <img src={star} alt="rating" />
                        <img src={star} alt="rating" />
                    </div>
                </div>
                <div data-aos="fade-up" className="img_card">
                    <img className="frame" src={frame6} alt="frame1" />
                    <div className="span_div">
                        <span>Desert King</span>
                        <span className="spant">IMBT per night</span>
                    </div>
                    <div className="span_div">
                        <span>2345km</span>
                        <span>available for 2weeks stay</span>
                    </div>
                    <div className="rating">
                        <img src={star} alt="rating" />
                        <img src={star} alt="rating" />
                        <img src={star} alt="rating" />
                        <img src={star} alt="rating" />
                        <img src={star} alt="rating" />
                    </div>
                </div>
                <div data-aos="fade-up" className="img_card">
                    <img className="frame" src={frame7} alt="frame1" />
                    <div className="span_div">
                        <span>Desert King</span>
                        <span className="spant">IMBT per night</span>
                    </div>
                    <div className="span_div">
                        <span>2345km</span>
                        <span>available for 2weeks stay</span>
                    </div>
                    <div className="rating">
                        <img src={star} alt="rating" />
                        <img src={star} alt="rating" />
                        <img src={star} alt="rating" />
                        <img src={star} alt="rating" />
                        <img src={star} alt="rating" />
                    </div>
                </div>
                <div data-aos="fade-up" className="img_card">
                    <img className="frame" src={frame8} alt="frame1" />
                    <div className="span_div">
                        <span>Desert King</span>
                        <span className="spant">IMBT per night</span>
                    </div>
                    <div className="span_div">
                        <span>2345km</span>
                        <span>available for 2weeks stay</span>
                    </div>
                    <div className="rating">
                        <img src={star} alt="rating" />
                        <img src={star} alt="rating" />
                        <img src={star} alt="rating" />
                        <img src={star} alt="rating" />
                        <img src={star} alt="rating" />
                    </div>
                </div>
            </div>
            <section>
                <div>
                    <h2>Metabnb NFTs</h2>
                    <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTS. These NFTs gives our customers access to loads of our exclusive services</p>
                    <span><a href="#">Learn more</a></span>
                </div>
                <img data-aos="fade" src={space} alt="interior" />
            </section>
        </div>
    );
}
 
export default Main;