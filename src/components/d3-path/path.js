import React from 'react';
import * as  d3 from 'd3'
class Path extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div ref={'path'}></div>
        )
    }
    componentDidMount() {
        let me = this;
        let width = 300;
        let height = 300;
        let svg = d3.select(me.refs.path).append('svg')
            .attr('width', width)
            .attr('height', height)
        let g = svg.append('g')
        let path1 = g.append('path').attr('d', 'M0 0 H50').attr('stroke', 'pink').attr('stroke-width', 10)
        let path2 = g.append('path').attr('d', 'M0 0 V50').attr('stroke', 'red').attr('stroke-width', 10)
        let path3 = g.append('path').attr('d', 'M0 0 L40 40').attr('stroke', 'yellow').attr('stroke-width', 10)
        let gg = svg.append('g').attr('transform', 'translate(100 40)')
        let path4 = gg.append('path').attr('d', 'M0 0 C40 40,60,40,100,0')
            .attr('stroke', 'aqua').attr('stroke-width', 5)
            .attr('fill', 'none')
        let g3 = svg.append('g').attr('transform', 'translate(0 140)')
        let path5 = g3.append('path').attr('d', 'M0 0 C40 40,60,40,100,0 S150 -40,200 10')
            .attr('stroke', 'red').attr('stroke-width', 5)
            .attr('fill', 'none')
        let g4 = svg.append('g').attr('transform', 'translate(20 200)')
        let path6 = g4.append('path').attr('d', 'M0 0 Q50 50,100 0 T200 0 ')
            .attr('stroke', 'black').attr('stroke-width', 5)
            .attr('fill', 'none')
        
    }
}
export default Path;