import { products } from "../core/data";
import { productCard, productList } from "../core/selectors";

export const productRender = (productArray) => {
  productArray.forEach((el) => productList.append(createProductCard(el)));
};

export const stars = (rate) => {
  let starUi = "";

  for (let i = 1; i <= 5; i++) {
    starUi += `
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 stroke-orange-400 ${
          i <= rate.toFixed(0) && "fill-orange-400"
        }"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
        />
      </svg>
        `;
  }

  return starUi;
};

export const createProductCard = ({
  id,
  title,
  description,
  image,
  price,
  rating: { rate, count },
}) => {
  const clone = productCard.content.cloneNode(true);
  const productCardUi = clone.querySelector(".product-card");
  const productCardTitle = productCardUi.querySelector(".product-card-title");
  const productCardDescription = productCardUi.querySelector(
    ".product-card-description"
  );
  const productCardImg = productCardUi.querySelector(".product-card-img");
  const productCardRating = productCardUi.querySelector(".rating-text");
  const productCardRatingStars = productCardUi.querySelector(".rating-stars");
  const productCardPrice = productCardUi.querySelector(
    ".product-card-price .price"
  );
  const addToCartBtn = productCardUi.querySelector(".add-to-cart");
  productCardUi.setAttribute("product-id", id);

  productCardTitle.innerText = title;
  productCardDescription.innerText = description;
  productCardImg.src = image;
  productCardPrice.innerText = price;
  productCardRating.innerText = `(${rate} / ${count})`;
  productCardRatingStars.innerHTML = stars(rate);

  addToCartBtn.addEventListener("click", () => {});

  return productCardUi;
};

export const productListHandler = (event) => {
  if (event.target.classList.contains("add-to-cart")) {
    const currentProductCard = event.target.closest(".product-card");
    const currentProductId = currentProductCard.getAttribute("product-id");
    const currentProduct = products.find(el => el.id == currentProductId);
    console.log(currentProductCard);
    console.log(currentProductId);
    console.log(currentProduct);
  }
};
