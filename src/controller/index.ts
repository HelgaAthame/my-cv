import selectorChecker from "../utils/selectorChecker.js";

export class Controller {
  constructor () {

  }

  control() {
    this.addListeners();
    this.addAnimation();
    this.tooltips();
    this.mediaScreen();
  }

  addListeners() {
    this.projectLinks();
    this.educationLinks();
    this.contactLinks();
  }

  addAnimation() {
    this.animatePhoto();
    this.animateText();
    this.visabilityText();
    this.highlightPargs();
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

  contactLinks() {
    const codewars = selectorChecker(document, '.codewars');
    codewars.addEventListener('click', () => window.open('https://www.codewars.com/users/rsschool_9ece1d706006f744', '_blank'));
    const github = selectorChecker(document, '.github');
    github.addEventListener('click', () => window.open('https://github.com/HelgaAthame', '_blank'));

    //const linkedin = selectorChecker(document, '.linkedin');
    //linkedin.addEventListener('click', () => window.open('#', '_blank'));

    const telegram = selectorChecker(document, '.telegram');
    telegram.addEventListener('click', () => window.open('https://t.me/HelgaAthame', '_blank'));

  }

  animatePhoto() {
    const photoWrapper = selectorChecker(document, '.info__wrapper') as HTMLElement;
    const photo = selectorChecker(document, '.info__photo') as HTMLElement;

    photo.addEventListener('mouseover', () => {

      requestAnimationFrame(() => {
        photoWrapper.style.borderWidth = '3.2rem';
        photoWrapper.style.margin = '-3rem';
        photoWrapper.style.borderColor = 'rgba(200, 220, 250, 0)';

        photo.style.filter = 'none';
        photo.style.width = '12rem';
        photo.style.height = '12rem';
        photo.style.boxShadow = '0 0 15px 1px rgba(50, 55, 65, 0.5), 0 0 4rem 0.5rem rgba(200, 220, 250, 0.5), -1rem -1rem 4rem 1rem #040812 inset, -2px -2px 10px 2px #040812 inset';
        photoWrapper.style.width = '12rem';
        photoWrapper.style.height = '12rem';
        photo.style.backgroundSize = '12rem';
      });
    });

    photo.addEventListener('mouseleave', () => {
      requestAnimationFrame(() => {
        photoWrapper.style.borderWidth = '0.2rem';
        photoWrapper.style.margin = '1rem';
        photoWrapper.style.borderColor = 'rgba(200, 220, 250, 1)';

        photo.style.filter = 'grayscale(50%) opacity(0.3) contrast(2)';
        photo.style.width = '10rem';
        photo.style.height = '10rem';
        photoWrapper.style.width = '10rem';
        photoWrapper.style.height = '10rem';
        photo.style.backgroundSize = '10rem';
        photo.style.boxShadow = 'none';
      });
    });

  }

  animateText() {
    const paragraphs: NodeListOf<HTMLElement> = document.querySelectorAll('.flying');

    paragraphs.forEach( p => {

      let up: boolean = true;

      (function setAnim() {

        const time: number = Math.floor(Math.random() * 1000);

        let marg = Number(Math.random().toFixed(2));

        const multiplier = p.classList.contains('p1') ? 3
          : p.classList.contains('p2') ? 3.5
          : p.classList.contains('p3') ? 4
          : p.classList.contains('p4') ? 4.5
          : p.classList.contains('p5') ? 5
          : 1;

        setTimeout(anim, time);
        function anim() {
          p.style.paddingTop = `${marg}rem`;
          //p.style.paddingBottom = `${1 - marg}rem`;
          if (marg > 1.5) up = false;
          if (marg < 0) up = true;
          marg = Number((up ? marg + 0.01 * multiplier : marg - 0.01 * multiplier).toFixed(2));
          requestAnimationFrame(anim);
        }
      })();

    })
  }

  visabilityText() {
    const blocks: NodeListOf<HTMLElement> = document.querySelectorAll('.block');

    blocks.forEach( block => {
      console.log('block');
      const childs = Array.from(block.children);

      const p1 = childs.find( child => child.classList.contains('p1'));

      if (p1) {
        block.addEventListener('mouseover', () => {
          console.log('mouse over');
          childs.forEach( child => child.classList.remove('dontDisplay'));
        })

        block.addEventListener('mouseout', () => {
          console.log('mouse out');
          childs.forEach( child => child.classList.contains('p1') ? child.classList.add('displayIt') : child.classList.add('dontDisplay'));
        })
      }

    });

  }

  tooltips() {
    const withTooltips: NodeListOf<HTMLParagraphElement> = document.querySelectorAll('.with-tooltip');

    withTooltips.forEach( p => p.addEventListener('mouseover', () => {
      const tooltipElem = document.createElement('div');
      tooltipElem.className = 'tooltip';
      const innerData = p.dataset.tooltip;
      if (innerData) tooltipElem.innerHTML = innerData;
      tooltipElem.style.opacity = '0';
      document.body.append(tooltipElem);

      let x = 0;
      (function anim() {
        x = x + 0.2;
        tooltipElem.style.opacity = x.toString();
        if ( x < 1 ) requestAnimationFrame(anim);
      })();

      let coords = p.getBoundingClientRect();

      let left = coords.left + (p.offsetWidth - tooltipElem.offsetWidth) / 2;
      if (left < 0) left = 0; // не заезжать за левый край окна

      let top = coords.top - tooltipElem.offsetHeight - 5;
      if (top < 0) { // если подсказка не помещается сверху, то отображать её снизу
        top = coords.top + p.offsetHeight + 5;
      }

      tooltipElem.style.left = left + 'px';
      tooltipElem.style.top = top + 'px';

      p.addEventListener('mouseout', () => {
        let x = 1;
        (function anim() {
          x = x - 0.2;
          tooltipElem.style.opacity = x.toString();
          if ( x > 0 ) {
            requestAnimationFrame(anim)
          } else {
            tooltipElem.remove();
          }
        })();
      });
    }))
  }

  highlightPargs() {
    const parags = document.querySelectorAll('p');

    parags.forEach( p => {
      p.addEventListener('mouseover', () => {
        p.style.textShadow = '1px 1px 2px midnightblue, 0 0 1em rgb(200, 220, 250), 0 0 0.2em rgb(200, 220, 250) ';
      })
      p.addEventListener('mouseout', () => {
        p.style.textShadow = 'none';
      })
    })
  }

  mediaScreen() {
    window.addEventListener(`resize`, () => {
      this.mediaScreen();
    }, false);

    const content = selectorChecker(document, '.content') as HTMLDivElement;
    const cols: NodeListOf<HTMLDivElement> = document.querySelectorAll('.column');
    const one = selectorChecker(document, '.one') as HTMLDivElement;
    const two = selectorChecker(document, '.two') as HTMLDivElement;
    const three = selectorChecker(document, '.three') as HTMLDivElement;
    const blocks: NodeListOf<HTMLDivElement> = document.querySelectorAll('.block');
    const mediaSmall = window.matchMedia('(max-width: 1200px)');
    const mediaBig = window.matchMedia('(min-width: 1200px)');
    if (mediaSmall.matches) {
      document.body.style.overflowY = 'scroll';
      content.innerHTML = ``;
      cols.forEach( col => col.style.width = '95vw' );
      blocks.forEach( block => block.style.width = '95vw' );
      content.style.flexDirection = 'column';
      content.append(two);
      content.append(one);
      content.append(three);
    }
    if (mediaBig.matches) {
    document.body.style.overflowY = 'hidden';
      content.innerHTML = ``;
      cols.forEach( col => col.style.width = '33vw' );
      blocks.forEach( block => block.style.width = '33vw' );
      content.style.flexDirection = 'row';
      content.append(one);
      content.append(two);
      content.append(three);
    }
  }
}
