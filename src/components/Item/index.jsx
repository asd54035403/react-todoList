import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  state = {mouse:false,editInput:false}

  //鼠標移入和移出的回調
  handleMouse=(flag)=>{
    return ()=>{
      this.setState({mouse:flag})
    }
  }

  //勾選、取消勾選某一個todo的回調
  handleCheck=(id)=>{
    return (event)=>{
      this.props.upDateTodoCheck(id,event.target.checked)
    }
  }

  handleEditKeyUp=(id,event)=>{
    // 解構賦值獲取keyCode,target
    const{keyCode,target} =event
    //按下ESC退出
    if(keyCode ==27){
      this.setState({editInput:false})
    }
    // 判斷是否為Enter
    if(keyCode !==13)return
    //新增的todo不能為空
    if(target.value.trim()===''){
      alert('輸入不能為空白')
      return
    }
    this.props.upDateTodo(id,target.value)
    this.setState({editInput:false})
    
  }

  //handleEdit
  handleEdit=()=>{
    
    this.setState({editInput:true})
  }

  //刪除一個todo的回調
  handleDelete=(id)=>{
    if(window.confirm('確定刪除嗎')){
      this.props.deleteTodo(id)
    }
  }
  
  render() {
    const{id,name,done} = this.props
    const {mouse,editInput} = this.state
    return (
      <li style={{backgroundColor:mouse?'#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox"  checked={done} onChange={this.handleCheck(id)}/>
          <span style={{display: editInput?'none':'inline'}}>{name}</span>
          <input type="text"  onKeyUp={(event)=>this.handleEditKeyUp(id,event)} placeholder="按下Enter確認" style={{display: editInput?'inline':'none'}}/>
        </label>
        <button onClick={()=>this.handleDelete(id)} className="btn btn-danger fa-solid fa-trash" style={{ display: mouse?'block':'none' }}></button>
        <button onClick={()=>{this.handleEdit()}} className='btn  btn-blue fa-solid fa-pen-to-square'style={{display:mouse?'block':'none'}}></button>
      </li>
      
    )
  }
}
