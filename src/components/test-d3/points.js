import React from 'react';
import * as d3 from 'd3'

class Point extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <div ref='svgR' style={this.props.styles}></div>
  }
  _creatArc(r, R, start, end) {
    let me = this;
    me.arc = d3.arc()
      .innerRadius(r)
      .outerRadius(R)
      .startAngle(start)
      .endAngle(end)
    return me.arc()
  }
  _draw() {
    let me = this;
    let w = 200, h = 200;
    let r = 65, R = 75;
    let pie = d3.pie().value(function (d) { return d }).sort(null);
    let data = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    let color = ['#009933', '#00FF33', '#990033', '#999900', '#FF0033', '#CC0099', '#003399', '#33CCCC', '#6633FF', '#CC6633', 'red']
    let minAngle = Math.PI / 8;
    let start = -2 * Math.PI / 3;
    let end = 2 * Math.PI / 3;
    let svg = d3.select(me.refs.svgR).append('svg')
      .attr('width', w)
      .attr('height', h)
      .attr('transform', `translate(${w / 2} ${h / 10})`)
    //渐变
    let defs = svg.append('defs')
    let linearGradient = defs.append('linearGradient')
      .attr('id', 'linearGradient')
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "100%")
      .attr("y2", "0%");
    let stop1 = linearGradient.append('stop')
      .attr('offset', '0%')
      .style('stop-color', 'red')
    let stop2 = linearGradient.append('stop')
      .attr('offset', '100%')
      .style('stop-color', 'pink')
    let g = svg.append('g').attr('transform', `translate(${w / 2} ${h / 2})`)
    let gInner = g.append('g').attr('class', 'gInner')
      .attr('transform', 'rotate(-124)')
      .selectAll('path')
      .data(pie(data))
      .enter()
      .append('path')
      .attr('d', function (d, i) {
        return me._creatArc(r, R, i * minAngle, minAngle * (i + 1))
      })
      .attr('fill', "url(#" + linearGradient.attr("id") + ")")
    let gPart = g.append('g').attr('class', 'gInner')
      .attr('transform', 'rotate(-124)')
      .selectAll('path')
      .data(pie(data))
      .enter()
      .append('path')
      .attr('d', function (d, i) {
        return me._creatArc(r, R, minAngle, 0)
      })
      .attr('fill', 'red')
    let currentAngle = minAngle
    let arcTween = function (turn, changeAngle) {
      turn.duration(1000).attrTween("d", function (d) {
        let interpolate = d3.interpolate(d.endAngle, changeAngle);
        return function (t) {
          d.endAngle = interpolate(t);
          return me._creatArc(r, R, currentAngle * d.index, 0);
        };
      });
    };
    let animate = function () {
      gPart.transition()
        .duration(750)
        .call(arcTween, currentAngle);
    };
    setTimeout(animate, 100);
  }
  componentDidMount() {
    let me = this;
    me._draw()
  }
}
export default Point;