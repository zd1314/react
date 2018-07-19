import React, { Component } from 'react';
import * as d3 from 'd3';

class Bubble extends Component {
  constructor(props) {
    super(props)
    let me = this;
    me.state = {}
  };
  _setData(d) {
    let me = this;
    me.setState({
      datas: d
    })
  };
  render() {
    let me = this;
    return (
      <div ref={'bubbleDom'}></div>
    )
  };
  _bubble() {
    let me = this;
    let w = me.props.width, h = me.props.height;
    let datas = [30, 30, 30]
    let color = ["pink", "red", "blue"]
    let outerRadius = w / 2, innerRadius = w / 3;
    let svg = d3.select(me.refs.bubbleDom)
      .append('svg')
      .attr("width", w)
      .attr("height", h)
    //绘制圆
    let circles = svg.selectAll("circles")
      .data(datas)
      .enter()
      .append("circle")
    circles.attr('cx', function (d, i) {
      return (i * 100) + 61
    })
      .attr('cy', h / 2)
      .attr("r", function (d) {
        return d
      })
      .attr("fill", function (d, i) {
        return color[i]
      })
      .attr("stroke", "#014496")
      .attr("stroke-width", function (d) {
        return d / 8
      })
      .attr("transform", 'translate(10,-85)')
  }
  componentDidUpdate() {

  };
  componentDidMount() {
    let me = this;
    me._bubble()
  }
}
export default Bubble;