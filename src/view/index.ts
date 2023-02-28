import selectorChecker from '../utils/selectorChecker.js';
import './index.scss';

export class View {
  constructor () {

  }

  renderUI() {
    this.renderBG();
    this.renderSpace();
    this.createContent();
  }

  renderBG() {

      let canvas: HTMLCanvasElement,
          ctx: CanvasRenderingContext2D | null,
          circ: number,
          nodes: any[],
          mouse: { x: number; y: number; };
      //const SENSITIVITY, SIBLINGS_LIMIT, DENSITY, NODES_QTY, ANCHOR_LENGTH, MOUSE_RADIUS;

      // how close next node must be to activate connection (in px)
      // shorter distance == better connection (line width)
      const SENSITIVITY = 55; //100
      // note that siblings limit is not 'accurate' as the node can actually have more connections than this value that's because the node accepts sibling nodes with no regard to their current connections this is acceptable because potential fix would not result in significant visual difference
      // more siblings == bigger node
      const SIBLINGS_LIMIT = 50;
      // default node margin
      const DENSITY = 50;
      // total number of nodes used (incremented after creation)
      let NODES_QTY = 0;
      // avoid nodes spreading
      const ANCHOR_LENGTH = 20;
      // highlight radius
      const MOUSE_RADIUS = 200;

      circ = 2 * Math.PI;
      nodes = [];

      canvas = document.createElement('canvas');
      document.body.append(canvas);
      resizeWindow();
      mouse = {
        x: canvas.width / 2,
        y: canvas.height / 2
      };
      ctx = canvas.getContext('2d');
      if (!ctx) {
        alert("Ooops! Your browser does not support canvas :'(");
      }

      class NodeAth{
        siblings: any;
        anchorX: number;
        x: number;
        y: number;
        vx: number;
        vy: number;
        energy: number;
        radius: number;
        brightness: number;
        anchorY: number;
        constructor (x: number, y: number) {
          this.anchorX = x;
          this.anchorX = y;
          this.x = Math.random() * (x - (x - ANCHOR_LENGTH)) + (x - ANCHOR_LENGTH);
          this.y = Math.random() * (y - (y - ANCHOR_LENGTH)) + (y - ANCHOR_LENGTH);
          this.vx = Math.random() * 2 - 1;
          this.vy = Math.random() * 2 - 1;
          this.energy = Math.random() * 100;
          this.radius = Math.random();
          this.siblings = [];
          this.brightness = 0;
        }
        drawNode () {
          var color = "rgba(100, 110, 125, " + this.brightness + ")";
          if (ctx) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, 2 * this.radius + 2 * this.siblings.length / SIBLINGS_LIMIT, 0, circ);
            ctx.fillStyle = color;
            ctx.fill();
          }
        }

        drawConnections () {
          for (var i = 0; i < this.siblings.length; i++) {
            var color = "rgba(100, 110, 125, " + this.brightness + ")";
            if (ctx) {
              ctx.beginPath();
              ctx.moveTo(this.x, this.y);
              ctx.lineTo(this.siblings[i].x, this.siblings[i].y);
              ctx.lineWidth = 1 - calcDistance(this, this.siblings[i]) / SENSITIVITY;
              ctx.strokeStyle = color;
              ctx.stroke();
            }
          }
        }

        moveNode () {
          this.energy -= 2;
          if (this.energy < 1) {
            this.energy = Math.random() * 100;
            if (this.x - this.anchorX < -ANCHOR_LENGTH) {
              this.vx = Math.random() * 2;
            } else if (this.x - this.anchorX > ANCHOR_LENGTH) {
              this.vx = Math.random() * -2;
            } else {
              this.vx = Math.random() * 4 - 2;
            }
            if (this.y - this.anchorY < -ANCHOR_LENGTH) {
              this.vy = Math.random() * 2;
            } else if (this.y - this.anchorY > ANCHOR_LENGTH) {
              this.vy = Math.random() * -2;
            } else {
              this.vy = Math.random() * 4 - 2;
            }
          }
          this.x += this.vx * this.energy / 100;
          this.y += this.vy * this.energy / 100;
        }
      }

      function initNodes() {
        if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
        nodes = [];
        for (var i = DENSITY; i < canvas.width; i += DENSITY) {
          for (var j = DENSITY; j < canvas.height; j += DENSITY) {
            nodes.push(new NodeAth(i, j));
            NODES_QTY++;
          }
        }
      }

      function calcDistance(node1: any, node2: any) {
        return Math.sqrt(Math.pow(node1.x - node2.x, 2) + (Math.pow(node1.y - node2.y, 2)));
      }

      function findSiblings() {
        var node1, node2, distance;
        for (var i = 0; i < NODES_QTY; i++) {
          node1 = nodes[i];
          node1.siblings = [];
          for (var j = 0; j < NODES_QTY; j++) {
            node2 = nodes[j];
            if (node1 !== node2) {
              distance = calcDistance(node1, node2);
              if (distance < SENSITIVITY) {
                if (node1.siblings.length < SIBLINGS_LIMIT) {
                  node1.siblings.push(node2);
                } else {
                  var node_sibling_distance = 0;
                  var max_distance = 0;
                  var s;
                  for (var k = 0; k < SIBLINGS_LIMIT; k++) {
                    node_sibling_distance = calcDistance(node1, node1.siblings[k]);
                    if (node_sibling_distance > max_distance) {
                      max_distance = node_sibling_distance;
                      s = k;
                    }
                  }
                  if (distance < max_distance) {
                    node1.siblings.splice(s, 1);
                    node1.siblings.push(node2);
                  }
                }
              }
            }
          }
        }
      }

      function redrawScene() {
        resizeWindow();
        if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
        findSiblings();
        var i, node, distance;
        for (i = 0; i < NODES_QTY; i++) {
          node = nodes[i];
          distance = calcDistance({
            x: mouse.x,
            y: mouse.y
          }, node);
          if (distance < MOUSE_RADIUS) {
            node.brightness = 1 - distance / MOUSE_RADIUS;
          } else {
            node.brightness = 0;
          }
        }
        for (i = 0; i < NODES_QTY; i++) {
          node = nodes[i];
          if (node.brightness) {
            node.drawNode();
            node.drawConnections();
          }
          node.moveNode();
        }
        requestAnimationFrame(redrawScene);
      }

      function initHandlers() {
        document.addEventListener('resize', resizeWindow, false);
        document.addEventListener('mousemove', mousemoveHandler, false);
      }

      function resizeWindow() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }

      function mousemoveHandler(e: MouseEvent) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      }

      initHandlers();
      initNodes();
      redrawScene();


  }

  renderSpace() {
    const space = document.createElement('div');
    space.classList.add('space');
    document.body.append(space);

    let limit = 1000;

   const stars = {
    render: function () {
      const content = selectorChecker(document, '.content') as HTMLDivElement;
      const h = Math.floor(Number(getComputedStyle(content).height.slice(0,-2)));
      alert(h);
    },

  rand: function () {
    return Math.random();
  },

  createStar: function () {
    let star = document.createElement("div");
    star.className = "star";

    return star;
  },

  create: function () {
    for (let i = 0; i <= limit; i++) {
      let star = this.createStar();
      star.style.top = `${this.rand() * 100}%`;
      star.style.left = `${this.rand() * 100}%`;
      star.style.animationDelay = `${this.rand() * 8}s`;
      space.appendChild(star);
    }
  }
};

  stars.create();


  document.addEventListener('resize', stars.render, false);

  }

  createContent() {
    const content = document.createElement('div');
    content.classList.add('content');
    content.innerHTML = `
    <section class="column one">
      <div class="block">
        <p class="p5 flying dontDisplay with-tooltip" data-tooltip="database in projects">Firebase</p>
        <p class="p2 flying dontDisplay with-tooltip" data-tooltip="studying in process">React</p2>
        <p class="p5 flying dontDisplay with-tooltip" data-tooltip="more then 20 projects">VSCode</p>
        <p class="p3 flying dontDisplay with-tooltip" data-tooltip="develop and build my apps with Vite">Vite</p>
        <p class="p4 flying dontDisplay with-tooltip" data-tooltip="work with console">GitHub</p>
        <p class="p5 flying dontDisplay with-tooltip" data-tooltip="use always">MVC</p>
        <p class="p4 flying dontDisplay with-tooltip" data-tooltip="helps to write good code">ESLint</p>
        <p class="p5 flying dontDisplay with-tooltip" data-tooltip="worked with real website">SEO</p>
        <p class="p3 flying dontDisplay with-tooltip" data-tooltip="use to write styles">SASS</p>
        <p class="p5 flying dontDisplay with-tooltip" data-tooltip="everyday using">DevTools</p>
        <p class="p5 flying dontDisplay with-tooltip" data-tooltip="tried it in one project">Tilewind</p>
        <p class="p1 flying">MY&nbsp;SKILLS</p>
        <p class="p5 flying dontDisplay with-tooltip" data-tooltip="I like to work with classes">OOP</p>
        <p class="p3 flying dontDisplay with-tooltip" data-tooltip="develop all my project with TS">TypeScript</p>
        <p class="p5 flying dontDisplay with-tooltip" data-tooltip="15 years of using">Photoshop</p>
        <p class="p4 flying dontDisplay with-tooltip" data-tooltip="able to write proper config">Webpack</p>
        <p class="p5 flying dontDisplay with-tooltip" data-tooltip="pixel perfect HTML writing">Figma</p>
        <p class="p3 flying dontDisplay with-tooltip" data-tooltip="course in progress">Node.js</p>
        <p class="p5 flying dontDisplay with-tooltip" data-tooltip="my credo">Agile</p>
        <p class="p2 flying dontDisplay with-tooltip" data-tooltip="more 20&nbsp;000 lines of code">JavaScript</p2>
        <p class="p5 flying dontDisplay with-tooltip" data-tooltip="nice practice">Scrum</p>
        <p class="p3 flying dontDisplay with-tooltip" data-tooltip="up-to-date knowledge">CSS</p>
        <p class="p5 flying dontDisplay with-tooltip" data-tooltip="use trello">Kanban</p>
        <p class="p3 flying dontDisplay with-tooltip" data-tooltip="up-to-date knowledge">HTML</p>
        <p class="p5 flying dontDisplay with-tooltip" data-tooltip="use in readme.md and pull requests">Markdown</p>
        <p class="p4 flying dontDisplay with-tooltip" data-tooltip="able to deploy project using CLI">Netlify</p>
        <p class="p5 flying dontDisplay with-tooltip" data-tooltip="finished course">Performance<br>Optimization</p>
      </div>
      <div class="block">
        <p data-tooltip="3 kyu" class="p5 codewars flying dontDisplay with-tooltip">CodeWars</p>
        <p data-tooltip="athamethedarkest@gmail.com" class="p3 email flying dontDisplay with-tooltip">E-MAIL</p>
        <p class="p4 github flying dontDisplay">GitHub</p>
        <p class="p1 contacts flying">MY&nbsp;CONTACTS</p>
        <p class="p5 linkedin flying dontDisplay">LinkedIn</p>
        <p data-tooltip="+375(29)601-71-88" class="p2 phone flying dontDisplay with-tooltip">Phone</p>
        <p data-tooltip="#1561" class="p5 design flying dontDisplay with-tooltip">Discord</p>
        <p data-tooltip="https://t.me/HelgaAthame" class="p4 telegram flying dontDisplay">Telegram</p>
      </div>
    </section>


    <section class="column two">
      <div class="block"><p class="p6">Hi!</div>
      <div class="block"><p class="p7">My name is</p></div>
      <div class="block"><p class="p9">OLGA Khmaruk</p>
      </div><section class="info__wrapper">
        <div class="info__photo"></div>
      </section>
      <div class="block"><p class="p7">I'm from </p></div>
      <div class="block"><p class="p6">Minsk</p></div>
      <div class="block"><p class="p7">I'm looking for a full time job as a</p></div>
      <div class="block"><p class="p8">JavaScript Front-End Developer</p></div>
      <div class="block"></div>
    </section>


    <section class="column three">
      <div class="block">
        <p class="p4 file-manager flying dontDisplay">File Manager</p>
        <p class="p4 gem-puzzle flying dontDisplay">Gem Puzzle</p>
        <p class="p5 crud-api flying dontDisplay">CRUD API</p>
        <p class="p2 bomberman flying dontDisplay">Bomberman</p>
        <p class="p5 websocket flying dontDisplay">Websocket Backend</p>
        <p class="p1 flying">MY&nbsp;PROJECTS</p>
        <p class="p5 medical-center flying dontDisplay">Medical Center</p>
        <p class="p3 online-store flying dontDisplay">Online Store</p>
        <p class="p5 async-race flying dontDisplay">Async Race</p>
        <p class="p5 news-api flying dontDisplay">News Api</p>
        <p class="p3 song-bird flying dontDisplay">Song Bird</p>
        <p class="p4 online-zoo flying dontDisplay">Online Zoo</p>
      </div>

      <div class="block">
        <p class="p4 seo-course flying dontDisplay">Pro SEO course</p>
        <p class="p3 node-js-course flying dontDisplay">Node.JS RS School</p>
        <p class="p2 javascript-course flying dontDisplay">JS Front End RS School</p>
        <p class="p5 university flying dontDisplay">University</p>
        <p class="p1 education flying">EDUCATION</p>
        <p class="p5 academy-of-science flying dontDisplay">Magistracy of the National Academy of Sciences</p>
        <p class="p5 design flying dontDisplay">Web Design course</p>
        <p class="p3 react-course flying dontDisplay">React RS School</p>
        <p class="p4 performance-optimization-course flying dontDisplay">Performance Optimization course</p>
      </div>
    </section>

    `;
    document.body.append(content);
  }
}
