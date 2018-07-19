import React, { Component } from 'react';
import * as api from '../../api/api-platform';
/* css */
import './platform.css';
/* components */
import Panel from '../../components/panel/Panel';
import Select from '../../components/select/Select';

import HosBar from '../../components/bar/hosBar'
import CreditRing from '../../components/bar/creditRing'
import TabCut from '../../components/bar/tab'
import Bubble from '../../components/d3/bubble'
/*水球展示*/
import EchartsWaterPolo from '../../components/echartsWaterPolo/echartsWaterPolo';
/**基于D3的demo */
import DoughnutChart from '../../components/d3/d3Demo01';
/**基于D3的环形 */
import Doughnut from '../../components/d3/doughnut';
/**基于D3的进度条 */
import ProgressBar from '../../components/d3/progressBar'
/**基于echarts的仪表盘 */
import InstrumentPanel from '../../components/pieChart/instrumentPanel'
import BubbleDiagram from '../../components/d3/bubbleDiagram'
/**单选按钮 */
import Btns from '../../components/common/btn1';

/*
* 平台建设
* */
class Platform extends Component {
  constructor(props) {
    super(props);
    let me = this;
    me.state = {};
    me._tokens = [];
    me.travelWay = {
      width: 300,
      height: 100,
      left: 36,
      top: 30,
      position: 'absolute'
    };
    me.creditRing = {
      width: 300,
      height: 100,
      left: 36,
      top: 230,
      position: 'absolute'
    }
    me.accidentAnalysis = {
      width: 467,
      height: 422,
      left: 36,
      top: 400,
      position: 'absolute'
    }
    me.waterPolo = {
      width: 300,
      height: 100,
      left: 480,
      top: 30,
      position: 'absolute'
    }
    me.d3Svg = {
      width: 300,
      height: 100,
      left: 480,
      top: 160,
      position: 'absolute'
    }
    me.d3Cirle = {
      width: 300,
      height: 100,
      left: 800,
      top: 30,
      position: 'absolute'
    }
    me.d3ProgressBar = {
      width: 300,
      height: 100,
      left: 1000,
      top: 30,
      position: 'absolute'
    }
    me.instrumentPanel = {
      width: 300,
      height: 100,
      left: 800,
      top: 180,
      position: 'absolute'
    }
    me.bubbleDiagram = {
      width: 500,
      height: 500,
      left: 1000,
      top: 180,
      position: 'absolute'
    }
    me.btns = {
      width: 200,
      height: 200,
      left: 1000,
      top: 400,
      position: 'absolute'
    }
  };
  render() {
    let me = this;
    return (
      <div className="Allcontents" >
        <Panel title="红榜区域排行榜" style={me.travelWay}>
          <HosBar width={200} height={178} ref={(ref) => {
            me._hosBar = ref
          }} />
        </Panel>
        <Panel title="信用排行度" style={me.creditRing}>

          <CreditRing width={200} height={178} ref={(ref) => {
            me._creditRing = ref
          }} />
          < TabCut type={0} changeData={me.CreditRingTabChange.bind(this)} />
        </Panel>
        <Panel title="事故区域分析" style={me.accidentAnalysis}>
          <Bubble width={500} height={300} />
        </Panel>
        <Panel title="水球展示" style={me.waterPolo}>
          <ul style={{
            width: 300,
            height: 200,
            display: "flex"
          }}>
            <li> <EchartsWaterPolo width={100} height={150} /></li>
            <li> <EchartsWaterPolo width={100} height={150} /></li>
            <li> <EchartsWaterPolo width={100} height={150} /></li>
          </ul>
        </Panel>
        <Panel title="基于D3的demo" style={me.d3Svg}>
          <DoughnutChart />
        </Panel>
        <Panel title="基于D3的饼图" style={me.d3Cirle}>
          <Doughnut />
        </Panel>
        <Panel title="基于D3的进度条" style={me.d3ProgressBar}>
          <ProgressBar />
        </Panel>
        <Panel title="基于echarts的仪表盘" style={me.instrumentPanel}>
          <InstrumentPanel />
        </Panel>
        <Panel title="基于echarts的仪表盘" style={me.bubbleDiagram}>
          <BubbleDiagram />
        </Panel>
        <Panel title="单选按钮" style={me.btns}>
          < Btns width={15} height={15} top={6} left={0} />
        </Panel>


      </div>
    )
  };

  CreditRingTabChange(e) {
    console.log(e)
  }
  _clearTokens() {
    this._tokens.forEach(token => token.cancel());
    this._tokens = [];
  };

  componentDidMount() {
    let me = this;
    /* test */
    me._tokens.push(api.home.send().then(res => {
      // console.log(res)
      me._hosBar._setData(res)
    }));
    /*信用度*/
    me._tokens.push(api.creditRing.send().then(res => {
      // console.log(res)
      me._creditRing._setData(res)
    }));
  };

  componentWillUnmount() {
    this._clearTokens();
  };
};

export default Platform;
