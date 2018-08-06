import React, { Component } from 'react';
import * as api from '../../api/api-regional';
import Panel from '../../components/panel/Panel'
/* css */
import './regional.css';
import PictorialBar from '../../components/bar/pictorialBar';
import Bar from '../../components/tabD3Charts/bar';
/*
* 区域分析
* */
class Regional extends Component {
  constructor(props) {
    super(props);
    let me = this;
    me.state = {}
    me._tokens = [];
    // me.travelWay = {
    //   width: 300,
    //   height: 100,
    //   left: 36,
    //   top: 30,
    //   position: 'absolute'
    // };
    // me.svgStyle = {
    //   position: 'absolute',
    //   left: 10,
    //   top: 40
    // }
  };

  render() {
    let me = this;
    return (
      <div>
        {/* <Test /> */}
        <Bar style={me.svgStyle} />
        < PictorialBar width={600} height={500} ref={'bars'} changeData={me._Click.bind(this)} />
      </div>
    )
  };
  /**点击 */
  // _Click() {
  //   let me = this;
  //   me._tokens.push(api.one.send().then(res => {
  //     let CityName = [], Ydata = [], seriesData = []
  //     res.data.map(s => {
  //       CityName.push(s.name);
  //       Ydata.push(s.value);
  //       seriesData.push(s.rate)
  //     })
  //     let objs = {
  //       CityName: CityName,
  //       Ydata: Ydata,
  //       seriesData: seriesData
  //     }
  //     me.refs.bars._setData(objs)
  //   }));
  // }
  _clearTokens() {
    this._tokens.forEach(token => token.cancel());
    this._tokens = [];
  };

  componentDidMount() {
    let me = this;
    /* test */
    me._tokens.push(api.pictorialBar.send().then(res => {
      let CityName = [], Ydata = [], seriesData = []
      res.data.map(s => {
        CityName.push(s.name);
        Ydata.push(s.value);
        seriesData.push(s.rate)
      })
      let objs = {
        CityName: CityName,
        Ydata: Ydata,
        seriesData: seriesData
      }
      me.refs.bars._setData(objs)
    }));
  };

  componentWillUnmount() {
    this._clearTokens();
  };
};

export default Regional;
