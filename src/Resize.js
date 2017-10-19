class Resize {
  constructor(Canvas) {
    this.Canvas = Canvas;
    if (this.Canvas.options.isResponsive) {
      this.windowResizeListener = this.windowResizeListener.bind(this);
      this.setListener();
      this.setSize();
    }
  }

  setListener() {
    window.addEventListener('resize', this.windowResizeListener);
  }

  windowResizeListener() {
    this.setSize();
  }

  setSize() {
    this.Canvas.options.width = this.Canvas.element.parentElement.offsetWidth;
    this.Canvas.element.width = this.Canvas.options.width;
    this.Canvas.calculateDefaults();
    this.Canvas.createPlugins();
    this.Canvas.render();
  }

  destroy() {
    window.removeEventListener('resize', this.windowResizeListener);
  }
}

export default Resize;
