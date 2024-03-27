import "./Pfirst.css"
import pic41 from "./image1.png"
import pic42 from "./image2.png"
import pic43 from "./image3.png"
import pic44 from "./image4.png"
import pic45 from "./Vector.png"
import pic46 from "./Frame6.png"
import pic47 from "./Frame47.png"


function Pfirst() {
    return(
        <div className="pfirst">

            <div className="pf1">
                <hr />
            </div>

            <div className="pf">

                <div className="pf2">
                    <ul>
                        <li>Home</li>
                    </ul>
                    <img src={pic45} alt="yu" width={10} height={10} className="pf22"/>
                </div>

                <div className="pf2">
                    <ul>
                        <li>Shop</li>
                    </ul>
                    <img src={pic45} alt="yu" width={10} height={10} className="pf22"/>
                </div>

                <div className="pf2">
                    <ul>
                        <li>Men</li>
                    </ul>
                    <img src={pic45} alt="yu" width={10} height={10} className="pf22" />
                </div>

                <div className="pf2">
                    <ul>
                        <li>TShirt</li>
                    </ul>
                </div>
             
            </div>

            <div className="pf3">

                <div className="pf31">

                    <div className="pf331">
                        <ul>
                            <li>
                                <img src={pic41} alt="yu" width={180} height={200} />
                            </li>
                            <li>
                                <img src={pic42} alt="yu" width={180} height={200}  />
                            </li>
                            <li>
                                <img src={pic43} alt="yu" width={180} height={200}  />
                            </li>
                        </ul>
                    </div>
                     
                    <div className="pf332">
                        <img src={pic44} alt="yu" width={450} height={660}/>
                    </div>

                </div>

                <div className="pf32">

                    <h1 className="pf321">
                        One Life Graphic T-shirt
                    </h1>

                    <img src={pic46} alt="yu" width={300} className="pf326"/>

                    <div className="pf322">

                        <h2>
                            $260
                        </h2>

                        <h2 className="pf323">
                            <del>$300</del>
                        </h2>

                        <h4 className="pf324">
                            -40%
                        </h4>

                    </div>

                    <h5 className="pf325">
                        This graphic t-shirt which is perfect for any occasion. 
                        Crafted from a soft and <br /> breathable fabric, it offers superior 
                        comfort and style.
                    </h5>

                    <div className="pf34">
                        <hr />
                    </div>

                    <div className="pf35">

                        <h3>
                            Select Colors
                        </h3>

                        <img src={pic47} alt="yu" width={200}/>

                    </div>

                    <div className="pf34">
                        <hr />
                    </div>

                    <div className="pf36">

                        <h3>
                            Choose Size
                        </h3>

                        <div className="pf361">

                            <h5 className="pf364">
                                Small
                            </h5> 
                                              
                            <h5 className="pf362">
                                Meduim
                            </h5>                      
                        
                            <h5 className="pf363">
                                Large
                            </h5>                       
                        
                            <h5 className="pf362">
                                X-Large
                            </h5> 

                        </div>

                    </div>

                    <div className="pf34">
                        <hr />
                    </div>

                    <div className="pf37">

                        <div>
                            <h1 className="pf371">
                                -   1   +
                            </h1>
                        </div>
                        <div>
                            <h1 className="pf372">
                                Add to Cart
                            </h1>
                        </div>

                    </div>
                    
                </div>

            </div>

            <div className="pf38">

                <div className="pf381">

                    <div>
                        <h1 className="pf383">
                            Product Details
                        </h1>
                    </div>
                    <div>
                        <h1>
                            Ratings & Reviews
                        </h1>
                    </div>
                    <div>
                        <h1 className="pf383">
                            FAQs
                        </h1>
                    </div>

                </div>

                <div className="pf382">
                    <hr />
                </div>


             </div>
















        </div>
    )
}



export default Pfirst