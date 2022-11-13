import home from "./Icon/home.svg";

const HeaderSection = () => {
    return ( 
        <div className="HeaderSection">
            <div className="sales">
                <h1>Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span></h1>
                <p>we provide you acces to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                <div>
                    <input type="text" placeholder="Search for a location" />
                    <span><a href="#">Search</a></span>
                </div>
            </div>
            <div className="sales_img">
                <img src={home} alt="home" />
            </div>
        </div>
    );
}
 
export default HeaderSection;