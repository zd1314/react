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
    const me = this;
    let w = 200, h = 200;
    me.svg = d3.select(me.refs.chart).append('svg')
      .attr('width', w)
      .attr('height', h)
      .attr('transform', `translate(${w / 2} ${h / 2})`);
  }
  componentDidUpdate() {
    let me = this;
    let w = 200, h = 200;
    let R = w / 2 - 50, r = 40;
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


    //渐变
    let defs = me.svg.append('defs')
    let linearGradient = defs.append('linearGradient')
      .attr('id', this.props.id || 'linearGradient')
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "100%")
      .attr("y2", "0%");
    let stop1 = linearGradient.append('stop')
      .attr('offset', '0%')
      .style('stop-color', this.props.startColor)
    let stop2 = linearGradient.append('stop')
      .attr('offset', '100%')
      .style('stop-color', this.props.endColor)

    //gggg
    let g = me.svg.append('g').attr('transform', `translate(${w / 2} ${h / 2})`)
    //大的背景图整个圆
    let bgAll = g.append('g').attr('class', 'all')
      .append('path')
      .attr('d', arcAll)
      .attr('fill', '#6600CC')
    //动态的path跟数据有关
    let bgHalf = g.append('g').attr('class', 'half')
      .append('path')
      .datum({ endAngle: 0 })
      .attr('d', arcHalf)
      .attr('fill', "url(#" + linearGradient.attr("id") + ")")
    //添加文字
    let middleText = me.svg.append('text')
      .text(function (d) {
      })
      .attr('class', 'middleText')
      .attr('text-anchor', 'middle')
      .attr('dy', 120)
      .attr('dx', 88)
      .style('fill', '#fff')
      .style('font-size', 16)
    me.svg.append('text')
      .text('%')
      .attr('class', 'percent')
      .attr('text-anchor', 'middle')
      .attr('dy', 120)
      .attr('dx', 110)
      .style('fill', '#fff')
      .style('font-size', 14)
    me.svg.append('text')
      .text(this.props.text)
      .attr('text-anchor', 'middle')
      .attr('dy', 100)
      .attr('dx', 98)
      .style('fill', this.props.textColor)
      .style('font-size', 14)
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