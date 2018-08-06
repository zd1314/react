import React from 'react';
import * as d3 from 'd3';
class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    _setData(d) {
        this.setState({
            data: d
        })
    }
    render() {
        return <div style={this.props.dashboard} ref={'svgDiv'}></div>
    }
    componentDidMount() {
        let me = this;
        let w = 200, h = 200;
        let r = 60, R = 70;
        let smallR = r + 10;
        let percent = 30;
        let ratio = 100 - percent;
        let arcMin = -Math.PI * 2 / 3;
        let arcMax = Math.PI * 2 / 3;//圆弧的起始角度和终止角度
        let pie = d3.pie().value(function(d) { return d }).sort(null);
        let arc = d3.arc()
            .innerRadius(r)
            .outerRadius(R)
            .startAngle(arcMin)
        let svg = d3.select(me.refs.svgDiv).append('svg')
            .attr('width', w)
            .attr('height', h)
            .attr('transform', `translate(${w / 2} ${h / 2})`);

        let g = svg.append('g').attr('transform', `translate(${w / 2} ${h / 2})`);
        let gWhole = g.append('g')
            .attr('class', 'whole')
            .append('path')
            .datum({ endAngle: arcMax })
            .attr('d', arc)
            .attr('fill', 'blue')
            .attr('transform', 'rotate(1)');
        let currentAngle = 50 / 100 * (arcMax - arcMin) + arcMin; //结束角度
        let gPart = g.append('g')
            .attr('class', 'part')
            .append('path')
            .datum({ endAngle: arcMin })
            .attr('d', arc)
            .attr('fill', 'pink')
            .attr('transform', 'rotate(1)');

        let arcTween = function(turn, changeAngle) {
            turn.duration(1000).attrTween("d", function(d) {
                let interpolate = d3.interpolate(d.endAngle, changeAngle);
                return function(t) {
                    d.endAngle = interpolate(t);
                    return arc(d);
                };
            });
        };
        let animate = function() {
            gPart.transition()
                .duration(750)
                .call(arcTween, currentAngle);
        };
        setTimeout(animate, 100);
    }
    componentDidUpdate() {
        let me = this;
    }
}
export default Dashboard;
