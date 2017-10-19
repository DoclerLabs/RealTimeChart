class Hover {
  constructor(Canvas) {
    this.Canvas = Canvas;
    this.currentSegmentKey = -1;
    this.currentData = false;
    this.lastData = false;
    this.x = 0;
    this.y = 0;
    this.mouseMoveListener = this.mouseMoveListener.bind(this);
    this.mouseOutListener = this.mouseOutListener.bind(this);
    this.setListener();
  }
  setListener() {
    this.Canvas.element.addEventListener('mousemove', this.mouseMoveListener);
    this.Canvas.element.addEventListener('mouseout', this.mouseOutListener);
  }

  mouseMoveListener(ev) {
    const rect = ev.target.getBoundingClientRect();
    this.x = ev.clientX - rect.left;
    this.y = ev.clientY - rect.top;
    this.calculateSegmentKeyFromPosition();
    this.calculateDataBySegmentKey();
    this.callHoverCallback();
  }

  mouseOutListener() {
    this.currentData = false;
    this.callHoverCallback();
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

  destroy() {
    this.Canvas.element.addEventListener('mousemove', this.mouseMoveListener);
    this.Canvas.element.addEventListener('mouseout', this.mouseOutListener);
  }
}
export default Hover;
