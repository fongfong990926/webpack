//应用组件
import React, { Component } from 'react';
import TodoHeader from  '../TodoHeader/header'
import TodoMain from  '../TodoMain/mian'
import TodoItem from '../TodoItem/item'
import TodoFooter from  '../TodoFooter/footer'
import './app.scss'

class App extends Component {
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
            <TodoHeader />
            <TodoMain />
            <TodoFooter />
        </div>
      </div>
    );
  }
}

export default App;
