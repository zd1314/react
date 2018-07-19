import React, { Component } from 'react';
import * as api from '../../api/api-city';
/* css */
import './city.css';
import Pie from '../../components/pieChart/pie'
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
  };

  componentWillUnmount() {
    this._clearTokens();
  };
};

export default City;
