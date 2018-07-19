import React, { Component } from 'react';
import * as d3 from 'd3';

class Doughnut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: '行政', value: 50 },
        { name: '人事', value: 70 },
        { name: '出纳', value: 90 },
        { name: '会计', value: 110 },
      ]
    }
  };
  render() {
    return (
      <div ref={'doughnutDom'} style={{
        position: 'absolute',
        left: 10,
        top: 0
      }} ></div>
    )
  };
  _creatArc() {
    let me = this;
    let width = 300, height = 300;
    let innerRadius = 30, outerRadius = 50;
    let dataset = [40, 10, 20, 30];
    let color = ['aqua', 'pink', 'yellow', 'blue']
    let svg = d3.select(me.refs.doughnutDom)
      .append("svg")
      .attr("width", width)
      .attr("height", height);
    let pie = d3.pie()
    let arrData = pie(dataset)
    let arc = d3.arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
    let arcs = svg.selectAll("g")
      .data(arrData)
      .enter()
      .append("g")
      .attr("transform", "translate(" + (width / 3) + "," + (height / 3) + ")");
    arcs.append("path")
      .attr("fill", function (d, i) {
        return color[i];
      })
      .attr("d", function (d) {
        return arc(d);
      });
    arcs.append("text")
      .attr("transform", function (d, i) {
        return "translate(" + arc.centroid(d) + ")";
      })
      .attr("text-anchor", "middle")
      .text(function (d) {
        return d.data + '%';
      });
  }
  componentDidUpdate() {

  }
  componentDidMount() {
    let me = this;
    me._creatArc()
  }
}
export default Doughnut;