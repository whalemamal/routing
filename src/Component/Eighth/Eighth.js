import "./Eighth.css"
import pic31 from "./arrow-down-bold.png"
import pic32 from "./arrow-down-bold1.png"
import pic33 from "./pic1.png"
import pic34 from "./pic2.png"
import pic35 from "./pic3.png"
import pic36 from "./pic4.png"
import pic37 from "./pic5.png"
  

function Eighth() {
    return(
        <div className="eighth">
            <div className="eighth1">
                <h1 className="eig">
                    OUR HAPPY CUSTOMERS
                </h1>
                <div>
                    <img src={pic31} alt="arrow" width={50}/>
                    <img src={pic32} alt="arrow" width={50} className="eig1"/>
                </div>
            </div>
            <div className="eighth2">
                <img src={pic33} alt="wha" width={100} height={250}/>
                <img src={pic34} alt="wha" width={400} height={250} />
                <img src={pic35} alt="wha" width={400} height={250}/>
                <img src={pic36} alt="wha" width={400} height={250}/>
                <img src={pic37} alt="wha" width={100} height={250}/>
            </div>
        </div>
    )
}

export default Eighth