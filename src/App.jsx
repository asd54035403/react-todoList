import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
  //狀態在哪裡 操作狀態的方法就在哪裡
  
  //初始化狀態
  state = {todos: [
    { id: '001', name: '吃飯', done: true },
    { id: '002', name: '睡覺', done: false },
    { id: '003', name: '寫程式', done: false },
    { id: '004', name: '逛街', done: true },
  ]}

  //addTodo用於新增一個todo 接收的參數是一個todo物件
  addTodo = (todoObj)=>{
    //獲取原todos
    const {todos} = this.state
    //追加一個todo
    const newTodos = [todoObj,...todos]
    //更新狀態
    this.setState({todos:newTodos})
  }

  //upDateTodoCheck用於更新一個todo物件的check
  upDateTodoCheck=(id,done)=>{
    //獲取原todos
    const {todos} = this.state
    //更新符合ID的資料
    const newTodos = todos.map((todoObj)=>{
      if(todoObj.id === id)return{...todoObj,done:done}
      else return todoObj
    })
    this.setState({todos:newTodos})
  }

  //upDateTodo用於更新一個todo物件的內容
  upDateTodo=(id,name)=>{
    //獲取原todos
    const {todos} = this.state
    //更新符合ID的資料
    const newTodos = todos.map((todoObj)=>{
      if(todoObj.id === id)return{...todoObj,name:name}
      else return todoObj
    })
    this.setState({todos:newTodos})
  }

  //deleteTodo用於刪除一個todo物件
  deleteTodo=(id)=>{
    //獲取原來的todos
    const{todos} = this.state
    //刪除指定id的todo物件
    const newTodos = todos.filter((todoObj)=>{
      return todoObj.id !== id
    })
    //更新狀態
    this.setState({todos:newTodos})
  }

  //checkAllTodo用於全選
  checkAllTodo=(done)=>{
    //獲取原來的todos
    const{todos}= this.state
    //更新數據
    const newTodos = todos.map((todoObj)=>{
      return{...todoObj,done:done}
    })
    //更新狀態
    this.setState({todos:newTodos})
  }

  //清除所有已完成的todo
  clearAllDone=()=>{
    //獲取原來的todos
    const{todos} = this.state
    //過濾資料
    const newTodos = todos.filter((todoObj)=>{
      return todoObj.done === false
    })
    this.setState({todos:newTodos})
  }

  render() {
    const{todos}=this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header  addTodo={this.addTodo}/>
          <List todos={todos} upDateTodo={this.upDateTodo} upDateTodoCheck={this.upDateTodoCheck} deleteTodo={this.deleteTodo}/>
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
        </div>
      </div>
    )
  }
}
