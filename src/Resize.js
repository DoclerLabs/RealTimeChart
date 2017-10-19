class Resize {
  constructor(Canvas) {
    this.Canvas = Canvas;
    if (this.Canvas.options.isResponsive) {
      this.setListener();
      this.setSize();
    }
  }

  setListener() {
    window.addEventListener('resize', () => {
      this.setSize();
    });
  }

  setSize() {
    this.Canvas.options.width = this.Canvas.element.parentElement.offsetWidth;
    this.Canvas.element.width = this.Canvas.options.width;
    this.Canvas.calculateDefaults();
    this.Canvas.createPlugins();
    this.Canvas.render();
  }
}

export default Resize;
