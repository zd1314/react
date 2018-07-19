import React, { Component } from 'react';

import echarts from 'echarts';
import './piechart.css'
import { isAbsolute } from 'path';

class PieCharts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { value: 630, name: '主河流' },
        { value: 450, name: '湖泊' },
        { value: 300, name: '海域' },
        { value: 230, name: '旱道' }
      ]
    }
    this.style = {
      width: 300,
      height: 200,
    }
  };
  render() {
    return (
      <div className={'list-wrap'}>
        <div className={'list-title'}>
          <i></i>
          <span>监控质量内容</span>
        </div>
        <div ref={'pieChart'} style={this.style}></div>
      </div>
    )
  };
  componentDidUpdate() {
    let me = this;
  }
  componentDidMount() {
    let me = this;
    me.piechart = echarts.init(me.refs.pieChart)
    me.option = {
      legend: {
        x: 30,
        top: '4%',
        data: ['男性', '女性']
      },
      series: [
        {
          type: 'pie',
          center: ['35%', '60%'],
          radius: ['50%', '70%'],
          label: {
            normal: {
              position: 'center'
            }
          },
          data: [
            {
              value: 335,
              name: '男性',
              itemStyle: {
                normal: {
                  color: {
                    type: 'linear',
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                      offset: 0,
                      color: '#ffea00' // 0% 处的颜色
                    }, {
                      offset: 1,
                      color: '#ff00c0' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                  }
                }
              },
              label: {
                normal: {
                  formatter: '{d} %',
                  textStyle: {
                    color: '#fff',
                    fontSize: 14
                  }
                }
              }
            },
            {
              value: 180,
              name: '女性',
              tooltip: {
                show: false
              },
              itemStyle: {
                normal: {
                  color: {
                    type: 'linear',
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                      offset: 0,
                      color: '#70fc1d' // 0% 处的颜色
                    }, {
                      offset: 1,
                      color: '#5d7f00' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                  },
                }
              },
              label: {
                normal: {
                  textStyle: {
                    color: '#fff',
                  },
                  formatter: function (p) {
                    return p.name
                  }
                }
              }
            }
          ]
        },
      ]
    }
    me.piechart.setOption(me.option)
  };
}
export default PieCharts;