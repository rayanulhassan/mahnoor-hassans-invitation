const values = window.location.search.split('=')[1].split(',')
const containers = ['i','m','b','v']

containers.forEach(x => {
  if(!values.includes(x)) document.getElementById(x).remove()
})

const width = document.getElementsByClassName('panel').length;

document.getElementsByClassName("container")[0].classList.add(`w-${width}`)

gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "+=2500",
  }
});

document.querySelector("body").classList.remove("v-h")