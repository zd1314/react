import React, { Component } from 'react';
import * as d3 from 'd3';

import './d3Demo01.css'
class DoughnutChart extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div ref={'svgDom'} style={{
        width: 500,
        height: 500,
        position: 'ansolute',
        left: 300,
        top: 100
      }}></div>
    )
  }
  componentDidUpdate() {

  }
  componentDidMount() {
    let me = this;
    let w = 200, h = 100;
    let svg = d3.select(me.refs.svgDom).append("svg")
      .attr('width', 500)
      .attr("height", 500)
    /**矩形 */
    svg.append("rect")
      .attr("width", w)
      .attr("height", h)
      .attr('x', 20)
      .attr('y', 20)
      .style('fill', "aqua")
      .style("stroke", 'blue')
      .style("stroke-width", '4')
      .style("opacity", 0.5);
    /**椭圆 */
    svg.append("rect")
      .attr("width", w)
      .attr("height", h / 2)

      .attr('x', 20)
      .attr('y', 140)
      .attr("rx", 20)/**x方向上的半径 */
      .attr("ry", 30)/**y方向上的半径 */
      .style('fill', "yellow")
      .style("stroke", 'red')
      .style("stroke-width", '4')
      .style("opacity", 0.5);
    /**圆 */
    svg.append("circle")
      .attr("cx", 50)
      .attr("cy", 240)
      .attr("r", 30)
      .attr("id", "circle")
      .attr('fill', 'red')
      .style("stroke", "blue");
    /**椭圆 */
    svg.append("ellipse")
      .attr("cx", 150)
      .attr("cy", 240)
      .attr("rx", 50)
      .attr("ry", 30)
      .attr('fill', 'yellow')
      .style("stroke", "blue")
    /**线段 */
    svg.append("line")
      .attr("x1", 30)
      .attr("y1", 50)
      .attr("x2", 100)
      .attr("y2", 150)
      .style('stroke', 'pink')
      .style("stroke-width", 5)
    /**path */
    svg.append("path")
      .attr("d", 'M30,100 L80,120 M30,100 H150 M30,100 V150')
      // .attr("d", 'M30, 100C100,120,130,150,180,100S400,100 450,100')
      .style("stroke", "blue")
      .style("stroke-width", 5)
    /**文字 */
    svg.append("text")
      .attr("x", 100)
      .attr("y", 150)
      .attr("dy", 5)
      .attr('rotate', 45)
      .attr("textLength", 100)
      .style("font-size", 16)
      .style("font-weight", 100)
      .text("我是D3文字");
    svg.append("ploygon")
      .attr('points', '20, 20, 100, 20, 100, 20, 30, 40')
      .style("fill", 'pink')
      .style("stroke", 'red')
      .style("stroke-width", 5)

  }
};
export default DoughnutChart;