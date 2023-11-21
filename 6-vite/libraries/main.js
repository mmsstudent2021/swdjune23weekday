import "./index.css";

import Glide from "@glidejs/glide";
import VenoBox from "venobox"
import 'flowbite';
import { Drawer } from "flowbite";
import Typed from "typed.js";
import Aos from "aos";

import WOW from "wow.js"

new WOW({
  boxClass : "wow",
  animateClass : "animate__animated"
}).init()

const glideOptions = {
  type: "carousel",
  perView: 3,
  gap: 0,
  autoplay: 2000,
  breakpoints: {
    1024: {
      perView: 2,
    },
    600: {
      perView: 1,
    },
  },
};

new Glide(".glide", glideOptions).mount();


new VenoBox({
  selector : ".my-link"
})


// drawer btn
const openDrawer = document.querySelector("#openDrawer");

// drawer
const drawerBox = document.querySelector("#drawer-example");
const drawerOptions = {

}
const drawer = new Drawer(drawerBox,drawerOptions);

const openDrawerHandler = () => {
  console.log("open drawer");
  drawer.show()
}

openDrawer.addEventListener("click",openDrawerHandler);


const typed = new Typed("#element",{
  strings : ["My name is <u>Hein Htet zan</u>","I'm web Developer"],
  typeSpeed: 50,
  startDelay: 1000,
  backSpeed: 10,
  backDelay: 3000,
  loop: true,
  loopCount: Infinity,
});

Aos.init({
  // delay : 1000,
  duration: 1000,
  offset:200,
  once : true
})

