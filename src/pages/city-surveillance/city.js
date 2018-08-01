import React, { Component } from 'react';
import * as api from '../../api/api-city';
/* css */
import './city.css';
import Pie from '../../components/pieChart/pie';
import List from '../../components/pieChart/list'
/*
* 城市监控
* */
class City extends Component {
  constructor(props) {
    super(props);
    let me = this;
    me.state = {};
    me._tokens = [];
  };

  render() {
    let me = this;
    return (
      <div className="Allcontents">
        <Pie />
        <List  style={{ width: '500', height: '370', position: 'absolute', left: '500', top: '100' }} ref={'listRef'} />
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
    let obj={
      val:[100.00,50.99,20.11].sort(function(a,b){
        return a<b
      }),
      name:['list1','list2','list3']
    }
    me.refs.listRef.setData(obj)
  };

  componentWillUnmount() {
    this._clearTokens();
  };
};

export default City;
