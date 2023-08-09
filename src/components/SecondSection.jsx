import React from "react";

function SecondSection() {
    function scrolHandler() {
    
        const element = document.querySelector('.display-section')
           window.scrollTo({
               top: element.getBoundingClientRect().bottom,
               left:0,
               behavior:'smooth'
           })
       
   }
    return (
        <div className="sound-section wrapper">
            <div className="body">
                <div className="sound-section-content content">
                    <h2 className="title">New Sound System</h2>
                    <p className="text">Feel the base.</p>
                    <span className="description">
                        From $41 bla bla bla!
                    </span>
                    <ul className="links">
                        <li>
                            <button className="button">Buy</button>
                        </li>
                        <li>
                            <button className="link" onClick={scrolHandler}>Lear More</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SecondSection;