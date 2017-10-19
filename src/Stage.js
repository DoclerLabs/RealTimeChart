class Stage {
  constructor(Canvas) {
    this.Canvas = Canvas;
    if (this.Canvas.options.showRuler === true) {
      this.printRuler();
    }

    if (this.Canvas.options.hasOwnProperty('legend') === true && this.Canvas.options.legend.length > 0) {
      this.drawLegend();
    }

    if (this.Canvas.options.showFrame) {
      this.drawFrame();
    }
  }

  clearStage() {
    this.Canvas.ctx.clearRect(
      2,
      2,
      this.Canvas.settings.stageWidth + this.Canvas.settings.boxInnerPadding,
      this.Canvas.settings.stageHeight + this.Canvas.settings.boxInnerPadding
    );
  }

  printRuler() {
    let marginFromStage = 5;
    let fontSize = 10;
    let marginLeft =
      this.Canvas.options.width -
      this.Canvas.settings.paddingRight +
      this.Canvas.settings.borderWidth +
      marginFromStage;
    let marginTopForTop = 2 + fontSize / 2;
    let marginTopForCenter =
      (this.Canvas.settings.stageHeight + this.Canvas.settings.boxInnerPadding + this.Canvas.settings.borderWidth) / 2;
    let marginTopForBottom = this.Canvas.options.height - this.Canvas.settings.paddingBottom;
    this.Canvas.ctx.fillStyle = this.Canvas.options.textColor;
    this.Canvas.ctx.font = fontSize + 'px Arial';
    this.Canvas.ctx.fillText(this.Canvas.options.maxValue, marginLeft, marginTopForTop);
    this.Canvas.ctx.fillText(
      Math.round(this.Canvas.options.minValue + (this.Canvas.options.maxValue - this.Canvas.options.minValue) / 2),
      marginLeft,
      marginTopForCenter
    );
    this.Canvas.ctx.fillText(this.Canvas.options.minValue, marginLeft, marginTopForBottom);
  }

  drawFrame() {
    this.Canvas.ctx.strokeStyle = this.Canvas.options.frameColor;
    this.Canvas.ctx.rect(
      1,
      1,
      this.Canvas.options.width - this.Canvas.settings.paddingRight,
      this.Canvas.options.height - this.Canvas.settings.paddingBottom
    );
    this.Canvas.ctx.stroke();
  }

  drawLegend() {
    let marginFromStage = 5;
    let marginLeft = 2;
    let fontSize = 10;
    let marginTop = this.Canvas.options.height - this.Canvas.settings.paddingBottom + marginFromStage + 2;

    this.Canvas.ctx.font = fontSize + 'px Arial';

    this.Canvas.options.legend.forEach((leg, key) => {
      this.Canvas.ctx.fillStyle = leg.color;
      this.Canvas.ctx.fillRect(marginLeft, marginTop, 12, 12);
      this.Canvas.ctx.fillStyle = this.Canvas.options.textColor;
      let title = leg.title ? leg.title.toUpperCase() : ('value ' + (key + 1)).toUpperCase();
      this.Canvas.ctx.fillText(title, marginLeft + 15, marginTop + fontSize);
      marginLeft += 25 + this.Canvas.ctx.measureText(title).width;
    });
  }
}

export default Stage;
