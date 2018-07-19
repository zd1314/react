import React, { Component } from 'react'
import bg1 from './img/bg1.png'
import bg2 from './img/bg2.png'
import bg3 from './img/bg3.png'

/*引入柱状图*/
import PictorialBar from './pictorialBar'
class ShineBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    // this.liStyle = { overflow: 'hidden', position: 'relative'}
  };
  _setData(d) {
    let me = this;
    me.refs.echartsDom.setData(d);
    this.setState({
      data: d.CityName
    });
  };
  creatList() {
    let colorNum = undefined;
    let bg = undefined;
    let colorTxt = undefined;
    // let dataArr=this.state.data.reverse()
    // console.log(dataArr)
    return this.state.data.map((item, index) => {
      let str = ""
      if (!item) return
      if (item.length > 3) {
        str = item.slice(0, 3) + "..."
      } else {
        str = item
      }
      if (index + 1 === 1) {
        colorNum = '#090b32';
        colorTxt = '#f83d73';
        bg = bg1;
      } else if (index + 1 === 2) {
        colorNum = '#090b32';
        colorTxt = '#f7c800';
        bg = bg2;
      } else if (index + 1 === 3) {
        colorNum = '#090b32';
        bg = bg3;
        colorTxt = '#00eed3'
      } else if (index + 1 === 4) {
        colorNum = '#fff';
        colorTxt = '#aeecf7';
        bg = '';
      }
      else {
        colorNum = '#fff';
        bg = '';
      }
      return (
        <li ref={'list' + index} key={index} style={{
          // height:26,
          // marginTop:10
          // // ...this.liStyle,
          flex: 1,
          // display: 'flex',
          // alignItems: 'center',

        }}>
          <div style={{
            color: 'pink',
            width: '600px',
            position: 'relative',
            fontSize: 10
          }}>
            <span title={item} style={{
              position: 'absolute',
              left: 10,
              color: '#fff',
            }}>
              {str}
            </span>
            <img src={bg} alt="" />
          </div>
        </li>
      )
    })
  }
  render() {
    return (
      <div style={{
        // color: '#fff',
        // width:600,
        // height:500,
        // position: 'absolute',
        // left: 29,
        // top: 0
      }}>


        <PictorialBar
          width={600}
          height={500}
          left={0}
          top={28}
          // gridRight={300}
          ref={'echartsDom'}
        />
        <ul
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: 500 }}
        >
          {this.creatList()}
        </ul>
      </div>
    )
  }
}
export default ShineBar;
