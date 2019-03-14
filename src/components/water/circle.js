import React,{Component} from 'react';
import {arc, pie, select,selectAll} from 'd3';
const middle = [1];

/**
圆形进度条
 */
class Circle extends Component {
  constructor(props){
    super(props);
    let me = this;
    me.state = {
      data: ''
    };
    me.flag = false;
    me.pie = pie();
    me.arc = arc();
  }
  render(){
    return(
      <div ref={'box'} style={this.props.style}></div>
    )
  }
  setData(d){
    this.flag = true;
    this.setState({
      data : d
    })
  }
  componentDidMount(){
    let me = this;
    me.width = parseFloat(me.props.style.width) * 100;
    me.height = parseFloat(me.props.style.height) * 100;

    let svg = select(me.refs.box)
      .append('svg')
      .attr('width', me.width)
      .attr('height', me.height);
    me._global = svg.append('g')
      .attr('transform', `translate(${me.width / 2 },${me.height / 2})`);
  }
  componentDidUpdate(){
    let me = this;

    if(me.flag){
      let value = parseFloat(me.state.data.value) || 40;
      let color = me.state.data.color || '#5ae8e4'
      me.maxRadius = Math.min(me.width, me.height) / 2;
      me.endAngle = Math.PI * 2;
      me.startAngle = 0;
      me.end = Math.PI * 2 * (value / 100);
      me._createBackgroundArc(me.startAngle,me.endAngle,'#084474');
      me._createBackgroundArcs(me.startAngle,me.end,color);
      me.flag = false;
    }
  }

  _createBackgroundArc(startAngle,endAngle,color){
    let me = this;
    let outRadius = me.maxRadius * 0.95;
    let inRadius = outRadius * 0.75;
    let padAngle = 0.04;
    me.arc.innerRadius(inRadius);
    me.arc.outerRadius(outRadius);
    me.arc.padAngle(padAngle);
    me.arc.cornerRadius([30]);
    me.arc.startAngle(startAngle);
    me.arc.endAngle(endAngle);

    me._global.selectAll('.bgArc')
      .data(me.pie(middle))
      .enter()
      .append('path')
      .attr('fill', 'transparent')
      .transition()
      .attr('d', function (d) {
        return me.arc(d);
      })
      .attr('fill', color);
  }

  _createBackgroundArcs(startAngle,endAngle,color){
    let me = this;
    let outRadius = me.maxRadius * 0.95;
    let inRadius = outRadius * 0.75;
    let padAngle = 0.04;

    me.arc.innerRadius(inRadius);
    me.arc.outerRadius(outRadius);
    me.arc.padAngle(padAngle);
    me.arc.cornerRadius([30]);

    me._global.selectAll('.bgArc')
      .data(me.pie(middle))
      .enter()
      .append('path')
      .attr('fill', 'transparent')
      .transition()
      .duration(1000)
      .attrTween('d',function(d){
        return function(t){
          let arc = me.arc
            .innerRadius(inRadius)
            .outerRadius(outRadius)
            .padAngle(padAngle)
            .startAngle(startAngle)
            .endAngle(function () {
              return endAngle * t
            });
          return arc(d);
        }
      })
      .attr('fill', color);
  }
  componentWillUnmount() {
    select('svg').remove();
  }

}

export default Circle;
