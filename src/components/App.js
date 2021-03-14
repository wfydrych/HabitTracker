import React, {Component} from 'react'
import './App.sass'
import Cookies from 'universal-cookie'
import Menu from './Menu'
import List from './List'
import Add from './Add'
import Start from './Start'
import Login from './Login'
import Register from './Register'

const cookies = new Cookies()

class App extends Component {
  state = {

  }

  componentDidMount() {
    let start = cookies.get('start')
        if (start === 'undefined' || start === undefined || start.length === 0) {
            document.querySelector('.body__app').style.display = 'none'
            document.querySelector('.start').style.display = 'block'
            cookies.set('start', true)
        }

        else {
            document.querySelector('.body__app').style.display = 'block'
            document.querySelector('.start').style.display = 'none'
        }
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
