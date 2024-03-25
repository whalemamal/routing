import "./Nineth.css"
import pic01 from "./1.png"
import pic02 from "./2.png"
import pic03 from "./3.png"
import pic04 from "./4.png"
import pic05 from "./Frame 53.png"


function Nineth() {
    return(
        <div className="nineth">
            <div className="nineth1">
                <h1 className="nine">
                    STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
                </h1>
                <div className="nineth2">
                    <input type="email" placeholder="Enter your email address" className="nine1"/> <br/>
                    <input type="email" placeholder="Subscirbe to Newsletter" className="nine2"/>
                </div>
            </div>
            <div className="nineth3">
                <div className="nineth4">
                    <h1>
                        Shop.co
                    </h1>
                    <p>
                        We have clothes that suit your stlye and <br/>
                        Which you are proud to wear. <br/> From women to men
                    </p>
                    <div className="nineth5">
                        <img src={pic01} alt="wha" width={50}/>
                        <img src={pic02} alt="wha" width={50}/>
                        <img src={pic03} alt="wha" width={50}/>
                        <img src={pic04} alt="wha" width={50}/>
                    </div>
                </div>
                <div className="nineth6">
                    <ul className="ase">
                        <li>COMPANY</li>
                        <li>About</li>
                        <li>Future</li>
                        <li>Work</li>
                        <li>Career</li>
                    </ul>
                    <ul className="ase">
                        <li>HELP</li>
                        <li>Customer Support</li>
                        <li>Delivery Details</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                    <ul className="ase">
                        <li>FAQ</li>
                        <li>Account</li>
                        <li>Manage Deliveries</li>
                        <li>Order</li>
                        <li>Payment</li>
                    </ul>
                    <ul className="ase">
                        <li>RESOURCES</li>
                        <li>Free eBook</li>
                        <li>Developement Tutorial</li>
                        <li>How to - Blog</li>
                        <li>Youtube Playlist</li>
                    </ul>
                </div>
            </div>
            <div className="nineth7">
                <div>
                    <hr className="asr"/>
                </div>
                <div className="nineth8">
                    <h3 className="ast">
                        Shop.co © 2000-2023, All Rights Reserved
                    </h3>
                    <img src={pic05} alt="wha" width={400} className="asy"/>
                </div>
            </div>
        </div>
    )
}

export default Nineth