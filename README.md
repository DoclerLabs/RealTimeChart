#### Settings (private):
* paddingBottom - padding from bottom
* paddingRight - padding from right
* borderWidth - border width
* boxInnerPadding - space between border and the stage
* stageWidth - net stage width, that could be used for drawing charts
* stageHeight - net stage height
* oneXSegment - one x segments width on the stage
* oneYSegment - one y segment height
* valueDiff - difference between the maxValue and the minValue


#### Options (public):
* paddingBottom - extra padding from bottom
```js
paddingBottom: 20, //Number
```
* paddingRight - extra padding from right
```js
paddingRight: 20, //Number
```
* legend - legend containing colors, ids and titles
```js
legend: [{
  id: 1, //Custom identifier
  color: '#846f08',
  title: 'Gold',
},
{
  id: 2,
  color: '#2cabe3',
  title: 'Revenue',
}]
```
* showRuler - show the min max and the central value
```js
showRuler: true, //Boolean
```
* showFrame
```js
showFrame: true, //Boolean
```
* width - width of the canvas
```js
width: 300, //Number
```
* height - height of the canvas
```js
height: 300, //Number
```
* frameColor
```js
frameColor: '#ddd', //RGB(A), HEX
```
* textColor
```js
textColor: '#313131', //RGB(A), HEX
```
* minValue - minimum value of the incoming date
```js
minValue: 1, //Number
```
* maxValue - maximum value of the incoming data
```js
maxValue: 600, //Number
```
* totalElement - how many elements are going to be seen on the chart
```js
totalElement: 20, //Number
```
* type - type of the chart
```js
type: 'line|bar', //Line or Bar chart
```
* onHover - callback for for hover status on the chart, returning the data for the hovered element
```js
onHover: (data) => {}, //Function
```

* waitWindowLoad - wait settings to be configured only after window load happened
```js
waitWindowLoad: true, //Boolean
```

* isResponsive - should the canvas resize when window resize
```js
isResponsive: false, //Boolean
```

* calcMaxValue - calculate the maxValue according to the input, it will increase the input value with 10%
```js
calcMaxValue: false, //Boolean
```