class Bar {
  constructor(Canvas) {
    this.Canvas = Canvas;
  }

  /**
   * Set the default options for the chart
   * @param options
   */
  setOptions(options) {
    this.segmentKey = options.segmentKey;
    this.percent = options.percent;
    this.iterKey = options.iterKey;
    this.id = options.id || false;
    this.x = this.Canvas.settings.borderWidth + this.segmentKey * this.Canvas.settings.oneXSegment;
    this.y = this.Canvas.settings.borderWidth + (100 - this.percent) * this.Canvas.settings.oneYSegment;
    this.setColor();
  }

  /**
   * Call the draw functions related to the chart.
   */
  draw() {
    this.drawRectangleHead();
    this.drawRectangleBody();
  }

  /**
   * Draw the top of the rectangle which is one segment / one segment.
   */
  drawRectangleHead() {
    this.Canvas.ctx.fillRect(this.x, this.y, this.Canvas.settings.oneXSegment, this.Canvas.settings.oneYSegment);
  }

  /**
   * Draw the rectangle body.
   */
  drawRectangleBody() {
    this.Canvas.ctx.globalAlpha = 0.7;
    this.Canvas.ctx.fillRect(
      this.x,
      this.y + this.Canvas.settings.oneYSegment,
      this.Canvas.settings.oneXSegment,
      this.Canvas.settings.oneYSegment * this.percent - this.Canvas.settings.oneYSegment
    );
    this.Canvas.ctx.globalAlpha = 1.0;
  }

  /**
   * Set the color according to the id.
   * If there is no id, use the iterKey.
   */
  setColor() {
    let color = '#000';
    if (this.id !== false) {
      this.Canvas.options.legend.forEach(leg => {
        if (this.id === leg.id) {
          color = leg.color;
        }
      });
    } else {
      color = this.Canvas.options.legend[this.iterKey].color;
    }
    this.Canvas.ctx.fillStyle = color;
  }
}

export default Bar;
