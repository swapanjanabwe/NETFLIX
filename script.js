// var a = Math.floor(1000 + Math.random()*9000);
// console.log(a);

// let arr = ["swapan", "jana", "developer", "designer" , "freelancer"];

// for(let i=0; i< arr.length; i++){
//   var a = Math.floor(Math.random()*10);
//   console.log(arr[a]);
  
// }
const lenis = new Lenis({
  duration: 1.2,
  smooth: true,
  smoothTouch: false
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// GSAP support
gsap.registerPlugin(ScrollTrigger);

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

