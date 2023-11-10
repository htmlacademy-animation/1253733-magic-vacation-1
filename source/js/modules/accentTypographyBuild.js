export default class AccentTypographyBuild {
  constructor(
      elementSelector,
      timer,
      classForActivate,
      property
  ) {
    this._TIME_SPACE = 100;

    this._elementSelector = elementSelector;
    this._timer = timer;
    this._classForActivate = classForActivate;
    this._property = property;
    this._element = document.querySelector(this._elementSelector);
    this._timeOffset = 0;

    this.prePareText();
  }

  createElement(letter, indexLetter, indexWords) {
    const span = document.createElement(`span`);
    span.textContent = letter;
    span.style.transition = `${this._property} ${this._timer}ms ease ${this._timeOffset}ms`;

    if (indexLetter % 2 === 0) {
      this._timeOffset = 60;
    }

    if (indexLetter % 2 === 1) {
      this._timeOffset = 90;
    }

    if (indexLetter % 3 === 0) {
      this._timeOffset = 30;
    }
    if (indexLetter % 3 === 1) {
      this._timeOffset = 120;
    }
    if (indexWords > 0) {
      this._timeOffset = this._timeOffset + 200;
    }
    return span;
  }

  prePareText() {
    if (!this._element) {
      return;
    }
    const text = this._element.textContent.trim().split(` `).filter((letter)=>letter !== ``);

    const content = text.reduce((fragmentParent, word, indexWords) => {
      const wordElement = Array.from(word).reduce((fragment, letter, indexLetter) => {
        fragment.appendChild(this.createElement(letter, indexLetter, indexWords));
        return fragment;
      }, document.createDocumentFragment());
      const wordContainer = document.createElement(`span`);
      wordContainer.classList.add(`title-wordgap`);
      wordContainer.appendChild(wordElement);
      fragmentParent.appendChild(wordContainer);
      return fragmentParent;
    }, document.createDocumentFragment());

    this._element.innerHTML = ``;
    this._element.appendChild(content);
  }

  runAnimation() {
    if (!this._element) {
      return;
    }
    this._element.classList.add(this._classForActivate);
  }

  destroyAnimation() {
    this._element.classList.remove(this._classForActivate);
  }
}
