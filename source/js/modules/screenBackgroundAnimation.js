export default () => {
  const storyScreen = document.getElementById(`story`);
  const prizesScreen = document.querySelector(`[data-href="prizes"]`);

  prizesScreen.addEventListener(`click`, () => {
    if (storyScreen.classList.contains(`active`)) {
      storyScreen.classList.add(`modal-show`);
    }
  });
  storyScreen.addEventListener(`click`, () => {
    storyScreen.classList.remove(`modal-show`);
  });
};
