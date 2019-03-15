import React, { Component } from 'react';
import * as api from '../../api/api-operation';
/* css */
import './operation.css';
/**common组件 */
import Panel from '../../components/panel/Panel';
import Select from '../../components/select/Select';
/**基于D3的树图 */
// import Pointer from '../../components/d3/pointer';

/*
* 运行监控
* */
class Operation extends Component {
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
        <Panel title="canvas" width={800} heigt={900} left={0} top={20}>

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
    me._tokens.push(api.treeChart.send().then(res => {
      me.refs.treeChart.setData(res)
    }));
  };

  componentWillUnmount() {
    this._clearTokens();
  };
};

export default Operation;
