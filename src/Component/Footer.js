import meta from "./Icon/Meta.svg";
import facebook from "./Icon/facebook.svg";
import instagram from "./Icon/instagram.svg";
import twitter from "./Icon/twitter.svg"
import exit from "./Icon/xxx.png";
import open from "./Icon/cross.png";

const Footer = () => {

   
    const disp = document.querySelectorAll('.footer_icon');
    disp.forEach((port) => {
        port.onclick = function(){
            const mq = window.matchMedia('(max-width: 1099px)');
            if (mq.matches) {
                let item = this.nextElementSibling;
                if (item.style.display == 'none'){
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }  
            }
        
           
        };
    });

    
    return ( 
        <div className="Footer">
            <div className="footer_logo">
                <img className="foot_logo" src={meta} alt="meta" />
                <div>
                    <img src={facebook} alt="facebook" />
                    <img src={instagram} alt="instagram" />
                    <img src={twitter} alt="twitter" />
                </div>
                <p>&#169; 2022 Metabnb</p>
            </div>
            <div class="footer_drop">
                <div class="footer_icon">
                    <p>Community</p>
                    <img className="drop_down" src={open} alt="drop_down" />
                </div>
        
                <div class="portal">
                    <img className="drop_down drop" src={exit} alt="exit" />
                    <p><a href="#">NFT</a></p>
                    <p><a href="#">Tokens</a></p>
                    <p><a href="#">Landlords</a></p>
                    <p><a href="#">Discord</a></p>
                </div>
            </div>
            <div class="footer_drop">
                <div class="footer_icon">
                    <p> Places</p>
                    <img className="drop_down" src={open} alt="drop_down" />
                </div>
        
                <div class="portal">
                    <img className="drop_down drop" src={exit} alt="exit" />
                    <p><a href="#">Castle</a></p>
                    <p><a href="#">Farms</a></p>
                    <p><a href="#">Beach</a></p>
                    <p><a href="#">Learn more</a></p>
                </div>
            </div>
            <div class="footer_drop">
                <div class="footer_icon">
                    <p>About Us</p>
                    <img className="drop_down" src={open} alt="drop_down" />
                </div>
        
                <div class="portal">
                    <img className="drop_down drop" src={exit} alt="exit" />
                    <p><a href="#">Road map</a></p>
                    <p><a href="#">Creators</a></p>
                    <p><a href="#">Career</a></p>
                    <p><a href="#">Contact us</a></p>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;