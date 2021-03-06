import React from 'react';
import * as  d3 from 'd3';
import './list.css'
class Echarts extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div ref='echarts' style={{
                position: 'absolute',
                left: 0,
                top: 0
            }}>
                <div className={'listPath'} style={{
                }} ref='circle'></div>
                <div className={'pathcircle'}></div>
            </div>
        )
    }
    componentDidMount() {
        const me = this;
        let w = 20, h = 40;
        let data = [1, 2, 3]
        me.svg = d3.select(me.refs.echarts).append('svg')
            .attr('width', 400)
            .attr('height', 400)
        let g = me.svg.append('g')
            .attr('transform', 'translate(-50, 22)')
        //绘制柱状图
        g.append('path')
            .attr('d', `M100 ${100 - h} l${w} ${-w} l ${-w} ${-w} l ${-w} ${w} z`)
            .attr('stroke', '#1ea0d8')
            .attr('stroke-width', 2)
            .attr('fill', 'red')
            .attr('shape-rendering', 'crispedges')

        g.append('path')
            .attr('d', `M100 100 l 0 ${-h} l ${w} ${-w} l 0 ${h} l ${-w} ${w} l ${-w} ${-w} l 0 ${-h} l ${w} ${w} z`)
            .attr('stroke', '#1ea0d8')
            .attr('stroke-width', 2)
            .attr('fill', 'red')
            .attr('shape-rendering', 'crispedges')
        //文字path
        let radiusG = me.svg.append('g').attr('transform', 'translate(60,-20)');
        radiusG.append('path')
            .attr('d', 'M95 80 A35 35, 0, 1, 0, 95 95 L115 80 Z')
            .attr('id', 'tpath')
            .attr('fill', 'green')
        radiusG.append('text')
            .append('textPath')
            .attr('xlink:href', '#tpath')
            .text('文字沿着path路径进行有规律的运转的小球')
            .attr('fill', '#fff')
            .attr('x', 30)
            .attr('y', 30)
            .attr('font-size', 12)
        //不规则图形
        let pictureG = me.svg.append('g')
            .attr('transform', 'translate(100,34)')
        pictureG.append('path')
            .attr('d', 'M80 80 l20 -20 l 20 20 a10 10 0 1 0 20 -20 l20 -20 l20 20 a10 10 0 1 0 20 -20 l-20 -20 l20 -20 l-20 -20')
            .attr('stroke-width', 4)
            .attr('stroke', 'yellow')
            .attr('id', 'picturePath')
        pictureG.append('text')
            .append('textPath')
            .attr('xlink:href', '#picturePath')
            .text('0123456789010111213141516171819202122')
            .attr('font-size', 12)
            .attr('fill', '#fff')
        // //水滴
        // let warterG = me.svg.append('g')
        //     .attr('transform', 'translate(250,40)')
        //     .append('path')
        //     .attr('d', 'M80 80 l40 -60 v60 ')
        //     .attr('stroke-width', 1)
        //     .attr('stroke', 'blue')

    }
}
export default Echarts;