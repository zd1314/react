import React, { Component } from 'react';
import echarts from 'echarts';

class InstrumentPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { value: 50, name: '完成率' }
      ]
    }
  };
  render() {
    return (
      <div ref={'instrument'} style={{
        width: 280,
        height: 280,
        position: 'absolute',
        left: -47,
        top: 0
      }}></div>
    )
  };
  _setData(d) {
    this.setState({
      data: d
    })
  }
  componentDidMount() {
    let me = this;
    me.instrument = echarts.init(me.refs.instrument);
    me.option = {
      tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
      },
      series: [
        {
          name: '业务指标',
          type: 'gauge',
          radius: '65%',
          axisLine: {
            show: true,
            lineStyle: {
              width: 20,
              color: [
                [0.3, 'orange'],
                [0.6, 'aqua'],
                [1, 'yellow']
              ],
              opacity: 0.8
            }
          },
          title: {   //仪表盘标题
            show: true,
            offsetCenter: ['0', '20'],
            textStyle: {
              color: 'pink',
              fontSize: 14,
              fontFamily: 'Microsoft YaHei'
            }
          },
          splitLine: {/**分割线 */
            length: 20
          },
          pointer: {/**指针 */
            length: '60%',
            width: 5
          },
          axisTick: { // 坐标轴小标记
            length: 15, // 属性length控制线长
            lineStyle: { // 属性lineStyle控制线条样式
              color: 'auto',
              shadowColor: '#fff', //默认透明
              shadowBlur: 10
            }
          },
          axisLabel: { // 坐标轴小标记
            textStyle: { // 属性lineStyle控制线条样式
              fontWeight: 'bolder',
              color: '#fff',
              shadowColor: '#fff', //默认透明
              shadowBlur: 10
            }
          },
          detail: {
            // backgroundColor: 'rgba(30,144,255,0.8)',
            // shadowColor: '#fff', //默认透明
            // shadowBlur: 5,
            offsetCenter: [0, '50%'], // x, y，单位px
            textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              fontWeight: 'bolder',
              color: '#fff',
              fontSize: 24
            },
            formatter: function (p) {
              return p + '%'
            }
          },
          data: this.state.data
        }
      ]
    };
    setInterval(function () {
      me.option.series[0].data[0].value = (Math.random() * 100).toFixed(1);
      me.instrument.setOption(me.option, true)
    }, 2000);

    me.instrument.setOption(me.option)
  };
  componentDidUpdate() {
  };
  componentWillUnmount() {

  }
}
export default InstrumentPanel; 