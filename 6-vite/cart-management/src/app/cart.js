import Swal from "sweetalert2";
import { products } from "../core/data";
import {
  app,
  cartBody,
  cartBodyCount,
  cartCostTotal,
  cartCountBadge,
  cartItem,
} from "../core/selectors";

export const createCartItem = ({ id, title, image, price }) => {
  const cartItemUi = cartItem.content.cloneNode(true);
  const cartItemImg = cartItemUi.querySelector(".cart-item-img");
  const cartItemTitle = cartItemUi.querySelector(".cart-item-title");
  const cartItemPrice = cartItemUi.querySelector(".cart-item-price");

  cartItemUi.querySelector(".cart-item").setAttribute("cart-product-id", id);

  cartItemImg.src = image;
  cartItemTitle.innerText = title;
  cartItemPrice.innerText = price;

  return cartItemUi;
};

export const addToCart = (productId) => {
  const currentProduct = products.find((el) => el.id == productId);
  //   console.log(currentProduct);
  cartBody.append(createCartItem(currentProduct));
};

export const removeFromCart = () => {};

export const calculateItemInCartCostTotal = () => {
  return [...cartBody.querySelectorAll(".cart-item-price")].reduce(
    (pv, cv) => pv + parseFloat(cv.innerText),
    0
  );
};

export const countItemInCart = () => {
  return cartBody.querySelectorAll(".cart-item").length;
};

export const cartBodyHandler = (event) => {
//   console.log(event.target);
  if (event.target.classList.contains("cart-item-del")) {
    const currentCartItem = event.target.closest(".cart-item");
    const currentCartItemId = currentCartItem.getAttribute("cart-product-id");

    // console.log(currentCartItem);
    // console.log(currentCartItemId);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Confirm",
    }).then((result) => {
      if (result.isConfirmed) {
        currentCartItem.remove();

        const currentProductCard = app.querySelector(
          `[product-id='${currentCartItemId}']`
        );
        const currentAddToCartBtn =
          currentProductCard.querySelector(".add-to-cart");

        currentAddToCartBtn.classList.remove("bg-neutral-600", "text-white");
        currentAddToCartBtn.innerText = "Add to Cart";
        currentAddToCartBtn.disabled = false;

        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  }
};

export const cartObserver = () => {
  const process = () => {
    // console.log("U change in cart body");
    cartCostTotal.innerText = calculateItemInCartCostTotal();
    cartBodyCount.innerText = countItemInCart();
    cartCountBadge.innerText = countItemInCart();
  };

  const options = {
    childList: true,
    subtree: true,
  };

  const observer = new MutationObserver(process);

  observer.observe(cartBody, options);
};
