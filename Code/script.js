gsap.registerPlugin(ScrollTrigger);

const video = document.getElementById("vid");
const duration = 20;
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".Spacer",
    start: "top top",
    end: "12000px",
    scrub: true,
    pin: true
  }
});

tl.to(video, {currentTime: duration, ease: "none"});

tl.to("#text1", {autoAlpha: 1, duration: 0}, 0)
  .to("#text1", {autoAlpha: 0, duration: 0.05}, 0.05)
  .to("#text2", {autoAlpha: 1, duration: 0.025}, 0.15)
  .to("#text2", {autoAlpha: 0, duration: 0.025}, 0.30)
  .to("#btn", {autoAlpha: 1, duration: 0.025}, 0.15)
  .to("#btn", {autoAlpha: 0, duration: 0.025}, 0.225)
  .to("#btn2", {autoAlpha: 1, duration: 0.025}, 0.225)
  .to("#btn2", {autoAlpha: 0, duration: 0.025}, 0.30)
  .to("#text3", {autoAlpha: 1, duration: 0.025}, 0.45)
  .to("#text3", {autoAlpha: 0, duration: 0.025}, 0.50)