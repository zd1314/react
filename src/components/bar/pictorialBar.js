import React, { Component } from 'react';
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar';

import './pictorialBar.css'
class PictorialBar extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  };

  _setData(d) {
    let me = this;
    me.lock = true;
    me.setState({
      data: d
    })
  };
  _tabClick() {
    let me = this;
    me.props.changeData()
  }
  componentDidMount() {
    let me = this;
    me.myCharts = echarts.init(me.refs.myCharts);

    me.option = {
      backgroundColor: 'rgba(244,255,255,0.3)',
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value'
      },
      yAxis: {
        type: 'category',
        data: []
      },
      series: [
        {
          name: '直接访问',
          type: 'bar',
          stack: '总量',
          barWidth: 16,
          label: {
            normal: {
              show: true,
              position: 'insideRight'
            }
          },
          itemStyle: {
            normal: {
              color: 'yellow'
            }
          },
          data: []
        },
        {
          name: '邮件营销',
          type: 'bar',
          stack: '总量',
          barWidth: 16,
          label: {
            normal: {
              show: true,
              position: 'insideRight',
              offset: [50, 0]
            }
          },
          itemStyle: {
            normal: {
              color: 'rgba(8,176,55,0.1)'
            }
          },
          data: []
        },
      ]
    }
    // me.myCharts.setOption(me.option)
  };
  componentDidUpdate() {
    let me = this;
    if (!me.state.data) { return }
    let max = Math.max.apply(null, me.state.data.seriesData)
    if (!me.lock) { return };
    me.lock = false;
    let dataShodow = [];
    me.state.data.seriesData.map((s, i) => {
      dataShodow.push({
        value: max - s
      })
    })
    me.option.yAxis.data = me.state.data.CityName;
    me.option.series[0].data = dataShodow;
    me.option.series[1].data = me.state.data.seriesData;
    me.myCharts.setOption(me.option, true)
  };
  render() {
    let me = this;
    return (
      <div>
        <button className={'btn'} onClick={me._tabClick.bind(this)}>Click me</button>
        <div ref={'myCharts'} style={{
          width: this.props.width,
          height: this.props.height,
          position: 'absolute',
          top: 150,
          left: 100
        }}></div>
      </div>
    )
  };
}
export default PictorialBar;