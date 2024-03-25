import "./Fouth.css"
import pic1 from "./versace.png"
import pic2 from "./zara.png"
import pic3 from "./gucci.png"
import pic4 from "./prada.png"
import pic5 from "./calvin.png"

function Fourth() {
    return(
        <div className="fourth2">
            <div>
                <img src={pic1} alt="versace" width={120} />
            </div>
            <div>
                <img src={pic2} alt="Zara" width={140} height={20} />
            </div>
            <div>
                <img src={pic3} alt="Gucci" width={120}/>
            </div>
            <div>
                <img src={pic4} alt="Prada" width={120}/>
            </div>
            <div>
                <img src={pic5} alt="Calvin Klien" width={120}/>
            </div>
        </div>
    )
}

export default Fourth