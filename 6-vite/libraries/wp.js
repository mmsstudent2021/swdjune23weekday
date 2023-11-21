import "./index.css";
import "./node_modules/waypoints/lib/noframework.waypoints";

const white = document.querySelector("#white");
const pink = document.querySelector("#pink");
const blue = document.querySelector("#blue");
const green = document.querySelector("#green");
const img = document.querySelector("img");
const header = document.querySelector("header");

const blueWaypoint = new Waypoint({
    element : blue,
    handler : (direction) => {
        if(direction === "down"){

            header.classList.add("text-white")
            header.classList.remove("bg-white")
            header.classList.add("bg-blue-600")

        }else{
            header.classList.remove("text-white")
            header.classList.add("bg-white")


        }
    },
    offset : "20%"
});

const greenWaypoint = new Waypoint({
    element : green,
    handler : (direction) => {
        if(direction === "down"){

            header.classList.add("text-white")
            header.classList.remove("bg-blue-600")
            header.classList.add("bg-green-600")

        }else{
            header.classList.remove("bg-green-600")
            header.classList.add("bg-blue-600")


        }
    },
    offset : "20%"
});

const pinkWaypoint = new Waypoint({
  element: pink,
  handler: (direction) => {
    if (direction === "down") {
      console.log("pink in view port", "scroll down");
      img.classList.remove("rotate-12","translate-x-full")
    } else {
      console.log("pink in view port", "scroll up");
      img.classList.add("rotate-12","translate-x-full")

    }
  },
  offset: "20%",
});
