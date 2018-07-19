import React, { Component } from 'react';
import echarts from 'echarts';
import bg from './img/icon1.png';
import bg1 from './img/icon2.png';
import bg2 from './img/icon3.png';
import bg3 from './img/icon4.png';
const data = [
  { name: '厕所1', value: 80 },
  { name: '厕所2', value: 50 },
  { name: '厕所3', value: 40 },
  { name: '厕所4', value: 30 }
]
class Pie extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  };
  componentDidMount() {
    let me = this;
    me.pie = echarts.init(me.refs.pie);
    me.placeHolderStyle = {
      normal: {
        color: "rgba(0,0,0,0)",
        borderWidth: 0
      },
    };
    me.option = {
      tooltip: {
        trigger: 'item',
        formatter: "{a}:<br/>{b}(起)",
      },
      legend: {
        type: 'scroll',
        orient: 'vertical',
        right: '3%',
        top: '5%',
        itemWidth: 15,
        itemHeight: 15,
        itemGap: 5,
        textStyle: {
          color: '#999'
        },
        data: []
      },
      series: [],
    };
    let color = ['#0282fc', '#11cbf6', '#04f28d', '#ffec2c']
    let bgs = undefined;
    data.map((s, i) => {
      switch (i) {
        case 0: bgs = bg; break;
        case 1: bgs = bg1; break;
        case 2: bgs = bg2; break;
        case 3: bgs = bg3; break;
      }
      me.option.series.push({
        name: s.name,
        type: 'pie',
        clockWise: false,
        radius: [(70 - i * 10) + '%', (70 - i * 10) + '%'],
        hoverAnimation: false,
        itemStyle: {
          normal: {
            label: {
              show: false,
              textStyle: {
                fontSize: 24
              }
            },
            labelLine: {
              show: false
            },
            borderWidth: 5,
            shadowBlur: 40,
            borderColor: color[i],
            shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
          }
        },
        data: [{
          value: s.value / 100,
          name: '27%'
        }, {
          value: 1 - s.value / 100,
          name: '',
          itemStyle: me.placeHolderStyle
        }]
      })
      me.option.legend.data.push({
        name: s.name,
        icon: 'image://' + bgs
      })
    })
    me.pie.setOption(me.option)
  }
  render() {
    return (
      <div ref='pie' style={{
        width: 300,
        height: 300
      }}></div>
    )
  }
}

export default Pie;