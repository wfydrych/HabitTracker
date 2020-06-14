import React, {Component} from 'react'
import './App.sass'
import Menu from './Menu'
import List from './List'
import Add from './Add'

class App extends Component {
  state = {

  }
  
  render() {
  return (
    <div className='body'>
      <Menu></Menu>
      <List></List>
      <Add></Add>
    </div>
  )}
}

export default App
