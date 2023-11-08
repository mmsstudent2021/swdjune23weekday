import "./index.css";

import Glide from "@glidejs/glide";
import VenoBox from "venobox"
import 'flowbite';
import { Drawer } from "flowbite";

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