import "./Fifth.css"
import pic1 from "./pic1.png"
import pic2 from "./pic2.png"
import pic3 from "./pic3.png"
import pic4 from "./pic4.png"
import pic5 from "./pic5.png"
import pic6 from "./pic6.png"



function Fifth() {
    return(
        <div className="fifth">

            <div className="fifth1">
                <h1>
                    NEW ARRIVALS
                </h1>
            </div>
            <div className="fifth2">
                <div>
                    <img src={pic1} alt="t shirt" width={300}/>
                    <h3>
                        T-shirt with Tape Details
                    </h3>
                        <img src={pic5} alt="wha" width={150} />
                    <h1>
                        $120
                    </h1>
                </div>
                <div>
                    <img src={pic2} alt="shirt" width={300} />
                    <h3>
                        Skinny Fit Jean
                    </h3>
                    <img src={pic6} alt="wha" width={150}/>
                    <div className="del">
                        <h1>
                            $240 
                        </h1>
                        <h1 className="del1">
                            <del>$260</del>
                        </h1>
                        <h1 className="del2">
                            -20%
                        </h1>
                    </div>
                </div>
                <div>
                    <img src={pic3} alt="wha" width={300}/>
                    <h3>
                        Checkered Shirt
                    </h3>
                    <img src={pic5} alt="wha" width={150} />
                    <h1>
                        $80
                    </h1>
                </div>
                <div>
                    <img src={pic4} alt="wha" width={300}/>
                    <h3>
                        Sleeve Striped T-shirt
                    </h3>
                    <img src={pic5} alt="wha" width={150}/>
                    <div className="del">
                        <h1>
                            $130 
                        </h1>
                        <h1 className="del1">
                            <del>$160</del>
                        </h1>
                        <h1 className="del2">
                            -30%
                        </h1>
                    </div>
                </div>
            </div>
            <div className="fifth3">
                <button>View All</button>
            </div>
        </div>
    )
}


export default Fifth