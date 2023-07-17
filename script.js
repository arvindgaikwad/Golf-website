var crsr = document.querySelector("#cursor") //dom
var blur = document.querySelector("#cursor-blur") //dom

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x-10+"px"          //dets shows detail of mouse events
    crsr.style.top  = dets.y-10+"px"
    blur.style.left = dets.x-150+"px"          
    blur.style.top  = dets.y-150+"px"

})
var h4all = document.querySelectorAll("#nav h4","#nav img",)
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.transform="scale(3)";
        crsr.style.border=("1px solid #fff");
        crsr.style.backgroundColor=("transparent");
        crsr.style.transition = "transform ease-in-out 0.2s";

    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.transform="scale(1)";
        crsr.style.border=("0px solid #B7E833");
        crsr.style.backgroundColor=("#B7E833");
        crsr.style.transition = "transform ease-in-out 0.2s";


    })
}) 
gsap.to("#nav", {
    backgroundColor: "#000", //this is camel keys to access css.
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
        trigger: "#nav", //for the selection of scrollTrigger
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        //markers:true, //just a marker of start and end can disable this part.
        scrub: 1,   //for delaying the scrolling & loop effect.
    }

})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers:true,
        start: "top -25%", //it is a postions on body
        end: "top -70%",
        scrub: 1,
    }
})

gsap.from("#about-us img , #about-us-in",{
    y:50,  //on y-axis up
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        scrub:2,
        start:"top 70%",
        end: "top 60%",
    }
})


gsap.from(".card",{
    scale:0.8,  //scaling effect
    opacity:0,
    stagger:0.1, //one after another effect.
    duration:0.5,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        scrub:1,
        start:"top 70%",
        end: "top 60%",
    }
});

gsap.from(".colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:".colon1",
        scroller:"body",
        start:"top 55%",
        end: "top 45%",
        scrub:1,
    }
})

gsap.from(".colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:".colon1",
        scroller:"body",
        start:"top 55%",
        end: "top 45%",
        scrub:4,
    }
})

gsap.from("#page4 h1",{
    y:50,
    
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end: "top 70%",
        scrub:2,
    }
})



