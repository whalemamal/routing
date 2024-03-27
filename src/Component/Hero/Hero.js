import "./Hero.css"
import frame from "./Frame.png"
import { Link } from "react-router-dom"


function Hero() {
    return(
        <div className="first">
            <div className="first1">
                <Link>Shop.co</Link>
            </div>
            <div className="second222">

                <div className="second">

                    <div className="second1">
                        <button className="second2">Shop <i className="whale"></i></button>
                        <div className="second3">
                            <Link> Link1 </Link>
                        </div>
                    </div>
                    <div className="second4">
                        <ul>
                            <li className="ss"><Link>On Sale</Link></li>
                            <li className="ss"><Link> New Arrivals</Link></li>
                            <li className="ss"><Link> Brands</Link></li>
                        </ul>
                        {/* <Link>On Sale</Link>
                        <Link>New Arrivals</Link>
                        <Link>Brands</Link> */}
                    </div>
                  
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