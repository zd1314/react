import React, { Component } from 'react';
import * as api from '../../api/api-base';
/* css */
import './base.css';
import Panel from '../../components/panel/Panel'
/*
* 基础库分析
* */
class Base extends Component {
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
        <Panel title="环形进度条" style={me.process}>


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


  };
  componentWillUnmount() {
    this._clearTokens();
  };
};

export default Base;
