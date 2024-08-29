import $ from "jquery";

class View {

  constructor(private root: JQuery) {}

  //private root: JQuery;

  render(){
    this.root.append("<div>append from view</div>");
  }
}

class Model {}

class Presenter {}


$.fn.coolSlider3000 = function(): JQuery {

    const view: View = new View($(this));

    view.render();

    return this;
};


$(".cool-slider-3000").coolSlider3000();