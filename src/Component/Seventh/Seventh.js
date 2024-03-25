import "./Seventh.css"
import pic21 from "./pic21.png"
import pic22 from "./pic22.png"
import pic23 from "./pic23.png"
import pic24 from "./pic24.png"


function Seventh() {
    return(
        <div className="seventh">
            <div className="seventh1">
                <h1>
                    BROWSE BY DRESS STYLE
                </h1>
            </div>
            <div className="seventh2">
                <img src={pic21} alt="wha" width={400}/>
                <img src={pic22} alt="wha" width={800} height={300} className="spa"/>
            </div>
            <div className="seventh3">
                <img src={pic23} alt="wha" width={800} height={300}/>
                <img src={pic24} alt="wha" width={400} className="spa"/>
            </div>
        </div>
    )
}


export default Seventh