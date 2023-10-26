import { cartBox } from "./selectors";

export const cartBtnHandler = () => {
  // console.log(cartBox);
  cartBox.classList.toggle("translate-x-full");
  !cartBox.classList.contains("duration-300") &&
    cartBox.classList.add("duration-300");
};
