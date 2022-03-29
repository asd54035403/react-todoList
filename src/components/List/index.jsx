import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {

  //對接收的props進行:類型、必要性的限制
  static propTypes = {
    todos: PropTypes.array.isRequired,
    upDateTodoCheck:PropTypes.func.isRequired,
    deleteTodo:PropTypes.func.isRequired,
  }

  render() {
    const { todos, upDateTodoCheck,deleteTodo,upDateTodo } = this.props
    return (
      <ul className="todo-main">
        {
          todos.map((todo) => {
            return <Item {...todo} key={todo.id}  upDateTodo={upDateTodo} upDateTodoCheck={upDateTodoCheck} deleteTodo={deleteTodo}/>
          })
        }

      </ul>
    )
  }
}
