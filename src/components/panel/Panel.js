import React, {Component} from 'react';
import URL from './title-bg.png';

class Panel extends Component {
  constructor() {
    super();
    /* 标题样式
     *  字体未加载  原因未知。。。
      * */
    this.h1 = {
      height: '0.36rem',
      lineHeight: '0.36rem',
      minWidth: '1.8rem',
      paddingLeft: '0.35rem',
      fontSize: '0.14rem',
      fontWeight: '700',
      // WebkitTextStroke: '0.6px #0045be',
      textShadow: '0 1px #00486a, 1px 0 #00486a, -1px 0 #00486a, 0 -1px #00486a',
      fontFamily: '方正准圆简体',
      // letterSpacing:'3px',
      // WebkitTextStroke: '1px #00486a',
      // WebkitTextFillColor: '#FFFFFF',
      color:'#fff',
      // textShadow:'0px 0px 2px #00486a',
      // textIndent: '0.6rem',
      background: 'url("' + URL + '") no-repeat left center',
      backgroundSize: 'contain'
    };

    this.span = {
      fontSize: '0.18rem',
      paddingLeft: '0.1rem',
      fontWeight: 'normal',
      fontFamily: '方正准圆简体',
      // color: '#fff'
      // webkitTextStroke: '0px #00486a',
      // webkitTextFillColor: '#FFFFFF',
      color:'#fff',
      textShadow:'1px #00486a',
    }
  }

  render() {
    return (
      <div style={this.props.style}>
        <h1 style={this.h1}>{this.props.title}<span style={this.span}>{this.props.subtext}</span></h1>
        <div style={{
          height: parseFloat(this.props.style.height) - 0.36 + 'rem'
        }}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Panel;
