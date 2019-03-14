import React, { Component } from 'react';
import * as d3 from 'd3';

class ProgressBar extends Component {
  constructor(props) {
    super(props)
  };
  render() {
    return (
      <div ref={'processBar'}></div>
    )
  };
  _creatArc() {
    let me = this;
    let arcGenerator = d3.arc()
      .innerRadius(30)
      .outerRadius(50)
      .startAngle(0)
    let svgDom = d3.select(me.refs.processBar)
      .append("svg")
      .attr("width", 400)
      .attr("height", 400)
      .append("g")
      .attr("transform", "translate(60,65)")
    svgDom.append('path')/**第一个path */
      .datum({ endAngle: 2 * Math.PI })
      .style("fill", "aqua")
      .attr("d", arcGenerator);
    let upperGround = svgDom.append('path')
      .datum({ endAngle: Math.PI / 2 })
      .style('fill', '#FFC125')
      .attr('d', arcGenerator)
    /**文字 */
    svgDom.append('text')
      .text(12)
      .attr('fill', 'red')
      .attr('text-anchor', 'middle')/**水平居中 */
      .attr('dominant-baseline', 'middle')/**垂直居中 */
      .attr('font-size', '24px')
    let colorLinear = d3.scaleLinear().domain([0, 100]).range(["yellow", "blue"]);
    // d3.interval(function () {
    //   upperGround.transition().duration(750).attrTween('d', function (d) {
    //     let compute = d3.interpolate(d.endAngle, Math.random() * Math.PI * 2);
    //     return function (t) {
    //       d.endAngle = compute(t);
    //       let data = d.endAngle / Math.PI / 2 * 100;
    //       //设置数值
    //       svgDom.select('text').text(data.toFixed(0) + '%');
    //       //将新参数传入，生成新的圆弧构造器
    //       return arcGenerator(d);
    //     }
    //   })
    //     .styleTween('fill', function (d) {
    //       return function (t) {
    //         let data = d.endAngle / Math.PI / 2 * 100;
    //         //返回数值对应的色值
    //         return colorLinear(data);
    //       }
    //     })
    // }, 3000)
  }
  componentDidUpdate() {
  };
  componentDidMount() {
    let me = this;
    me._creatArc()
  }
}
export default ProgressBar;