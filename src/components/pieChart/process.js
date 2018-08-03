import React from 'react';
import * as d3 from 'd3';
class Process extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  _setData(d) {
    let me = this;
    me.flag = true;
    me.setState({
      data: d
    })
  }
  render() {
    return <div ref='chart'></div>
  }
  componentDidMount() {
  }
  componentDidUpdate() {
    let me = this;
    let w = 200, h = 200;
    let R = w / 2 - 20, r = 60;
    let percent = this.state.data;
    let ratio = percent / 100;
    let pie = d3.pie().value(function (d) { return d }).sort(null);
    //背景
    let arcAll = d3.arc()
      .innerRadius(r)
      .outerRadius(R)
      .startAngle(0)
      .endAngle(2 * Math.PI)
    //数据arc
    let arcHalf = d3.arc()
      .innerRadius(r)
      .outerRadius(R)
      .startAngle(0)

    let svg = d3.select(me.refs.chart).append('svg')
      .attr('width', w)
      .attr('height', h)
      .attr('transform', `translate(${w / 2} ${h / 2})`)
    let g = svg.append('g').attr('transform', `translate(${w / 2} ${h / 2})`)
    //大的背景图整个圆
    let bgAll = g.append('g').attr('class', 'all')
      .append('path')
      .attr('d', arcAll)
      .attr('fill', 'blue')
    //动态的path跟数据有关
    let bgHalf = g.append('g').attr('class', 'half')
      .append('path')
      .datum({ endAngle: 0 })
      .attr('d', arcHalf)
      .attr('fill', this.props.color)
    //添加文字
    let middleText = svg.append('text')
      .text(function (d) {
      })
      .attr('class', 'middleText')
      .attr('text-anchor', 'middle')
      .attr('dy', 130)
      .attr('dx', 88)
      .style('fill', '#fff')
      .style('font-size', 20)
    svg.append('text')
      .text('%')
      .attr('class', 'percent')
      .attr('text-anchor', 'middle')
      .attr('dy', 130)
      .attr('dx', 110)
      .style('fill', '#fff')
      .style('font-size', 14)
    svg.append('text')
      .text(this.props.text)
      .attr('text-anchor', 'middle')
      .attr('dy', 100)
      .attr('dx', 98)
      .style('fill', this.props.textColor)
      .style('font-size', 16)
    //动画
    let arcTween = function (turn, changeAngle) {
      turn.duration(2000).attrTween("d", function (d) {
        let interpolate = d3.interpolate(d.endAngle, -changeAngle);
        let interpolateCount = d3.interpolate(0, percent);
        return function (t) {
          d.endAngle = interpolate(t);
          middleText.text(Math.floor(interpolateCount(t)));
          return arcHalf(d);
        };
      });
    };
    let animate = function () {
      bgHalf.transition()
        .duration(750)
        .call(arcTween, ((2 * Math.PI)) * ratio);
    };
    setTimeout(animate, 100);

  }
}
export default Process;