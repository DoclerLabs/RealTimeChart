class Stacked {
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
    this.marginPercent = options.marginPercent;
    this.id = options.id || false;
    this.x = this.Canvas.settings.borderWidth + this.segmentKey * this.Canvas.settings.oneXSegment;

    let lastYPercent = 100 - this.marginPercent;
    let currentYPercent = lastYPercent - this.percent;

    if (currentYPercent < 0) {
      if (lastYPercent >= 0) {
        currentYPercent = 0;
        this.percent = lastYPercent;
      } else {
        this.percent = 0;
      }
    }

    this.y = this.Canvas.settings.borderWidth + currentYPercent * this.Canvas.settings.oneYSegment;
    this.setColor();
  }

  /**
   * Call the draw functions related to the chart.
   */
  draw() {
    this.Canvas.ctx.fillRect(
      this.x,
      this.y,
      this.Canvas.settings.oneXSegment,
      this.Canvas.settings.oneYSegment * this.percent
    );
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

export default Stacked;
