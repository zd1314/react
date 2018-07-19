import React, { Component } from 'react';
import * as d3 from 'd3';
import bgs from './img/icon.png';
class Pointer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [0, 20, 40, 60, 80, 100]
    }
  };
  render() {
    return (
      <div ref={'pointer'}>
        <span style={{
          width: 124,
          height: 70,
          position: 'absolute',
          left: 210,
          top: 113,
          background: `url(${bgs})`,
          backgroundSize: '100% 100%',
        }}  >
          <b style={{
            position: 'absolute',
            left: 21,
            top: 25,
            fontSize: 20
          }} ref={'con'}>890</b>
          <i style={{
            position: 'absolute',
            left: 48,
            top: 27,
            fontSize: 16
          }}>%</i>
        </span>
      </div>
    )
  };
  _cerateArc(r, R, start, end) {
    let me = this;
    let arc = d3.arc()
      .innerRadius(r)
      .outerRadius(R)
      .startAngle(start)
      .endAngle(end)
    return arc();
  }
  componentDidUpdate() {
    let me = this;
    me.refs.con = me.state.data.map(s => {
      return s
    })
  };
  componentDidMount() {
    let me = this;
    let width = 500, height = 240
    let R = 90;
    let r = 0;
    me.per = 10;
    let M = Math.PI;
    let smallR = R + 5;
    let startAngle = M / 5;
    let scaleAngleFor = -M / 2;
    let scaleAngleTo = M / 2;


    let data = me.state.data.map((s, i) => {
      let start = scaleAngleFor + i * startAngle;
      let end = start + startAngle - 2 * Math.PI / 180;
      // let end = scaleAngleTo;
      let val = s;
      return {
        start,
        end,
        val
      }
    });
    let svg = d3.select(me.refs.pointer).append('svg')
      .attr('width', width)
      .attr('height', height)
    let linearGradient = svg.append("linearGradient")
      .attr("id", "linearColor")
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "0%")
      .attr("y2", "100%");
    let stop1 = linearGradient.append("stop")
      .attr("offset", "0%")
      .style("stop-color", '#4db9f5');
    let stop2 = linearGradient.append("stop")
      .attr("offset", "100%")
      .style("stop-color", '#257cd7');
    let gText = svg.selectAll('g')
      .data(data)
      .enter()
    let gg = gText.append('g')
      .attr('class', 'fl')
      .attr("transform", `translate(${width / 2},${height / 2})`)
    gg.append('path')
      .attr('d', function (d, i) { return me._cerateArc(r, R, -M / 2, M / 2) })
      .attr('fill', function () {
        return "url(#" + linearGradient.attr("id") + ")";
      })
    gg.append('path')
      .attr('d', function (d, i) {
        if (i > 5) { return }
        let path = me._cerateArc(smallR - 2, smallR, d.start, d.end - Math.PI / 90);
        return path;
      })
    // .attr('fill', 'yellow')
    gg.append("text")
      .attr('dy', function (d, i) {
        if (i == 0) { return 3 }
        if (i == 1) { return 15 }
        if (i == 2) { return 15 }
        if (i == 3) { return 13 }
        if (i == 4) { return 14 }
        if (i == 5) { return 0 }
      })
      .attr('dx', function (d, i) {
        if (i == 0) {
          return -9
        }
        if (i == 1) { return -18 }
        if (i == 2) { return -26 }
        if (i == 3) { return 4 }
        if (i == 4) { return -8 }
        if (i == 5) { return -11 }
      })
      .attr('fill', '#575c63')
      .attr('font-size', 12)
      .attr('x', function (d, i) {
        return (smallR + 10) * Math.sin(d.start)
      })
      .attr('y', function (d, i) {
        return -(smallR + 10) * Math.cos(d.start)
      })
      .text(function (d, i) {
        return d.val + '%'
      });
  }
}
export default Pointer;