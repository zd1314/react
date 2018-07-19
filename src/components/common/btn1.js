import React, { Component } from 'react';

import './btn1.css'


class Btns extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataArr: ["24小时", "2天", "3天", "一周", "一月"],
      checkStatus: true,
    };
    let me = this;
    me._width = props.width || 160;
    me._height = props.height || 38;
    me._top = props.top || 0;
    me._left = props.left || 0;
    me._bottom = props.bottom || 0;
    me._right = props.right || 0;
  };
  render() {
    let me = this;
    return (
      <div className={'choice-wrap'}>
        {
          this.state.dataArr.map((s, i) => {
            return (
              <div className={'choice'} key={i}>
                <label className={"radio"} >
                  <input type="radio" name="radio" value={i} checked={this.state.checkStatus}
                  >
                  </input>
                  <i style={{
                    width: me._width,
                    height: me._height,
                    top: me._top,
                    left: me._left || "",
                    bottom: me._bottom,
                    right: me._right
                  }}>
                    <b style={{
                      width: me._width - 5,
                      height: me._height - 5
                    }}></b>
                  </i>

                </label>
              </div>
            )
          })
        }
      </div>
    )
  }
}
export default Btns;