import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
    let me = this;
    me.state = {
      dataName: [{ name: '企业名称' }, { name: '预警时间' }, { name: '积分' }]
    }
  };
  addList() {
    let me = this;
    return (
      <li>
        <span></span>
        <span></span>
        <span></span>
      </li>
    )
  }
  render() {
    let me = this;
    return (
      <div>
        <table>
          <tbody>
            <tr>
              {me.state.dataName.map((s, i) => {
                return
                <th key={i}>{s}</th>
              })
              }
            </tr>
          </tbody>
        </table>
        <ul>
          {me.addList()}
        </ul>
      </div>
    )
  };
  componentDidMount() {

  };
  componentDidUpdate() {

  }
};
export default List;