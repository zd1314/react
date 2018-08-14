import React from 'react';
import './environmentalCarrying.css';

class Envionmental extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <div>
      <div className={'title-icon'}>
        <span>正常</span>
        <span>预警</span>
      </div>
      <div className={'content-animate'}>
        <ul className={'left-items'}>
          <li>
            <span></span>
            <span></span>
            <span></span>
          </li>
        </ul>
      </div>
    </div>
  }
  componentDidMount() {

  }
}
export default Envionmental;