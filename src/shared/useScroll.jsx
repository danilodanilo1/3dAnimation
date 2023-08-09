import React from "react";

function useScroll(section) {
    
     const element = document.querySelector(section)
        window.scrollTo({
            top: element.getBoundingClientRect().top,
            left:0,
            behavior:'smooth'
        })
    
}

export default useScroll;