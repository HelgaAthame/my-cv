import selectorChecker from "../utils/selectorChecker";

export class Controller {
  constructor () {

  }

  control() {
    this.addListeners();
  }

  addListeners() {
    const photo = selectorChecker(document, '.info__photo');
    photo.addEventListener('mouseover', () => {
      console.log('kuku');
    })
  }
}
