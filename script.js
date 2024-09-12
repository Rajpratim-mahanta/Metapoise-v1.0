function HomepageAnimation(){
    gsap.set(".slidesm", {scale: 5})
    var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".home",
        start: "top top",
        end:"bottom bottom",
        
        duration:2,
        scrub: 1,
        
    },
})

tl
.to(".vdodiv",{
    '--clip': "0%",
    ease: Power2,
}, 'a')

.to(".slidesm",{
    scale : 1,
    ease: Power2,
}, 'a')

.to(".lft",{
    xPercent : "-10",
    ease: Power2,
},'b')

.to(".rgt",{
    xPercent : "10",
    stagger: .03,
    ease: Power2,
},'b')

.to(".btmtext",{
    opacity: 1,
    stagger: .03,
    ease: Power2,
},'b')
}

function page3Animation(){
    gsap.to(".slide",{
        scrollTrigger:{
            trigger: ".page3",
            start: "top top",
            end : "bottom bottom",
            scrub: 1
        },
        xPercent: -200,
        ease: Power4
    })
    
}




HomepageAnimation()
page3Animation()