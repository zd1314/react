import React, { Component } from 'react';
import * as api from '../../api/api-industy';
import Panel from '../../components/panel/Panel';
/* css */
import './industy.css';
/**气泡图 */
import Bubble from '../../components/bubble/bubble.js';
/**eharts饼图 */
import PieCharts from '../../components/pieChart/pieChart';
/**数字周边冒泡 */
import ParticleAnimator from '../../components/particle-animator/ParticleAnimator';
/*列表详情 */
import List from '../../components/list/list'
/*
* 行业信用
* */
class Industy extends Component {
  constructor(props) {
    super(props);
    let me = this;
    me.state = {};
    me._tokens = [];
    me.list={
      position:'absolute',
      left:0,
      top:300,
      width:300,
      height:400
    }
  };

  render() {
    let me = this;
    return (
      <div className="Allcontents">
        <Bubble />
        <PieCharts />
        <ParticleAnimator />
        <Panel title="详细列表" style={me.list}>
        <List />
        </Panel>
      </div>
    )
  };

  _clearTokens() {
    this._tokens.forEach(token => token.cancel());
    this._tokens = [];
  };

  componentDidMount() {
    let me = this;
    /* test */
    me._tokens.push(api.test.send().then(res => {
      console.log(res.test)
    }));
    // me._tokens.push(api.territory.send().then(res => {
    //   console.log(res)
    // }));
  };

  componentWillUnmount() {
    this._clearTokens();
  };
};

export default Industy;
