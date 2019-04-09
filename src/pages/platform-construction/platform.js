import React, { Component } from 'react';
import * as api from '../../api/api-platform';
/* css */
import './platform.css';
/* components */
import Panel from '../../components/panel/Panel';
import Select from '../../components/select/Select';

import HosBar from '../../components/bar/hosBar';
import CreditRing from '../../components/bar/creditRing';
import TabCut from '../../components/bar/tab';
import Bubble from '../../components/d3/bubble';
/**requestAnimationFrame平移 */
import Move1 from '../../components/js-animation/translation';
/** requestAnimationFrame旋转*/
import Move from '../../components/js-animation/rotate';
/** requestAnimationFrame来回弹*/
import Elastic from '../../components/js-animation/elastic'
/*水球展示*/
import EchartsWaterPolo from '../../components/echartsWaterPolo/echartsWaterPolo';
/**基于D3的demo */
import DoughnutChart from '../../components/d3/d3Demo01';
/**基于D3的环形 */
import Doughnut from '../../components/d3/doughnut';
/**基于D3的进度条 */
import ProgressBar from '../../components/d3/progressBar';
/**基于echarts的仪表盘 */
import InstrumentPanel from '../../components/pieChart/instrumentPanel';
import BubbleDiagram from '../../components/d3/bubbleDiagram';
/**单选按钮 */
import Btns from '../../components/common/btn1';
/**树叶 */
import Envionmental from '../../components/animate/environmentalCarrying';
import Rotate from '../../components/animate/rotate';
import Opacity from '../../components/animate/opacity';
// 该隐患相关企业安全分析
import Circle from '../../components/water/circle';
import WaterPolo from '../../components/water/waterPolo';
//环形图
import Pie from '../../components/pieChart/pie';
import List from '../../components/pieChart/list';
/*
* 平台建设
* */
class Platform extends Component {
  constructor(props) {
    super(props);
    let me = this;
    me.state = {};
    me._tokens = [];

  };

  render() {
    let me = this;
    return (
      <div className="Allcontents" >
        <Panel title="红榜区域排行榜" width={400} height={180} left={30} top={250}>
          <HosBar width={200} height={178} ref={(ref) => {
            me._hosBar = ref
          }} />
        </Panel>
        <Panel title='环形图' width={400} height={180} left={30} top={450}>
          <Pie />
          <List style={{ width: '500', height: '370', position: 'absolute', left: 150, top: -10 }} ref={'listRef'} />
        </Panel>
        <Panel title="js动画" width={400} height={180} left={30} top={36}>
          {/* <Bubble width={500} height={300} /> */}
          <Move1 />
          <Move />
          <Elastic />
        </Panel>
        <Panel title="水球展示" width={400} height={120} left={480} top={36}>
          <ul style={{
            width: 400,
            height: 200,
            display: "flex"
          }}>
            <li > <EchartsWaterPolo width={130} height={100} /></li>
            <li> <EchartsWaterPolo width={130} height={100} /></li>
            <li> <EchartsWaterPolo width={130} height={100} /></li>
          </ul>
        </Panel>

        <Panel title='动画' width={400} height={200} left={480} top={200}>
          <Opacity />

        </Panel>
        <Panel title="叶子"
          width={400}
          height={200}
          left={480}
          top={430}>
          <Envionmental />
          <Rotate />
        </Panel>

        <Panel title="基于D3的饼图" width={300} height={140} left={930} top={30}>
          <Doughnut />
        </Panel>

        <Panel title="D3仪表盘"
          width={300}
          height={200}
          left={930}
          top={190}>
          <BubbleDiagram />
        </Panel>

        {/* <Panel title="单选按钮"
          width={200}
          height={200}
          left={1000}
          top={400}>
          < Btns width={15} height={15} top={6} left={0} />
        </Panel> */}
        <Panel title="环形进度条" width={300} height={200} left={930} top={430}>
          <div className="waterBox" style={{ position: 'absolute', left: 40, bottom: 60, width: '200px', height: '100%' }}>
            <Circle style={{ width: '1.4rem', height: '1.4rem', position: 'absolute', left: '30px', top: '110px', zIndex: 10 }} ref={'standardizationCircle'}></Circle>
            <WaterPolo width={'0.8rem'} top={'1.4rem'} left={'0.6rem'} ref={'standardizationWater'} />
            <div style={{ position: 'relative', width: '100%', textAlign: 'center', color: '#fff', fontSize: '14px', top: '270px' }}>进行过安全标准化</div>
          </div>
        </Panel>
      </div >
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
    let standardization = {
      value: '20',
      color: '#00f3fc'
    };
    me.refs.standardizationCircle.setData(standardization); /*进行过安全标准化*/
    me.refs.standardizationWater.setData(standardization);
    //环形图
    let obj = {
      val: [100.00, 50.99, 20.11].sort(function (a, b) {
        return a < b
      }),
      name: ['list1', 'list2', 'list3']
    }
    me.refs.listRef.setData(obj);
  };

  componentWillUnmount() {
    this._clearTokens();
  };
};

export default Platform;
