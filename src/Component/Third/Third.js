import "./Third.css"
import pic1 from "./Frame7.png"
import pic2 from "./Rectangle2.png"
import pic3 from "./Vector.png"



function Third() {
    return(
            <div className="third">
                <div className="third1">
                    <h1 className="th">
                        FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
                    </h1>
                    <h4>
                        Browse through our diverse range of meticulously crafted garments, designed <br />
                        to bring out your individuality and cater to your sense of style.
                    </h4>
                    <h4 className="the">SHOP NOW</h4>
                    <img src={pic1} alt="whale" width={600} />
                </div>
                <div className="third2">
                    <img src={pic3} alt="wha" width={70} />
                </div>
                <div>
                    <img src={pic2} alt="wha" width={1520} />
                </div>
                <div className="third3">
                    <img src={pic3} alt="wha" width={100}/>
                </div>
            </div>

    )
}

export default Third