import React from 'react';
import './dialog.css';
/*模态框封装
left 
top
width
height
 */
class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'none'
    };
  }

  show() {
    this.setState({
      display: 'block'
    });
  }

  close() {
    let me = this;
    this.setState({
      display: 'none'
    });
    if (!me.props.onSelectChange) {
      return
    }
    let propsEventChange = me.props.onSelectChange;
    if (!propsEventChange || typeof propsEventChange !== 'function') {
      throw new Error(`The props.onSelectChange of the Select component ${me.props.name || ''} is not correct.`)
    } else {
      propsEventChange();
    }
  }

  setPosition(site) {
    this.setState({
      top: site.y,
      left: site.x
    });
  }

  render() {
    let me = this;
    return (
      <div
        className={'dialogContentBox'}
        style={{
          position: 'absolute',
          left: me.state.left || me.props.left || 0,
          top: me.state.top || me.props.top || 0,
          width: me.props.width,
          height: me.props.height,
          display: this.state.display,
          zIndex: 10
        }}>
        <span className="diaLogClose" onClick={() => {
          me.close();
        }}></span>
        {this.props.children}
      </div>
    );
  }
};

export default Page;
