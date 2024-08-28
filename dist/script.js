// const tl = gsap.timeline()

// tl.to("#fs", {
//     height: "0%",
//     duration: 2,
//     ease: "Expo.easeInOut"
// })
// .to("#elem",{
//     height: '100%',
//     // bottom:"100%",
//     delay:-2,
//     duration: 2,
//     ease: "Expo.easeInOut"
// })
// .to("#white",{
//     height: '100%',
//     // bottom:"100%",
//     delay:-1.6,
//     duration: 2,
//     ease: "Expo.easeInOut"
// })

const addSpan = () => {
    document.querySelectorAll(".downToUp").forEach((element) => {
        const parentSpan = document.createElement("span")
        const childSpan = document.createElement("span")
    
        parentSpan.classList.add("parent", "flex", "justify-center","overflow-y-hidden", "w-full")
        childSpan.classList.add("child","block",)
    
        childSpan.innerHTML = element.innerHTML
    
        parentSpan.appendChild(childSpan)
    
        element.innerHTML = ""
        element.appendChild(parentSpan)
    })
}

addSpan()

const tl = gsap.timeline()

tl.from(".child span",{
    x: 100,
    stagger:0.2,
    duration:1,
    ease: "Power3.easeInOut"
})
.to(".parent .child",{
    y: "-100%",
    duration:1,
    ease: "Circ.easeInOut"
})
.to("#loader",{
    height:0,
    duration:2,
    ease: "Power3.easeInOut",
})
.to("#green",{
    height:"100%",
    bottom: "100%",
    duration:2.5,
    delay:-1.5,
    ease: "Power3.easeInOut"
})
.to("#green",{
    height:0,
    delay:-1,
    duration:1.5,
    ease: "Power3.easeInOut"
})

