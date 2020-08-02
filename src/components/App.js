import React, {Component} from 'react'
import './App.sass'
import Menu from './Menu'
import List from './List'
import Add from './Add'
import Start from './Start'
import Login from './Login'
import Register from './Register'

class App extends Component {
  state = {

  }
  
  render() {
  return (
    <div className='body'>
      <div className='body__app'>
        <Menu></Menu>
        <List></List>
        <Add></Add>
      </div>
      <Start></Start>
      <Login></Login>
      <Register></Register>
      <div className='body__blurClass'></div>
    </div>

  )}
}

export default App
