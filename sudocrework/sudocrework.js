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

function animations(){
  var tl=gsap.timeline()

tl.from(".nav>h1 ",{
    y:-100,
    duration:1.3,
    // delay:0.1,
    opacity:0
})
tl.from(".nav-part2 a,.nav-part2 button",{
    y:-100,
    duration:0.7,
    stagger:0.1,
    opacity:0
})
tl.from(".home-left h3",{
  opacity:0,
  repeat:-1,
  duration:0.4,
  yoyo:true
})

tl.from(".page2-part1-part1 #learners",{
  duration:0.2,
  // delay:2,
  onStart:function learnercount(){
    var a=0;
    setInterval(function(){
      a=a+Math.floor(Math.random()*10000)
      if(a<20000){
        document.querySelector(".page2-part1-part1 #learners").innerHTML=a+"+"
      }
      else{
        a=20000
        document.querySelector(".page2-part1-part1 #learners").innerHTML=a+"+"
      }
    },700)
  },
  
  scrollTrigger:{
    // trigger:".page2-part1-part1",
    trigger:".page2",
    scroller:".main",
    // markers:true,
  start:"top 40%",
    scrub:2
  }
})

tl.from(".page2-part1-part1 #views",{
  duration:0.2,
  onStart:function viewscount(){
              var a=0;
              setInterval(function(){
              a=a+Math.floor(Math.random()*3)
                 if(a<3){
                   document.querySelector(".page2-part1-part1 #views").innerHTML=a+"Lakh"+"+"
                    }
                    else{
                    a=3
                    document.querySelector(".page2-part1-part1 #views").innerHTML=a+"Lakh"+"+"
                    }
                  },140)
                  } ,
  scrollTrigger:{
  // trigger:".page2-part1-part1",
  trigger:".page2",

  scroller:".main",
  // markers:true,
  start:"top 40%",
  scrub:2
  }
  
})

tl.from(".page2-part1-part1 #subscribe",{
  duration:0.2,
  onStart:function viewscount(){
              var a=0;
              setInterval(function(){
              a=a+Math.floor(Math.random()*10000)
                 if(a<10000){
                   document.querySelector(".page2-part1-part1 #subscribe").innerHTML=a+"+"
                    }
                    else{
                    a=10000
                    document.querySelector(".page2-part1-part1 #subscribe").innerHTML=a+"+"
                    }
                  },150)
                  } ,
  scrollTrigger:{
  // trigger:".page2-part1-part1",
  trigger:".page2",

  scroller:".main",
  // markers:true,
  start:"top 40%",
  scrub:2
 }              

})
tl.from(".page2-part2 h1",{
  opacity:0,
  repeat:-1,
  duration:0.4,
  yoyo:true
})

tl.to(".page2-part2 button",{
  // scale:1.4,
  y:-10,
  duration:0.8,
  repeat:-1,
  scrollTrigger:{
      trigger:".page2",
      scroller:".main"
  }
  
})

tl.from(".list-members",{
  opacity:1,
  duration:0.5,
  scale:0.8,
  // stagger:1,
  y:-90,
  scrollTrigger:{
    trigger:".page4",
    scroller:".main",
    // markers:true,
    start:"top 80%",
    scrub:3
  }
})

tl.from(".connection .connection-part1 h2",{
  opacity:0,
  repeat:-1,
  duration:0.4,
  yoyo:true,
  scrollTrigger:{
    trigger:".connection",
    scroller:".main",

  }
})

tl.from(".page4 span",{
  x:-30,
  y:-20,
  opacity:0,
  duration:0.1,
  scrollTrigger:{
    trigger:".page4 span",
    scroller:".main",
    scrub:1,
    // markers:true,
    start:"top 100%"

  }
})
}
animations()

