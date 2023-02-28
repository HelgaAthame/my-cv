var _=Object.defineProperty;var C=(m,e,t)=>e in m?_(m,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):m[e]=t;var d=(m,e,t)=>(C(m,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();const l=(m,e)=>{const t=m.querySelector(e);if(!t)throw new Error(`There is no element with selector ${e}`);return t};class O{constructor(){}control(){this.addListeners(),this.addAnimation(),this.tooltips(),this.mediaScreen()}addListeners(){this.projectLinks(),this.educationLinks(),this.contactLinks()}addAnimation(){this.animatePhoto(),this.animateText(),this.visabilityText(),this.highlightPargs()}projectLinks(){const e=l(document,".gem-puzzle"),t=l(document,".bomberman"),n=l(document,".medical-center"),i=l(document,".online-store"),o=l(document,".online-zoo"),c=l(document,".song-bird"),y=l(document,".file-manager"),u=l(document,".websocket"),r=l(document,".crud-api"),h=l(document,".async-race"),g=l(document,".news-api");e.addEventListener("click",()=>window.open("https://rolling-scopes-school.github.io/helgaathame-JSFE2022Q3/src/","_blank")),t.addEventListener("click",()=>window.open("https://bomberman2d.netlify.app/","_blank")),n.addEventListener("click",()=>window.open("https://medcine-ath.netlify.app/","_blank")),i.addEventListener("click",()=>window.open("https://cadence-musical-instruments.netlify.app/home","_blank")),o.addEventListener("click",()=>window.open("https://rolling-scopes-school.github.io/helgaathame-JSFE2022Q3/online-zoo/","_blank")),c.addEventListener("click",()=>window.open("https://rolling-scopes-school.github.io/helgaathame-JSFE2022Q3/my-app/dist/","_blank")),y.addEventListener("click",()=>window.open("https://github.com/HelgaAthame/file-manager/tree/file-manager","_blank")),u.addEventListener("click",()=>window.open("https://github.com/HelgaAthame/websocket/tree/websocket","_blank")),r.addEventListener("click",()=>window.open("https://github.com/HelgaAthame/CRUD-api/tree/crud-api","_blank")),h.addEventListener("click",()=>window.open("https://github.com/rolling-scopes-school/helgaathame-JSFE2022Q3/pull/45","_blank")),g.addEventListener("click",()=>window.open("https://github.com/rolling-scopes-school/helgaathame-JSFE2022Q3/pull/43","_blank"))}educationLinks(){const e=l(document,".seo-course"),t=l(document,".node-js-course"),n=l(document,".javascript-course"),i=l(document,".academy-of-science"),o=l(document,".react-course"),c=l(document,".performance-optimization-course");e.addEventListener("click",()=>window.open("https://proseo.by/kursy/","_blank")),t.addEventListener("click",()=>window.open("https://rs.school/nodejs/","_blank")),n.addEventListener("click",()=>window.open("https://rs.school/js/","_blank")),i.addEventListener("click",()=>window.open("https://www.ipnk.basnet.by/","_blank")),o.addEventListener("click",()=>window.open("https://rs.school/react/","_blank")),c.addEventListener("click",()=>window.open("https://training.by/","_blank"))}contactLinks(){l(document,".codewars").addEventListener("click",()=>window.open("https://www.codewars.com/users/rsschool_9ece1d706006f744","_blank")),l(document,".github").addEventListener("click",()=>window.open("https://github.com/HelgaAthame","_blank")),l(document,".linkedin").addEventListener("click",()=>window.open("https://www.linkedin.com/in/olga-k-aa9054220/","_blank")),l(document,".telegram").addEventListener("click",()=>window.open("https://t.me/HelgaAthame","_blank"))}animatePhoto(){const e=l(document,".info__wrapper"),t=l(document,".info__photo");t.addEventListener("mouseover",()=>{requestAnimationFrame(()=>{e.style.borderWidth="3.2rem",e.style.margin="-3rem",e.style.borderColor="rgba(200, 220, 250, 0)",t.style.filter="none",t.style.width="12rem",t.style.height="12rem",t.style.boxShadow="0 0 15px 1px rgba(50, 55, 65, 0.5), 0 0 4rem 0.5rem rgba(200, 220, 250, 0.5), -1rem -1rem 4rem 1rem #040812 inset, -2px -2px 10px 2px #040812 inset",e.style.width="12rem",e.style.height="12rem",t.style.backgroundSize="12rem"})}),t.addEventListener("mouseleave",()=>{requestAnimationFrame(()=>{e.style.borderWidth="0.2rem",e.style.margin="1rem",e.style.borderColor="rgba(200, 220, 250, 1)",t.style.filter="grayscale(50%) opacity(0.3) contrast(2)",t.style.width="10rem",t.style.height="10rem",e.style.width="10rem",e.style.height="10rem",t.style.backgroundSize="10rem",t.style.boxShadow="none"})})}animateText(){document.querySelectorAll(".flying").forEach(t=>{let n=!0;(function(){const o=Math.floor(Math.random()*1e3);let c=Number(Math.random().toFixed(2));const y=t.classList.contains("p1")?3:t.classList.contains("p2")?3.5:t.classList.contains("p3")?4:t.classList.contains("p4")?4.5:t.classList.contains("p5")?5:1;setTimeout(u,o);function u(){t.style.paddingTop=`${c}rem`,c>1.5&&(n=!1),c<0&&(n=!0),c=Number((n?c+.01*y:c-.01*y).toFixed(2)),requestAnimationFrame(u)}})()})}visabilityText(){document.querySelectorAll(".block").forEach(t=>{console.log("block");const n=Array.from(t.children);n.find(o=>o.classList.contains("p1"))&&(t.addEventListener("mouseover",()=>{console.log("mouse over"),n.forEach(o=>o.classList.remove("dontDisplay"))}),t.addEventListener("mouseout",()=>{console.log("mouse out"),n.forEach(o=>o.classList.contains("p1")?o.classList.add("displayIt"):o.classList.add("dontDisplay"))}))})}tooltips(){document.querySelectorAll(".with-tooltip").forEach(t=>t.addEventListener("mouseover",()=>{const n=document.createElement("div");n.className="tooltip";const i=t.dataset.tooltip;i&&(n.innerHTML=i),n.style.opacity="0",document.body.append(n);let o=0;(function r(){o=o+.2,n.style.opacity=o.toString(),o<1&&requestAnimationFrame(r)})();let c=t.getBoundingClientRect(),y=c.left+(t.offsetWidth-n.offsetWidth)/2;y<0&&(y=0);let u=c.top-n.offsetHeight-5;u<0&&(u=c.top+t.offsetHeight+5),n.style.left=y+"px",n.style.top=u+"px",t.addEventListener("mouseout",()=>{let r=1;(function h(){r=r-.2,n.style.opacity=r.toString(),r>0?requestAnimationFrame(h):n.remove()})()})}))}highlightPargs(){document.querySelectorAll("p").forEach(t=>{t.addEventListener("mouseover",()=>{t.style.textShadow="1px 1px 2px midnightblue, 0 0 1em rgb(200, 220, 250), 0 0 0.2em rgb(200, 220, 250) "}),t.addEventListener("mouseout",()=>{t.style.textShadow="none"})})}mediaScreen(){window.addEventListener("resize",()=>{this.mediaScreen()},!1);const e=l(document,".content"),t=document.querySelectorAll(".column"),n=l(document,".one"),i=l(document,".two"),o=l(document,".three"),c=document.querySelectorAll(".block"),y=window.matchMedia("(max-width: 1200px)"),u=window.matchMedia("(min-width: 1200px)");y.matches&&(document.body.style.overflowY="scroll",e.innerHTML="",t.forEach(r=>r.style.width="95vw"),c.forEach(r=>r.style.width="95vw"),e.style.flexDirection="column",e.append(i),e.append(n),e.append(o)),u.matches&&(document.body.style.overflowY="hidden",e.innerHTML="",t.forEach(r=>r.style.width="33vw"),c.forEach(r=>r.style.width="33vw"),e.style.flexDirection="row",e.append(n),e.append(i),e.append(o))}}class H{constructor(){}renderUI(){this.renderBG(),this.renderSpace(),this.createContent()}renderBG(){let e,t,n,i,o,r=0;const h=20,g=200;n=2*Math.PI,i=[],e=document.createElement("canvas"),document.body.append(e),b(),o={x:e.width/2,y:e.height/2},t=e.getContext("2d"),t||alert("Ooops! Your browser does not support canvas :'(");class M{constructor(s,p){d(this,"siblings");d(this,"anchorX");d(this,"x");d(this,"y");d(this,"vx");d(this,"vy");d(this,"energy");d(this,"radius");d(this,"brightness");d(this,"anchorY");this.anchorX=s,this.anchorX=p,this.x=Math.random()*(s-(s-h))+(s-h),this.y=Math.random()*(p-(p-h))+(p-h),this.vx=Math.random()*2-1,this.vy=Math.random()*2-1,this.energy=Math.random()*100,this.radius=Math.random(),this.siblings=[],this.brightness=0}drawNode(){var s="rgba(100, 110, 125, "+this.brightness+")";t&&(t.beginPath(),t.arc(this.x,this.y,2*this.radius+2*this.siblings.length/50,0,n),t.fillStyle=s,t.fill())}drawConnections(){for(var s=0;s<this.siblings.length;s++){var p="rgba(100, 110, 125, "+this.brightness+")";t&&(t.beginPath(),t.moveTo(this.x,this.y),t.lineTo(this.siblings[s].x,this.siblings[s].y),t.lineWidth=1-f(this,this.siblings[s])/50,t.strokeStyle=p,t.stroke())}}moveNode(){this.energy-=2,this.energy<1&&(this.energy=Math.random()*100,this.x-this.anchorX<-h?this.vx=Math.random()*2:this.x-this.anchorX>h?this.vx=Math.random()*-2:this.vx=Math.random()*4-2,this.y-this.anchorY<-h?this.vy=Math.random()*2:this.y-this.anchorY>h?this.vy=Math.random()*-2:this.vy=Math.random()*4-2),this.x+=this.vx*this.energy/100,this.y+=this.vy*this.energy/100}}function I(){t&&t.clearRect(0,0,e.width,e.height),i=[];for(var a=50;a<e.width;a+=50)for(var s=50;s<e.height;s+=50)i.push(new M(a,s)),r++}function f(a,s){return Math.sqrt(Math.pow(a.x-s.x,2)+Math.pow(a.y-s.y,2))}function T(){for(var a,s,p,v=0;v<r;v++){a=i[v],a.siblings=[];for(var k=0;k<r;k++)if(s=i[k],a!==s&&(p=f(a,s),p<50))if(a.siblings.length<50)a.siblings.push(s);else{for(var S=0,L=0,D,w=0;w<50;w++)S=f(a,a.siblings[w]),S>L&&(L=S,D=w);p<L&&(a.siblings.splice(D,1),a.siblings.push(s))}}}function E(){b(),t&&t.clearRect(0,0,e.width,e.height),T();var a,s,p;for(a=0;a<r;a++)s=i[a],p=f({x:o.x,y:o.y},s),p<g?s.brightness=1-p/g:s.brightness=0;for(a=0;a<r;a++)s=i[a],s.brightness&&(s.drawNode(),s.drawConnections()),s.moveNode();requestAnimationFrame(E)}function A(){document.addEventListener("resize",b,!1),document.addEventListener("mousemove",N,!1)}function b(){e.width=window.innerWidth,e.height=window.innerHeight}function N(a){o.x=a.clientX,o.y=a.clientY}A(),I(),E()}renderSpace(){const e=document.createElement("div");e.classList.add("space"),document.body.append(e);const t=500;({rand:function(){return Math.random()},createStar:function(){let i=document.createElement("div");return i.className="star",i},create:function(){for(let i=0;i<=t;i++){let o=this.createStar();o.style.top=`${this.rand()*100}%`,o.style.left=`${this.rand()*100}%`,o.style.animationDelay=`${this.rand()*8}s`,e.appendChild(o)}}}).create()}createContent(){const e=document.createElement("div");e.classList.add("content"),e.innerHTML=`
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

    `,document.body.append(e)}}class z{constructor(e,t){d(this,"view");d(this,"controller");this.view=e,this.controller=t}}const x=new z(new H,new O);x.view.renderUI();x.controller.control();
