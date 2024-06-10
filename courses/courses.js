function loco(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
}
loco()

function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
init()

var tl=gsap.timeline()

gsap.from(".page3 #left",{
  x:-50,
  y:-15,
  opacity:0,
  duration:0.3,
  // delay:2,
  scrub:true,
  scrollTrigger:{
    trigger:".page3 #left",
    scroller:".main",
    // markers:true,
    // scrub:true,
  }
})

gsap.from(".page3 #right",{
  x:50,
  y:-15,
  opacity:0,
  duration:0.3,
  // delay:2,
  scrub:true,
  scrollTrigger:{
    trigger:".page3 #middle",
    scroller:".main",
    // scrub:true,
    // markers:true
  }
})

gsap.from(".page3 #middle",{
  y:15,
  opacity:0,
  duration:0.3,
  // delay:2,
  scrub:true,
  scrollTrigger:{
    trigger:".page3 #right",
    scroller:".main",
    // markers:true,
    // scrub:true

  }
})


tl.from(".page1>h1",{
  y:-20,
  duration:0.4,
  opacity:0
})

tl.from(".page1-right-part img",{
  y:-10,
  x:70,
  opacity:0,
  duration:1


})
gsap.from("#page3-left",{
  x:-80,
  opacity:0,
  duration:0.5,
  scrollTrigger:{
    trigger:"#page3-left",
    scroller:".main",
    scrub:true,

  }

})
gsap.from("#page3-right",{
  x:80,
  opacity:0,
  duration:0.5,
  scrollTrigger:{
    trigger:"#page3-right",
    scroller:".main",
    scrub:true,
  }
  
})
gsap.from("#page3-middle",{
  y:80,
  opacity:0,
  duration:0.5,
  scrollTrigger:{
    trigger:"#page3-middle",
    scroller:".main",
    scrub:true
  }
})