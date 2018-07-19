import React from 'react';
import * as d3 from 'd3';
class Bar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div ref={'svg'}></div>
    )
  }
  componentDidMount() {
    let me = this;
    let data = [2, 4, 5, 6, 7]
    let width = 300,
      height = 300
    let svg = d3.select(me.refs.svg).append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('transform', 'translate(100,100)')
    let Scale = d3.scaleLinear()
      .domain([0, 10])
      .range([0, 300])
    let axis = d3.axisTop()
  }
}
export default Bar;