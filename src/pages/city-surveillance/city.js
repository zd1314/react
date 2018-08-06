import React, { Component } from 'react';
import * as api from '../../api/api-city';
/* css */
import './city.css';
import Pie from '../../components/pieChart/pie';
import List from '../../components/pieChart/list';
import Process from '../../components/pieChart/process';
import Dashboard from '../../components/test-d3/dashboard'
/*
* 城市监控
* */
class City extends Component {
  constructor(props) {
    super(props);
    let me = this;
    me.state = {};
    me._tokens = [];
    me.styles = {
      width: 300,
      height: 300,
      position: 'absolute',
      left: 140,
      top: -108,
      display: 'flex'
    };
    me.dashboard = {
      width: 200,
      height: 200,
      position: 'absolute',
      left: 140,
      top: 20
    }
  };

  render() {
    let me = this;
    return (
      <div className="Allcontents">
        <Pie />
        <List style={{ width: '500', height: '370', position: 'absolute', left: 40, top: 145 }} ref={'listRef'} />
        <div style={me.styles}>
          <Process color={'aqua'} id={'oneLinear'} startColor={'orange'} endColor={'red'} ref={'scrollRef'} text={'可以储存'} textColor={'aqua'} />
          <Process color={'orange'} id={'twoLinear'} startColor={'#00FF00'} endColor={'#00FA9A'} ref={'scrollRefs'} text={'不可以储存'} textColor={'orange'} />
        </div>
        <Dashboard dashboard={me.dashboard} ref={'dashboardRef'} id={'linearGradient'} />
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
    let obj = {
      val: [100.00, 50.99, 20.11].sort(function (a, b) {
        return a < b
      }),
      name: ['list1', 'list2', 'list3']
    }
    me.refs.listRef.setData(obj);
    let value = 25;
    let val = 58;
    me.refs.scrollRef._setData(value)
    me.refs.scrollRefs._setData(val)
  };


  componentWillUnmount() {
    this._clearTokens();
  };
};

export default City;
