import React, {Component, Fragment} from 'react'
// import Cookies from 'universal-cookie'
import './Menu.sass'
import menuBtn from './img/menu_btn.png'

// const cookies = new Cookies()

class Menu extends Component {

    state = {
        
    }
    
    render () {
    return (
        <Fragment>
            <div className='menu'>
                <span className='menu__title'>Habit Tracker</span>
                <img src={menuBtn} className='menu__Btn' alt='menuBtn' onClick={this.handleMenuBtn} />
            </div>
        </Fragment>
    )}
}

export default Menu