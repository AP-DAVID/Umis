import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;
 
class Chart extends Component {
	addSymbols(e){
		var suffixes = ["", "K", "M", "B"];
		var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
		if(order > suffixes.length - 1)
			order = suffixes.length - 1;
		var suffix = suffixes[order];
		return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
	}
	render() {
		const options = {
			animationEnabled: true,
			theme: "light1",
			// title:{
			// 	text: "Students by class quantity"
			// },
			axisX: {
				title: "Classes",
				reversed: false,
               
			},
			axisY: {
				title: "Number of Students",
				labelFormatter: this.addSymbols,
                

			},
			data: [{
				type: "bar",
				dataPoints: [
					{ y:  40, label: "JSS1" },
					{ y:  60, label: "JSS2" },
					{ y:  20, label: "JSS3" },
					{ y:  70, label: "SSS1" },
					{ y:  90, label: "SSS2" },
					{ y:  50, label: "SSS3" },  
				]
			}]
		}
		
		return (
		<div className="">
			
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default Chart;