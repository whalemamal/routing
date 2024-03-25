import "./Hero.css"
import frame from "./Frame.png"


function Hero() {
    return(
        <div className="first">
            <div>
                <h1>
                    SHOP.CO
                </h1>
            </div>
            <div className="second222">
                <div className="second">
                    <div className="second1">
                        <button className="second2">Shop <i className="whale"></i></button>
                        <div className="second3">
                            <a href="#">link1</a>
                        </div>
                    </div>
                    <a href="#">On Sale</a>
                    <a href="#">New Arrivals</a>
                    <a href="#">Brands</a>
                </div>
            </div>
            <div className="third">
                <input type="text" placeholder="Search..." />
            </div>
            <div className="fourth">
                <img src={frame} alt="wha" />
            </div>
        </div>
    )
}

export default Hero