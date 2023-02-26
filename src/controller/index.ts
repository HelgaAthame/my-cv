import selectorChecker from "../utils/selectorChecker.js";

export class Controller {
  constructor () {

  }

  control() {
    this.addListeners();
  }

  addListeners() {
    this.projectLinks();
    this.educationLinks();
    this.animatePhoto();
  }

  projectLinks() {
    const gemPuzzle = selectorChecker(document, '.gem-puzzle');
    const bomberman = selectorChecker(document, '.bomberman');
    const medicalCenter = selectorChecker(document, '.medical-center');
    const onlineStore = selectorChecker(document, '.online-store');
    const onlineZoo = selectorChecker(document, '.online-zoo');
    const songBird = selectorChecker(document, '.song-bird');
    const fileManager = selectorChecker(document, '.file-manager');
    const websocket = selectorChecker(document, '.websocket');
    const crudApi = selectorChecker(document, '.crud-api');
    const asyncRace = selectorChecker(document, '.async-race');
    const newsApi = selectorChecker(document, '.news-api');

    gemPuzzle.addEventListener('click', () => window.open('https://rolling-scopes-school.github.io/helgaathame-JSFE2022Q3/src/', '_blank'));
    bomberman.addEventListener('click', () => window.open('https://bomberman2d.netlify.app/', '_blank'));
    medicalCenter.addEventListener('click', () => window.open('https://medcine-ath.netlify.app/', '_blank'));
    onlineStore.addEventListener('click', () => window.open('https://cadence-musical-instruments.netlify.app/home', '_blank'));
    onlineZoo.addEventListener('click', () => window.open('https://rolling-scopes-school.github.io/helgaathame-JSFE2022Q3/online-zoo/', '_blank'));
    songBird.addEventListener('click', () => window.open('https://rolling-scopes-school.github.io/helgaathame-JSFE2022Q3/my-app/dist/', '_blank'));
    fileManager.addEventListener('click', () => window.open('https://github.com/HelgaAthame/file-manager/tree/file-manager', '_blank'));
    websocket.addEventListener('click', () => window.open('https://github.com/HelgaAthame/websocket/tree/websocket', '_blank'));
    crudApi.addEventListener('click', () => window.open('https://github.com/HelgaAthame/CRUD-api/tree/crud-api', '_blank'));
    asyncRace.addEventListener('click', () => window.open('https://github.com/rolling-scopes-school/helgaathame-JSFE2022Q3/pull/45', '_blank'));
    newsApi.addEventListener('click', () => window.open('https://github.com/rolling-scopes-school/helgaathame-JSFE2022Q3/pull/43', '_blank'));

  }

  educationLinks() {
    const seoCourse = selectorChecker(document, '.seo-course');
    const nodeJSCourse = selectorChecker(document, '.node-js-course');
    const javascriptCourse = selectorChecker(document, '.javascript-course');
    const academyOfScience = selectorChecker(document, '.academy-of-science');
    const reactCourse = selectorChecker(document, '.react-course');
    const performanceOptimization = selectorChecker(document, '.performance-optimization-course');

    seoCourse.addEventListener('click', () => window.open('https://proseo.by/kursy/', '_blank'));
    nodeJSCourse.addEventListener('click', () => window.open('https://rs.school/nodejs/', '_blank'));
    javascriptCourse.addEventListener('click', () => window.open('https://rs.school/js/', '_blank'));
    academyOfScience.addEventListener('click', () => window.open('https://www.ipnk.basnet.by/', '_blank'));
    reactCourse.addEventListener('click', () => window.open('https://rs.school/react/', '_blank'));
    performanceOptimization.addEventListener('click', () => window.open('https://training.by/', '_blank'));
  }

  animatePhoto() {
    const photoWrapper = selectorChecker(document, '.info__wrapper') as HTMLElement;
    const photo = selectorChecker(document, '.info__photo') as HTMLElement;

    let requestId: number;

    photo.addEventListener('mouseover', () => {

      requestId = requestAnimationFrame(() => {
        photoWrapper.style.borderWidth = '3.2rem';
        photoWrapper.style.margin = '-3rem';
        photoWrapper.style.borderColor = 'rgba(200, 220, 250, 0)';

        photo.style.filter = 'none';
        photo.style.width = '12rem';
        photo.style.height = '12rem';
        photoWrapper.style.width = '12rem';
        photoWrapper.style.height = '12rem';
        photo.style.backgroundSize = '12rem';
      });
    });

    photo.addEventListener('mouseleave', () => {
      requestId = requestAnimationFrame(() => {
        photoWrapper.style.borderWidth = '0.2rem';
        photoWrapper.style.margin = '1rem';
        photoWrapper.style.borderColor = 'rgba(200, 220, 250, 1)';

        photo.style.filter = 'grayscale(50%) opacity(0.3) contrast(2)';
        photo.style.width = '10rem';
        photo.style.height = '10rem';
        photoWrapper.style.width = '10rem';
        photoWrapper.style.height = '10rem';
        photo.style.backgroundSize = '10rem';
      });
    });

  }
}
