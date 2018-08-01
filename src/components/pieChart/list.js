import React, { Component } from 'react';
import * as d3 from 'd3';

const middle = [1];
class PieCircle extends Component {
  constructor(props) {
    super(props);
    let me = this;
    me.flag = false;
    me.state = {};
    me.pie = d3.pie()
  }
  setData(d) {
    let me = this;
    me.flag = true;
    me.setState({
      data: d
    })
  }

  render() {
    if (this.flag) {
      let total = this.state.data.total;
      return (
        <div style={this.props.style}>
          <div ref={'box'} style={{
            float: 'left',
            width: '2.4rem',
            height: '2.4rem'
          }}>
          </div>
        </div>
      )
    } else {
      return null
    }
  }
  componentDidUpdate() {
    let me = this;
    let width = 480;
    let height = 480;
    if (me.flag) {
      let value = me.state.data.val;//占比
      let names = me.state.data.name//名字

      let svg = d3.select(me.refs.box)
        .append('svg')
        .attr('class', 'm_svg')
        .attr('width', width)
        .attr('height', height);
      me._global = svg.append('g')
        .attr('transform', `translate(${width / 4},${height / 4})`)

      me._global2 = svg.append('g')
        .attr('transform', `translate(${width / 4},${height / 4})`);

      me.maxRadius = Math.min(width, height) / 4;//半径
      me.endAngle = -(3 / 2 * Math.PI);//270
      me.startAngle = 0;
      //定义每一个结束角度
      // me.end1 = me.endAngle * (value[0] / 100)
      // me.end2 = me.endAngle * (value[1] / 100)
      // me.end3 = me.endAngle * (value[2] / 100)
      //文字
      me._createTextName(`${value[0]}%`, 40, -100);
      me._createTextName(`${value[1]}%`, 40, -80);
      me._createTextName(`${value[2]}%`, 40, -60);

      me._list(value, 0.95, 0.9, 'red')
      // me._createAll(me.startAngle, me.endAngle, '#214478', 0.95, 0.9);
      // me._createHalf(me.startAngle, me.end1, '#018cfa', 0.95, 0.9);

      // me._createAll(me.startAngle, me.endAngle, '#214478', 0.8, 0.88);
      // me._createHalf(me.startAngle, me.end2, '#04f38d', 0.8, 0.88);

      // me._createAll(me.startAngle, me.endAngle, '#214478', 0.65, 0.85);
      // me._createHalf(me.startAngle, me.end3, '#ffef2f', 0.65, 0.85);

      me.flag = false;
    }
  }
  _list(data, l, t, color) {
    let me = this;
    return
    data.map(s => {
      return me._createAll(me.startAngle, me.endAngle, '#214478', 0.65, 0.85)
      me._createHalf(me.startAngle, me.endAngle * (s / 100), '#ffef2f', 0.65, 0.85)
    })
  }
  //弧生成器
  _arc(r, R, start, end, pad) {
    let me = this;
    me.arc = d3.arc()
      .innerRadius(r)
      .outerRadius(R)
      .cornerRadius([30])
      .startAngle(start)
      .endAngle(end)
      .padAngle(pad);
    return me.arc()
  }
  // 创建名字
  _createTextName(html, left, top) {
    let me = this;
    me._global2.append('text')
      .text(html)
      .attr('x', left)
      .attr('y', top)
      .attr('fill', '#fff')
      .style('font-size', 18);
  }

  //绘制从0--270的path
  _createAll(startAngle, endAngle, color, ins, out) {
    let me = this;
    let outRadius = me.maxRadius * ins;
    let inRadius = outRadius * out;
    let padAngle = 0.04;

    me._global.selectAll('.bgArc')
      .data(me.pie(middle))
      .enter()
      .append('path')
      .attr('fill', 'transparent')
      .transition()
      .duration(500)
      .attr('d', function (d) {
        return me._arc(inRadius, outRadius, startAngle, endAngle, padAngle)
      })
      .attr('fill', color);
  }
  //通过数据进行绘制path
  _createHalf(startAngle, endAngle, color, ins, out) {
    let me = this;
    let outRadius = me.maxRadius * ins;
    let inRadius = outRadius * out;
    let padAngle = 0.04;
    me._global.selectAll('.bgArc')
      .data(me.pie(middle))
      .enter()
      .append('path')
      .attr('fill', 'transparent')
      .transition()
      .duration(500)
      .attrTween('d', function (d) {
        return function (t) {
          return me._arc(inRadius, outRadius, startAngle, function () {
            return endAngle * t
          }, padAngle)
        }
      })
      .attr('fill', color);
  }
}

export default PieCircle;
