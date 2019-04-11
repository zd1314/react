import React from 'react';
import * as d3 from 'd3';
import './svgPop.css';
class SvgPop extends React.Component {
    constructor(props) {
        super(props);
        this.svgdom = React.createRef();
    }
    render() {
        return (
            <div ref={this.svgdom}></div>
        )
    }
    componentDidMount() {
        const me = this;
        let dom = this.svgdom.current;
        let r = 25;
        let w = 450, h = 165;
        let data = [1, 2, 3, 4, 5];
        let color = ['red', 'pink', 'orange', 'blue', 'aqua']
        let svg = d3.select(dom).append('svg')
            .attr('width', w)
            .attr('height', h)
        let gGroup = svg.selectAll('g').data(data).enter().append('g')
            .attr('transform', function (d, i) {
                return `translate(${94 * i},20)`
            })
            .append('circle')
            .attr('class', 'ctx')
            .attr('r', r)
            .attr('cx', 40)
            .attr('cy', 40)
            .attr('stroke-width', 3)
            .attr('stroke', function (d, i) {
                return color[i]
            })
    }
}
export default SvgPop;