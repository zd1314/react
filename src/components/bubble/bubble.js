import React, { Component } from 'react';
import './bubble.css'
/**随机生成球---动画 */

class RandomBubble extends Component {
  constructor(props) {
    super(props);
    let me = this;
    me.state = {
      arr: ["保险", '能源环保', '交通旅游', '制造', '医疗卫生', '保险', '教育', '制造'],
      color: [['#486ac1', '#db8120'], ['#0e9ddc', '#135eb0'], ['#35eaf6', '#40b9f9'], ['#3de2b5', '#26a09f'], ["#e96208", '#d48407'], ['#83f24e', '#db8120'], ['#5d8bfb', '#2463f8'], ['#0e9ddc', '#0e9ddc']],
      w: ['30px', '50px', '48px', '47px', '50px', '25px', '33px', '30px'],
      h: ['30px', '50px', '48px', '47px', '50px', '25px', '33px', '30px']
    }
  };
  render() {
    let me = this;
    let count;
    return (
      <div className={'bubble-wrap'} ref={'doms'}>
        {
          me.state.arr.map((s, i) => {

            return <span key={i} ref={'domSpan'} className={'move'} style={{
              background: 'linear-gradient(to bottom,' + me.state.color[i][0] + ', ' + me.state.color[i][1] + ')',
              width: me.state.w[i],
              height: me.state.h[i],
              lineHeight: me.state.h[i],
              fontSize: 12
            }}>{s}</span>


          })
        }
      </div>
    )
  };
  /**判断有没有class */
  _hasClass(elements, cName) {
    return !!elements.className.match(new RegExp("(\\s|^)" + cName + "(\\s|$)"));
  }
  /**增加class */
  _addClass(elements, cName) {
    let me = this;
    if (!me._hasClass(elements, cName)) {
      elements.className += " " + cName;
    };
  }
  /**删除class */
  _removeClass(elements, cName) {
    let me = this;
    if (me._hasClass(elements, cName)) {
      elements.className = elements.className.replace(new RegExp("(\\s|^)" + cName + "(\\s|$)"), " ");
    };
  }
  _animate() {
    let me = this;
    let arr = me.refs.doms;
    if (arr) {
      for (let i = 0; i < arr.children.length; i++) {
        me._removeClass(arr.children[i], "move");
        setTimeout(() => {
          arr.children[i].className = 'move';
        }, 500 + i * 2000)
      };
    }
  }
  componentDidMount() {
    let me = this;
    let arr = me.refs.doms;
    me._animate()
    clearInterval(timer);
    let timer = setInterval(() => {
      me._animate()
    }, arr.children.length * 2000 + 1500)
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
}
export default RandomBubble;
