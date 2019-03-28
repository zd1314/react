import React from 'react';
import * as  d3 from 'd3'
class Echarts extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div ref='echarts'></div>
        )
    }
    componentDidMount() {
        const me = this;
        let w = 30, h = 60;
        me.svg = d3.select(me.refs.echarts).append('svg')
            .attr('width', 300)
            .attr('height', 300)
        let g = me.svg.append('g')
            .attr('transform', 'translate(150, 100)')
        //绘制顶面
        g.append('path')
            .attr('d', 'M100 60 l20 -20 l-20 -20 l-20 20z')
            .attr('d', `M100 ${100 - h} l${w} ${-w} l ${-w} ${-w} l ${-w} ${w} z`)
            .attr('stroke', '#1ea0d8')
            .attr('stroke-width', 2)
            .attr('fill', '#2f71b5')
            .attr('shape-rendering', 'crispedges')
        g.append('path')
            .attr('d', `M100 100 l 0 ${-h} l ${w} ${-w} l 0 ${h} l ${-w} ${w} l ${-w} ${-w} l 0 ${-h} l ${w} ${w} z`)
            .attr('stroke', '#1ea0d8')
            .attr('stroke-width', 2)
            .attr('fill', '#2f71b5')
            .attr('shape-rendering', 'crispedges')
    }
}
export default Echarts;