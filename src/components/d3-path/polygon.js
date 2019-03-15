import React from 'react';
import * as d3 from 'd3';
import './polygon.css'
//构造函数
class Polgons {
    constructor(w, h) {
        this.width = w;
        this.height = h;
        let svg = d3.select(document.getElementById('point')).append('svg')
            .attr('width', this.width)
            .attr('height', this.height)
        svg.append('g').attr('transform', 'translate(50,30)')
        .append('polygon')
            .attr('points', function () {
                return '50,2 20,90 95,30 5,30 80,90'
            })
            .attr('fill', 'red')
    }
}

class Polgon extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div ref='point' id='point' style={{
                position: 'absolute',
                left: 200,
                top: 70
            }}></div>
        )
    }
    componentDidMount() {
        const me = this;
        let aa = new Polgons(200, 200);
    }
    componentDidUpdate() {

    }
}
export default Polgon;
