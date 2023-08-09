import  gsap  from "gsap";

export const scrollAnimation = (position, target, isMobile, onUpdate) => {
    const tl = gsap.timeline()

    tl.to(position, {
        x: !isMobile ?  -4.0421266135 : -7.0,
        y: !isMobile ?   -12.4927665863 : -12.2,
        z: !isMobile ?  -7.9603975778 : 6.0,
        scrollTrigger: {
            trigger:'.sound-section',
            start:"top bottom",
            end:"top top",
            scrub:2,
            immediateRender:false
        },
        onUpdate
    })
    .to(target, {
        x:!isMobile ?   1.2446004341 : 0.7,
        y:!isMobile ?   -0.5323025354 : 1.9,
        z:!isMobile ?   -1.1803875217 : 0.7,
        scrollTrigger: {
            trigger:'.sound-section',
            start:"top bottom",
            end:"top top",
            scrub:2,
            immediateRender:false
        },
    })
    .to('.jumbotron-section', {
        opacity:0,
        scrollTrigger: {
            trigger:'.sound-section',
            start:"top bottom",
            end:"top top",
            scrub:2,
            immediateRender:false
        },
    })
    .to('.sound-section-content', {
        opacity:1,
        scrollTrigger: {
            trigger:'.sound-section',
            start:"top bottom",
            end:"top top",
            scrub:2,
            immediateRender:false
        },
    })
    .to(position, {
        x: 3.1956521795,
        y: 8.3695514453,
        z: -0.0336908638,
        scrollTrigger: {
            trigger:'.display-section',
            start:"top bottom",
            end:"top top",
            scrub:2,
            immediateRender:false
        },
        onUpdate
    })
    .to(target, {
        x: -0.9558692072,
        y: 0.2935097545,
        z: -0.0128873115,
        scrollTrigger: {
            trigger:'.display-section',
            start:"top bottom",
            end:"top top",
            scrub:2,
            immediateRender:false
        },
    }).to('.display-section', {
        opacity:1,
        scrollTrigger: {
            trigger:'.display-section',
            start:"top bottom",
            end:"top top",
            scrub:2,
            immediateRender:false
        },
        
    })

}