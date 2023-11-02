import { cartBodyHandler, cartObserver } from "./app/cart";
import { categoryRender } from "./app/category";
import { productListHandler, productRender } from "./app/product";
import { categories, products } from "./core/data";
import { cartBtnHandler } from "./core/handlers";
import { cartBody, cartBtn, cartCloseBtn, productList } from "./core/selectors";

class Shop {

  observer(){
    cartObserver()
  }

  initialRender() {
    categoryRender(categories);
    productRender(products);
  }

  listener() {
    cartBtn.addEventListener("click", cartBtnHandler);
    cartCloseBtn.addEventListener("click", cartBtnHandler);
    productList.addEventListener("click", productListHandler);
    cartBody.addEventListener("click",cartBodyHandler)
  }

  init() {
    console.log("Shop App Start");
    this.observer()
    this.initialRender();
    this.listener();
  }
}

export default Shop;
