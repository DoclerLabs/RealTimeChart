class Hover {
  constructor(Canvas) {
    this.Canvas = Canvas;
    this.setListener();
    this.currentSegmentKey = -1;
    this.currentData = false;
    this.lastData = false;
    this.x = 0;
    this.y = 0;
  }

  setListener() {
    let self = this;
    this.Canvas.element.onmousemove = function(e) {
      const rect = this.getBoundingClientRect();
      self.x = e.clientX - rect.left;
      self.y = e.clientY - rect.top;
      self.calculateSegmentKeyFromPosition();
      self.calculateDataBySegmentKey();
      self.callHoverCallback();
    };

    this.Canvas.element.onmouseout = function(e) {
      self.currentData = false;
      self.callHoverCallback();
    };
  }

  calculateSegmentKeyFromPosition() {
    let netXPosition = this.x;
    if (this.Canvas.options.type === 'bar') {
      netXPosition = netXPosition - this.Canvas.settings.borderWidth + 0.5;
    } else if (this.Canvas.options.type === 'line') {
      netXPosition = netXPosition - this.Canvas.settings.borderWidth + 0.5;
    }

    this.currentSegmentKey = Math.ceil(netXPosition / this.Canvas.settings.oneXSegment);
  }

  calculateDataBySegmentKey() {
    this.currentData = this.Canvas.data[this.currentSegmentKey - 1] || false;
  }

  callHoverCallback() {
    if (typeof this.Canvas.options.onHover === 'function' && this.lastData !== this.currentData) {
      this.lastData = this.currentData;
      this.Canvas.options.onHover({
        value: this.currentData,
        x: this.x,
        y: this.y,
      });
    }
  }
}
export default Hover;
