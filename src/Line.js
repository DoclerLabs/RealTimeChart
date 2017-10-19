class Rectangle {
  constructor(Canvas) {
    this.Canvas = Canvas;
    this.lastX = [];
    this.lastY = [];
  }

  setOptions(options) {
    this.segmentKey = options.segmentKey;
    this.percent = options.percent;
    this.iterKey = options.iterKey;
    this.id = options.id || false;

    this.x = this.Canvas.settings.borderWidth + 2.5 + this.segmentKey * this.Canvas.settings.oneXSegment;
    this.y = this.Canvas.settings.borderWidth + 2.5 + (100 - this.percent) * this.Canvas.settings.oneYSegment;
    this.setColor();
  }

  draw() {
    this.setColor();
    this.drawQuadraticCurve();
    this.saveHistory();
  }

  getLastY() {
    if (typeof this.lastY[this.iterKey] !== 'undefined') {
      return this.lastY[this.iterKey];
    }

    return this.y;
  }

  getLastX() {
    if (typeof this.lastX[this.iterKey] !== 'undefined') {
      return this.lastX[this.iterKey];
    }

    return 0 + this.Canvas.settings.paddingLeft;
  }

  drawQuadraticCurve() {
    this.Canvas.ctx.beginPath();
    this.Canvas.ctx.moveTo(this.getLastX(), this.getLastY());
    this.Canvas.ctx.lineTo(this.x, this.y);
    this.Canvas.ctx.closePath();
    this.Canvas.ctx.stroke();
  }

  saveHistory() {
    this.lastX[this.iterKey] = this.x;
    this.lastY[this.iterKey] = this.y;
  }

  resetXY() {
    if (this.lastX.length > 0) {
      this.lastX.forEach((iter, key) => {
        this.lastX[key] = undefined;
      });
    }
    if (this.lastY.length > 0) {
      this.lastY.forEach((iter, key) => {
        this.lastY[key] = undefined;
      });
    }
  }

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
    this.Canvas.ctx.strokeStyle = color;
  }
}

export default Rectangle;
