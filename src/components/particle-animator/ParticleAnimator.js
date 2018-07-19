import React, { Component } from 'react';

import './ParticleAnimator.css'
/**粒子动画 */

class ParticleAnimator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  };
  _random(m, n) {
    m = parseInt(m);
    n = parseInt(n);
    return Math.floor(Math.random() * (n - m + 1)) + m;
  }
  _bubble() {
    let me = this;
    // let num = Math.floor(Math.random() * (100 - 2 + 1)) + 2
    for (let i = 0; i < 30; i++) {
      this.state.data.push(i)
    }
  }

  render() {
    let me = this;
    me._bubble()
    return (
      <div >
        <div className={"textcontainer"} ref={'dom'} >
          <span className={"particletext bubbles"}> 22222</span>
          {
            this.state.data.map((s, i) => {
              let size = (me._random(40, 80) / 15);
              return < span className={"particle"} key={i} style={{
                width: size + 'px',
                height: size + 'px',
                position: 'absolute',
                left: me._random(0, 37) + '%',
                top: me._random(0, 25) + '%',
                animationDelay: me._random(0, 10) + 's'
              }} ></span>
            })
          }

        </div>
      </div >
    )
  }
  componentDidMount() {
  }
}
export default ParticleAnimator;