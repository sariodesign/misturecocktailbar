import headerInit from './header';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

headerInit();

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.cocktail-wrap').forEach(section => {

  const lines = section.querySelectorAll('.cocktail-item');

  const move =  gsap.timeline({paused:true})
  .from(lines, {
    y: 200,
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