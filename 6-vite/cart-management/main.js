import "./index.css";
import { categoryBtn, categoryList } from "./src/core/selectors";
import Shop from "./src/shop";

const shop = new Shop();
shop.init();

// const frg = document.createDocumentFragment();

// const h1 = document.createElement("h1");
// h1.innerText = "min ga lar par";
// const p = document.createElement("p");
// p.innerText = "san kyi tar par"

// frg.append(h1,p)
// console.log(frg);

// document.body.append(frg)

// const cat1 = categoryBtn.content.cloneNode(true);
// cat1.querySelector("button").innerText = "cat 1"
// const cat2 = categoryBtn.content.cloneNode(true);
// cat2.querySelector("button").innerText = "cat 2"


// console.dir();

// categoryList.append(cat1,cat2)
