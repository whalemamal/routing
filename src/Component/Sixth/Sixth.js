import "./Sixth.css"
import pic11 from "./pic11.png"
import pic12 from "./pic12.png"
import pic13 from "./pic13.png"
import pic14 from "./pic14.png"
import pic15 from "./pic15.png"
import pic16 from "./pic16.png"
import pic17 from "./pic17.png"



function Sixth() {
    return(
        <div className="sixth">

            <div className="sixth1">
                <h1>
                    Top Selling
                </h1>
            </div>
            <div className="sixth2">
                <div>
                    <img src={pic11} alt="t shirt" width={300}/>
                    <h3>
                        Vertical Striped Shirt
                    </h3>
                    <img src={pic15} alt="wha" width={150} />
                    <div className="del">
                        <h1>
                            $212 
                        </h1>
                        <h1 className="del1">
                            <del>$232</del>
                        </h1>
                        <h1 className="del2">
                            -20%
                        </h1>
                    </div>
                </div>
                <div>
                    <img src={pic12} alt="shirt" width={300} />
                    <h3>
                        Courage Graphic T-Shirt
                    </h3>
                    <img src={pic16} alt="wha" width={150}/>
                    <h1>
                        $145
                    </h1>
                </div>
                <div>
                    <img src={pic13} alt="wha" width={300}/>
                    <h3>
                        Loose Fit Bermuda Short
                    </h3>
                    <img src={pic17} alt="wha" width={150} />
                    <h1>
                        $80
                    </h1>
                </div>
                <div>
                    <img src={pic14} alt="wha" width={300}/>
                    <h3>
                        Sleeve Striped T-shirt
                    </h3>
                    <img src={pic15} alt="wha" width={150}/>
                    <h1>
                        $210
                    </h1>
                    
                </div>
            </div>
            <div className="sixth3">
                <button>View All</button>
            </div>
        </div>
    )
}

export default Sixth