import { categoryRender } from "./app/category";
import { productListHandler, productRender } from "./app/product";
import { categories, products } from "./core/data";
import { cartBtnHandler } from "./core/handlers";
import { cartBtn, cartCloseBtn, productList } from "./core/selectors";

class Shop {
  initialRender() {
    categoryRender(categories);
    productRender(products);
  }

  listener() {
    cartBtn.addEventListener("click", cartBtnHandler);
    cartCloseBtn.addEventListener("click", cartBtnHandler);
    productList.addEventListener("click", productListHandler);
  }

  init() {
    console.log("Shop App Start");
    this.initialRender();
    this.listener();
  }
}

export default Shop;
