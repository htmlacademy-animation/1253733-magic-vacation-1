import {body} from "./utils";

export default () => {
  window.addEventListener(`load`, function () {
    body.classList.add(`active`);
  });
};
