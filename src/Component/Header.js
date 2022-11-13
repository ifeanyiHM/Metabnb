import logo from "./Icon/Logo.svg";
import nav from "./Icon/nav.svg";
import exit from "./Icon/xxx.png";
import mexit from "./Icon/mexit.svg";
import angle from "./Icon/angle.svg";
import coin from "./Icon/coin.svg";
import wallet from "./Icon/wallet.svg";

import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [open, setOpen] = useState("trans");
    const handleClick = () => {
        if (open == "trans") {
            setOpen("trans trans_back");
        }
    }

    document.querySelector(".exit").addEventListener('click', function() {
        setOpen("trans");
    })

    const [modal, setModal] = useState("false");
    const toggleModal = () => {
        setModal(!modal);
    }

    if (modal) {
        document.body.classList.add('active');
    } else{
        document.body.classList.remove('active');
    }

    return ( 
        <div className="Header">
           <div className="Navigation">
                <img className="logo" src={logo} alt="logo" />
                <div className={open}>
                    <img className="exit" src={exit} alt="exit" />
                        
                    <ul>
                        <li><Link to="/Metabnb">Home</Link></li>
                        <li><Link to="/Place">Place to stay</Link></li>
                        <li><a href="#">NFTs</a></li>
                        <li><a href="#">Community</a></li>
                        <li className="btn btnt" onClick={toggleModal}><p>Connect wallet</p></li>
                    </ul>
                </div>
                <div className="btn btnn" onClick={toggleModal}>
                    <p>Connect wallet</p>
                </div>
               
                <img className="media_nav" onClick={handleClick} src={nav} alt="nav_menu" />
           </div>

            {modal && (
                <div className="modal">
                <div className="fixed_modal"  onClick={toggleModal}></div>
                    <div className="content">
                        <div className="connect">
                            <h3>Connect Wallet</h3>
                            <img onClick={toggleModal} src={mexit} alt="exit" />
                        </div>
                        <p className="para">Choose your preferred wallet:</p>
                        <div className="wallet">
                            <div className="wallet_img">
                                <img src={coin} alt="coin" />
                                <p>Metamask</p>
                            </div>
                            <img src={angle} alt="drop-down" />
                        </div>
                        <div className="wallet">
                            <div className="wallet_img">
                                <img src={wallet} alt="wallet" />
                                <p>WalletConnect</p>
                            </div>
                            <img src={angle} alt="drop-down" />
                        </div>
                    </div>
                </div>
            )}
           
        </div>
     );
}
 
export default Header;