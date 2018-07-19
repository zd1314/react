import React, { Component } from 'react';
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar';
import './creditRing.css'

class CreditRing extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  };
  _setData(d) {
    let me = this;
    me.setState({
      data: d
    })
  };
  _option(bool, direction) {
    return {
      grid: {
        left: '3%',
        right: '4%',
        bottom: '0%',
        top: '35%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        inverse: bool,
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          show: false
        }
      },
      yAxis: {
        type: 'category',
        position: direction,
        axisTick: {
          show: false
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: '#2abce1',
            fontSize: 14,
          },
          axisLabel: {
            show: false
          }
        },
        data: []
      },
      series: [
        {
          //for shadow
          type: 'bar',
          silent: true,
          label: {
            normal: {
              show: false,   //背景数字
              position: 'right',
              offset: [5, 0],
              formatter: function (d) {
                return d.data.a;
              },
              textStyle: {
                color: "#fff"
              }
            }
          },
          barWidth: "60%",
          barGap: '-100%',
          //barCategoryGap: '50%',
          animation: false,
          itemStyle: {
            normal: {
              borderWidth: 1,
              barBorderRadius: 10,
              color: '#187b99'
              //barBorderRadius:10
            }
          },
          data: []
        },
        {
          name: '本市户籍',
          type: "bar",
          barWidth: '60%',
          itemStyle: {
          },
          data: this.state.data.seriesVal
        }
      ]
    }
  };
  componentDidUpdate() {
    let me = this;
    let options = me._option(true, 'left')
    let option = me._option(false, 'right')
    let dataMax = 0;
    for (let i = 0; i < me.state.data.seriesVal.length; i++) {
      if (dataMax < me.state.data.seriesVal[i]) {
        dataMax = me.state.data.seriesVal[i];
      }
    }
    dataMax = 1.1 * dataMax;

    let dataShadow = [];
    for (let j = 0; j < me.state.data.seriesVal.length; j++) {
      dataShadow.push(
        {
          value: dataMax,
          a: me.state.data.seriesVal[j],
          label: {
            normal: {
              textStyle: {
                color: "#12fdfd"
              },
              fontSize: 13
            }
          }
        }
      );
    }

    options.series[0].data = dataShadow;
    option.series[0].data = dataShadow;
    // 左
    let myCharts = echarts.init(this.refs.dom1)
    options.yAxis.data = me.state.data.Ydata
    options.series[1].itemStyle = {
      normal: {
        borderWidth: 1,
        barBorderRadius: [10, 0, 0, 10],

        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 1,
          y2: 1,
          colorStops: [{
            offset: 0, color: "#00f9f7"
          }, {
            offset: 0.5, color: "#00aeb8"
          },
          {
            offset: 1, color: "#017385"
          }
          ],
          globalCoord: false
        }
      }
    }
    myCharts.setOption(options);
    //右
    let myChart = echarts.init(this.refs.dom2)


    option.series[1].itemStyle = {
      normal: {
        borderWidth: 1,
        barBorderRadius: [0, 10, 10, 0],

        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 1,
          y2: 1,
          colorStops: [{
            offset: 0, color: "#085866"
          }, {
            offset: 0.5, color: "#669149"
          },
          {
            offset: 1, color: "#dfeb34"
          }
          ],
          globalCoord: false
        }
      }
    }
    myChart.setOption(option);

  };
  render() {
    return (
      <div>
        <div ref="dom1" style={{
          width: this.props.width,
          height: this.props.height,
          position: 'absolute',
          left: 0,
          top: 0
        }}></div>
        <div ref="dom2" style={{
          width: this.props.width,
          height: this.props.height,
          position: 'absolute',
          // transform:'rotate(0deg)',
          left: 187,
          top: 0
        }}></div>
      </div>


    )
  }
}
export default CreditRing;