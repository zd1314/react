/**redux----案例 */
/**
 * store就是保存数据的地方，你可以把它看成一个数据，整个应用智能有一个store;
 * Redux提供createStore这个函数，用来生成Store;
 * Redux规定一个state对应一个View,只要state相同，view就是一样的，反过来也是一样的，可以通过     store.getState( )获取;
 * 在Redux中提供了一个对象来告诉Store需要改变state。Action是一个对象其中type属性是必须的，表示Action的名称，
 * store.dispatch( )是view发出Action的唯一办法;
 * Reducer是一个纯函数，他接收Action和当前state作为参数，返回一个新的state;
 */
import React from 'react';
import { createStore } from 'redux';
class Redux extends React.Component {
  constructor(props) {
    super(props);

  }
  add() {
    const me = this;
    me.store.dispatch({ type: 'INCREMENT' });
  }
  delete() {
    const me = this;
    me.store.dispatch({ type: 'DECREMENT' });
  }
  /**createStore封装----start */
  createStore() {
    const me = this;
    let state;
    let listeners = [];
    let getState = () => state;//获取state
    let dispatch = (action) => { //store.dispatch( )是view发出Action的唯一办法
      state = me.reducer(state, action); //reducer返回新的state
      listeners.forEach(l => l())
    }
    let subscribe = (listener => {
      listeners.push(listener)
      return () => {
        listeners = listeners.filter((l) => l != listener)
      }
    })
    dispatch()
    return {
      getState,
      dispatch,
      subscribe
    }
  }
  /**createStore封装----end */
  reducer(state = 0, action) {
    if (!action) return state;
    switch (action.type) {
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state - 1
      default:
        return state
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.add.bind(this)} style={{ width: 20, height: 20 }}>+</button>
        <input type='text' placeholder='请输入' ref='input' style={{
          width: 40, marginLeft: 5, height: 20,
          border: '2px solid blue', textAlign: 'center',
          color: 'red',
          fontSize: 12
        }} />
        <button onClick={this.delete.bind(this)} style={{ width: 20, height: 20, marginLeft: 5 }}>-</button>
      </div>
    )
  }
  componentDidMount() {
    const me = this;
    me.store = createStore(me.reducer);
    me.store.subscribe(function () {
      me.refs.input.value = me.store.getState();
    });
  }
}

export default Redux;