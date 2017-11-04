## RealTimeChart
High performant chart rendering on canvas.
##### Fetures:
* Meant to be fast, reduced CPU and memory usage
* Rendering real time data
* Responsive
* Currently supports line and barchart
* Hover callback

![BarChart](https://i.imgur.com/i3zpHYp.png)
![LineChart](https://i.imgur.com/tVjEmWe.png)

### Example code
##### Instance
```js
const rtChart = new RealTimeChart(document.getElementById('canvas'));
```

##### Set options
```js
rtChart.setOptions(optionsObject);
```

##### Feed the instance with data
```js
rtChart.addChartData(10);
```
```js
rtChart.addChartData([10, 20, 30]);
```
```js
rtChart.addChartData({id: 'uniqId', value: 10});
```
```js
rtChart.addChartData([{id: 'uniqId1', value: 10}, {id: 'uniqId2', value: 20}, {id: 'uniqId3', value: 30}]);
```

##### Render

```js
rtChart.render();
```

##### Destroy

```js
rtChart.destroy();
```

##### Recalculate bounds

```js
rtChart.recalculateBounds();
```

##### Options (public):
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

* calcMaxValue - calculate the max value according to the input, new max value is increased by 10%. (newMaxValue = inputValue + inputValue * 0.1)
```js
calcMaxValue: false, //Boolean
```

More examples are in the examples folder.

### Build
```bash
npm run build
```

### Prettier src
```bash
npm run prettier
```

### Missing
* tests
* other type of charts
* more examples
* commenting the code

### Contact
- Gabriel Mičko on [Twitter](https://twitter.com/gabriel_micko), [GitHub](https://github.com/gabrielmicko)

### Version
1.4.0
