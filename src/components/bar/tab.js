import React, { Component } from 'react';
import './tab.css';


const tabList = ["学历", '年龄', "性别"];
class TabCut extends Component {
  constructor(props) {
    super(props);
    let me = this;
    me.state = {
      tabActive: 0,
    };
  };

  _setData(d) {
    let me = this;
    me.lock = true;
    me.setState({
      data: d
    })
  };
  _tabClick(index) {
    let me = this;
    let map = me.map;
    me.setState({
      tabActive: index
    });
    me.props.changeData(index)
  }
  render() {
    let me = this;
    let active = me.state.tabActive;
    return (
      <div >
        <div className={'homepage-map-tab-box'}>
          {
            tabList.map((t, i) => {
              return (
                <div
                  key={`homepage-map-tab-${i}`}
                  className={`homepage-map-tab-item ${active === i ? 'active' : ''}`}

                  onClick={me._tabClick.bind(this, i)}>
                  <span>{t}</span>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  };

  componentDidMount() { };

  componentDidUpdate() { };
};

export default TabCut;
