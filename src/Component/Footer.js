import meta from "./Icon/Meta.svg";
import facebook from "./Icon/facebook.svg";
import instagram from "./Icon/instagram.svg";
import twitter from "./Icon/twitter.svg"

const Footer = () => {

    
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
                </div>
        
                <div class="portal">
                    <p><a href="#">NFT</a></p>
                    <p><a href="#">Tokens</a></p>
                    <p><a href="#">Landlords</a></p>
                    <p><a href="#">Discord</a></p>
                </div>
            </div>
            <div class="footer_drop">
                <div class="footer_icon">
                    <p> Places</p>
                </div>
        
                <div class="portal">
                    <p><a href="#">Castle</a></p>
                    <p><a href="#">Farms</a></p>
                    <p><a href="#">Beach</a></p>
                    <p><a href="#">Learn more</a></p>
                </div>
            </div>
            <div class="footer_drop">
                <div class="footer_icon">
                    <p>About Us</p>
                </div>
        
                <div class="portal">
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