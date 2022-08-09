import gsap from 'gsap';
import menuHandler from './menu';
import { ScrollTrigger } from "gsap/ScrollTrigger";

menuHandler();

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.intro').forEach(section => {

  const lines = section.querySelectorAll('.content');

  const move =  gsap.timeline({paused:true})
  .from(lines, {
    y:200,
    opacity: 0,
    duration: 1
  }) 
  
  ScrollTrigger.create({
    trigger: section,
    start: "top 50%",
    onEnter: () => move.play(),
    onLeaveBack: () => move.reverse(),
  })
})

