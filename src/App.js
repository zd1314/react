import React, { Component } from 'react';
import { HashRouter, Link, Route } from 'react-router-dom';
import ResizeManager from './components/common/ResizeManager';
/* css */
import './App.css';
/* 模块 */
import Platform from './pages/platform-construction/platform';
import Operation from './pages/operation-surveillance/operation';
import Regional from './pages/regional-analysis/regional';
import Base from './pages/base-analysis/base';
import City from './pages/city-surveillance/city';
import Industy from './pages/industry-credit/industy';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div ref={'scene'} style={{
          width: 1280,
          height: 704,
          position: 'relative',
        }}>
          <ResizeManager fullWidth='1280' fullHeight='704' mode={ResizeManager.MODE_DEBUG} />
          <ul className={'nav'}>
            <li className={'nav-item'}>
              <div className={'nav-content'}>
                <p><Link to='/'>首页</Link></p>
              </div>
            </li>
            <li className={'nav-item'}>
              <div className={'nav-content'}>
                <p><Link to='/operation-surveillance'>详情页</Link></p>
              </div>
            </li>
            <li className={'nav-item'}>
              <div className={'nav-content'}>
                <p><Link to='/regional-analysis'>列表页</Link></p>
              </div>
            </li>
            <li>
              <p>可视化检测中心</p>
            </li>
            <li className={'nav-item'}>
              <div className={'nav-content'}>
                <p><Link to='/base-analysis'>产品页</Link></p>
              </div>
            </li>
            <li className={'nav-item'}>
              <div className={'nav-content'}>
                <p><Link to='/city-surveillance'>宣传页</Link></p>
              </div>
            </li>
            <li className={'nav-item'}>
              <div className={'nav-content'}>
                <p><Link to='/industry-credit'>设计页</Link></p>
              </div>
            </li>
          </ul>

          <Route exact path='/' component={Platform} />
          <Route path='/industry-credit' component={Industy} />
          <Route path='/city-surveillance' component={City} />
          <Route path='/base-analysis' component={Base} />
          <Route path='/regional-analysis' component={Regional} />
          <Route path='/operation-surveillance' component={Operation} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
