import React from "react";
import Iphone from '../assets/images/iphone-14.jpg'
import HoldingIphone from '../assets/images/iphone-hand.png'
import useScroll from "../shared/useScroll";

function Jumbotron() {

    return ( 
        <div className="jumbotron-section wrapper">
            <h2 className="title">New</h2>
            <img src={Iphone} alt="iphone" className="logo" />
            <p className="text">Big and bigger</p>
            <span className="description">
                From $41.65/mo. for 24 mo. or $999 before trade-in
            </span>
            <ul className="links">
                <li>
                    <button className="button">Buy</button>
                </li>
                <li>
                    <button className="link" onClick={() => useScroll(".sound-section", 'top')}>Lear More</button>
                </li>
            </ul>
            <img src={HoldingIphone} alt="iphone" className="iphone-img" />
        </div>
     );
}

export default Jumbotron;