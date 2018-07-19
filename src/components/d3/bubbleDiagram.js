import React, { Component } from 'react';
import * as d3 from 'd3';

class BubbleDiagram extends Component {
  constructor(props) {
    super(props)
  };
  render() {
    return (
      <div>
        <div className={'points'}></div>
        <div ref={'clockPie'} style={{
          position: 'absolute',
          left: -40,
          top: -3
        }}></div>
      </div>
    )
  };
  _draw(r, R, start, end) {
    let arc = d3.arc()
      .innerRadius(r)
      .outerRadius(R)
      .startAngle(start)
      .endAngle(end)
    return arc();
  }
  componentDidMount() {
    let me = this;
    let width = 300, height = 300;
    let R = 90;
    let r = R - 20;
    let smallR = R + 10;
    let startAngle = Math.PI / 6;
    let scaleAngleFor = -Math.PI + startAngle;
    let scaleAngleTo = Math.PI - startAngle;
    let color = [
      'rgba(255,252,0,1)', 'rgba(255,252,0,1)', 'rgba(0,240,253,1)', 'rgba(0,240,253,1)',
      'rgba(0,240,253,1)', 'rgba(0,240,253,1)', 'rgba(0,240,253,1)',
      'rgba(0,240,253,1)', 'rgba(16,255,143,1)', 'rgba(16,255,143,1)'
    ]
    let data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((s, i) => {
      let start = scaleAngleFor + i * startAngle;
      let end = start + startAngle - 2 * Math.PI / 180;
      return {
        start,
        end
      }
    });
    let svg = d3.select(me.refs.clockPie).append('svg')
      .attr('width', width)
      .attr('height', height)
    let g = svg.selectAll("g")
      .data(data)
      .enter()
      .append('g')
      .attr("transform", `translate(${width / 2},${height / 2})`)

    g.append('path')
      .attr('d', function (d, i) {
        if (i > 9) return
        return me._draw(r, R, d.start, d.end)
      })
      .attr('fill', function (d, i) {
        return color[i]
      });
    g.append("path")/*最外层的线*/
      .attr('d', function (d, i) {

        if (i > 9) { return }
        let path = me._draw(smallR - 2, smallR, d.start, d.end + Math.PI / 90)
        if (i == 0) {
          path = me._draw(smallR - 2, smallR, d.start - Math.PI / 180, d.end + Math.PI / 180)
        }
        if (i == 9) {
          path = me._draw(smallR - 2, smallR, d.start, d.end + Math.PI / 180)
        }
        return path;
      })
      .attr('fill', 'red');
    g.append("line")
      .attr('x1', function (d, i) {
        return (smallR - 8) * Math.sin(d.start - Math.PI / 180)
      })
      .attr('y1', function (d, i) {
        return -(smallR - 8) * Math.cos(d.start - Math.PI / 180)
      })
      .attr('x2', function (d, i) {
        return (smallR + 2) * Math.sin(d.start - Math.PI / 180)
      })
      .attr('y2', function (d, i) {
        return -(smallR + 2) * Math.cos(d.start - Math.PI / 180)
      })
      .attr('stroke-width', '2')
      .attr('stroke', '#fff');
    g.append('text')
      .attr('dy', function (d, i) {
        if (i == 5) { return 0 }
        if (i < 4 || i == 10) { return 7 }
        return '3'
      })
      .attr('dx', function (d, i) {
        if (i == 0) { return '-5' }
        if (i == 5) { return '-7' }
        if (i < 5) { return '-7' }
      })
      .attr('fill', '#fff')
      .attr('font-size', 12)
      .attr('x', function (d, i) {
        return (smallR + 10) * Math.sin(d.start)
      })
      .attr('y', function (d, i) {
        return -(smallR + 10) * Math.cos(d.start)
      })
      .text(function (d, i) {
        return i
      });
  };
  componentDidUpdate() {

  };
  componentWillUnmount() {

  }
}
export default BubbleDiagram;