import React, { Component } from 'react';
import echarts from 'echarts';
import './echarts-liquidfill'

class EchartsWaterPolo extends Component {
  constructor(props) {
    super(props);
    let me = this;
    me.state = {}
  };
  _setData(d) {
    this.flag = true;
    this.setState({
      data: d
    })
  };
  render() {
    return (
      <div ref={"WaterPolo"} style={{
        width: this.props.width,
        height: this.props.height
      }}></div>
    )
  }
  componentDidMount() {
    let me = this;
    me.myWaterPolo = echarts.init(me.refs.WaterPolo);
    me.option = {
      series: [
        {
          type: 'liquidFill',
          data: [0.3, 0.5],
          center: ['50%', '35%'],
          waveLength: '100%',
          waveAnimation: 'right',
          amplitude: 4,//控制波浪大小
          radius: '60%',
          label: {
            show: true,
            color: '#294D99',
            insideColor: '#fff',
            fontSize: 50,
            fontWeight: 'bold',
            align: 'center',
            baseline: 'middle',
            position: 'inside'
          },
          outline: {
            show: true,
            borderDistance: 4,
            itemStyle: {
              color: 'none',
              borderColor: '#294D99',
              borderWidth: 2,
              shadowBlur: 2,
              shadowColor: 'rgba(0, 0, 0, 0.25)'
            }
          },
          backgroundStyle: {
            color: 'aqua'
          }
        },
      ]
    }

    me.myWaterPolo.setOption(me.option)
  };
  componentDidUpdate() {
    let me = this;

  }
}
export default EchartsWaterPolo;