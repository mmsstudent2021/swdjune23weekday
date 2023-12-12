import { cartBodyHandler, cartObserver } from "./app/cart";
import { categoryListHandler, categoryRender } from "./app/category";
import { productListHandler, productRender } from "./app/product";
import { categories, products } from "./core/data";
import {
  cartBtnHandler,
  clearSearchBarInputHandler,
  searchBarInputHandler,
  searchBtnHandler,
} from "./core/handlers";
import {
  cartBody,
  cartBtn,
  cartCloseBtn,
  categoryList,
  clearSearchBarInput,
  productList,
  searchBarInput,
  searchBtn,
} from "./core/selectors";

class Shop {
  observer() {
    cartObserver();
  }

  // initialRender() {
  //   fetch("http://localhost:3000/categories")
  //     .then((res) => res.json())
  //     .then((json) => categoryRender(json));
  //   fetch("http://localhost:3000/products")
  //     .then((res) => res.json())
  //     .then((json) => productRender(json));
  // }

  async initialRender() {
    const categoryRes = await fetch("https://fakestoreapi.com/products/categories");
    const categoryJson = await categoryRes.json();
    categoryRender(categoryJson)

    const productRes = await fetch("https://fakestoreapi.com/products");
    const productJson = await productRes.json();
    productRender(productJson)
  }

  listener() {
    cartBtn.addEventListener("click", cartBtnHandler);
    searchBtn.addEventListener("click", searchBtnHandler);
    searchBarInput.addEventListener("keyup", searchBarInputHandler);
    clearSearchBarInput.addEventListener("click", clearSearchBarInputHandler);
    cartCloseBtn.addEventListener("click", cartBtnHandler);

    productList.addEventListener("click", productListHandler);
    cartBody.addEventListener("click", cartBodyHandler);
    categoryList.addEventListener("click", categoryListHandler);
  }

  init() {
    console.log("Shop App Start");
    this.observer();
    this.initialRender();
    this.listener();
  }
}

export default Shop;
