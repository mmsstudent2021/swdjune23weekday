import { rowRender, url } from "./functions";

const initialRenders = () => {
  fetch(url("/courses"))
    .then((res) => res.json())
    .then((json) => rowRender(json));
};

export default initialRenders;
