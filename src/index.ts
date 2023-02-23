import { Controller } from "./controller/index.js";
import { View } from "./view/index.js";

class App {
  view: View;
  controller: Controller;
  constructor (view: View, controller: Controller) {
    this.view = view;
    this.controller = controller;
  }
}

const app = new App(new View(), new Controller());

app.view.renderUI();
app.controller.control();

//export { app };
