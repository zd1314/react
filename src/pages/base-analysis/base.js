import React, { Component } from 'react';
import * as api from '../../api/api-base';
/* css */
import './base.css';
import Panel from '../../components/panel/Panel'
// 该隐患相关企业安全分析
import Circle from '../../components/water/circle';
import WaterPolo from '../../components/water/waterPolo';
/*
* 基础库分析
* */
class Base extends Component {
  constructor(props) {
    super(props);
    let me = this;
    me.state = {};
    me._tokens = [];
    me.process = {
      width: 300,
      height: 100,
      left: 36,
      top: 30,
      position: 'absolute'
    };
  };

  render() {
    let me = this;
    return (
      <div className="Allcontents">
        <Panel title="环形进度条" style={me.process}>
          <div className="waterBox" style={{ position: 'absolute', left: 0, bottom: 60, width: '200px', height: '100%' }}>
            <Circle style={{ width: '1.4rem', height: '1.4rem', position: 'absolute', left: '30px', top: '110px', zIndex: 10 }} ref={'standardizationCircle'}></Circle>
            <WaterPolo width={'0.8rem'} top={'1.4rem'} left={'0.6rem'} ref={'standardizationWater'} />
            <div style={{ position: 'relative', width: '100%', textAlign: 'center', color: '#fff', fontSize: '14px', top: '270px' }}>进行过安全标准化</div>
          </div>
          <div className="waterBox" style={{ position: 'absolute', left: "200px", bottom: 60, width: '200px', height: '100%' }}>
            <Circle style={{ width: '1.4rem', height: '1.4rem', position: 'absolute', left: '30px', top: '110px', zIndex: 10 }} ref={'safetyCircle'}></Circle>
            <WaterPolo width={'0.8rem'} top={'1.4rem'} left={'0.6rem'} ref={'safetyWater'} />
            <div style={{ position: 'relative', width: '100%', textAlign: 'center', color: '#fff', fontSize: '14px', top: '270px' }}>进行过安全培训</div>
          </div>
          <div className="waterBox" style={{ position: 'absolute', left: "400px", bottom: 60, width: '200px', height: '100%' }}>
            <Circle style={{ width: '1.4rem', height: '1.4rem', position: 'absolute', left: '30px', top: '110px', zIndex: 10 }} ref={'personnelCircle'}></Circle>
            <WaterPolo width={'0.8rem'} top={'1.4rem'} left={'0.6rem'} ref={'personnelWater'} />
            <div style={{ position: 'relative', width: '100%', textAlign: 'center', color: '#fff', fontSize: '14px', top: '270px' }}>配备了安全人员</div>
          </div>
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

    }));
    let standardization = {
      value: '20',
      color: '#00f3fc'
    };
    me.refs.standardizationCircle.setData(standardization); /*进行过安全标准化*/
    me.refs.standardizationWater.setData(standardization);
    let safety = {
      value: '50',
      color: '#36bb88'
    };
    me.refs.safetyCircle.setData(safety);  /*进行过安全培训*/
    me.refs.safetyWater.setData(safety);
    let personnel = {
      value: '80',
      color: '#ffb700'
    };
    me.refs.personnelCircle.setData(personnel); /*配备了安全人员*/
    me.refs.personnelWater.setData(personnel);

  };
  componentWillUnmount() {
    this._clearTokens();
  };
};

export default Base;
