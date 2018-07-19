/**树图 */
import React, { Component } from 'react';
import * as d3 from 'd3';

class Tree extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  };
  setData(d) {
    let me = this;
    me.setState({
      data: d
    })
  }
  render() {
    return (
      <div ref={'treeChart'}></div>
    )
  };
  _createTree() {
    let me = this;
    let width = 500, height = 500;

    /**定义数据转换函数 */
  }
  ComponentDidMount() {

  };
  ComponentDidUpdate() {
    let me = this;
    me._createTree()
  }
}
export default Tree;