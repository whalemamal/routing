import "./Pthird.css"
import pic51 from "./Frame31.png"
import pic52 from "./Frame32.png"
import pic53 from "./Frame33.png"
import pic54 from "./Frame34.png"
import pic55 from "./Frame 35.png"
import pic56 from "./Frame36.png"
import pic57 from "./Frame37.png"
import pic58 from "./Frame38.png"


function Pthird() {
    return(
        <div className="pt">

            <div className="pt1">
                <h1>
                    YOU MIGHT ALSO LIKE
                </h1>
            </div>

            <div className="pt2">

                <div className="pt22">

                    <img src={pic51} alt="" width={300} />
                    <h2>
                        Polo with Contrast Trims
                    </h2>
                    <img src={pic55} alt="" width={150} />
                    <div className="ptt">
                        <h2>
                            $212
                        </h2>
                        <h2 className="ptt1">
                            <del>$242</del>
                        </h2>
                        <h2 className="ptt2">
                            -20%
                        </h2>
                    </div>

                </div>

                <div className="pt21">

                    <img src={pic52} alt="" width={300} />
                    <h2>
                        Gradient Graphic T-shirt
                    </h2>
                    <img src={pic56} alt="" width={150} />
                    <h2>
                        $145
                    </h2>

                </div>

                <div className="pt21">

                    <img src={pic53} alt="" width={300} />
                    <h2>
                        Polo with Tipping Details
                    </h2>
                    <img src={pic57} alt="" width={150} />
                    <h2>
                        $180
                    </h2>

                </div>

                <div className="pt21">

                    <img src={pic54} alt="" width={300} />
                    <h2>
                        Black Striped T-Shirt
                    </h2>
                    <img src={pic58} alt="" width={150} />
                    <div className="ptt">
                        <h2>
                            $120
                        </h2>
                        <h2 className="ptt1">
                            <del>$150</del>
                        </h2>
                        <h2 className="ptt2">
                            -30%
                        </h2>
                    </div>

                </div>

            </div>

        </div>
    )
}


export default Pthird