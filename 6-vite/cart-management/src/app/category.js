import { products } from "../core/data";
import { categoryBtn, categoryList } from "../core/selectors";
import { productRender } from "./product";

export const createCategory = (title) => {
  //   const category = document.createElement("div");
  //   category.innerHTML = `<button
  //     class="category-btn whitespace-nowrap border border-neutral-600 px-4 py-1"
  //   >
  //     ${title}
  //   </button>`;

  const clone = categoryBtn.content.cloneNode(true);
  const category = clone.querySelector("button");
  category.innerText = title;

  return category;
};

export const categoryRender = (categoryArray) => {
  categoryArray.forEach((el) => categoryList.append(createCategory(el)));
};

export const categoryListHandler = (event) => {
  if (event.target.classList.contains("category-btn")) {
    categoryList.querySelector(".active").classList.remove("active");
    event.target.classList.add("active");
    const currentCategory = event.target.innerText;
    const currentProduct = products.filter(
      (product) => product.category === currentCategory
    );
    // console.table(currentProduct);
    if (currentCategory === "All") {
      productRender(products);
    } else {
      productRender(currentProduct);
    }
  }
};
