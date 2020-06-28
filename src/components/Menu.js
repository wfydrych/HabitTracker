import React, {Component, Fragment} from 'react'
// import Cookies from 'universal-cookie'
import './Menu.sass'
import menuBtn from './img/menu_btn.png'

// const cookies = new Cookies()

class Menu extends Component {

    state = {
        
    }

    handleMenuBtn = () => {
        const menu = document.querySelector('.menuSlider')
        if (menu.style.display === 'none') menu.style.display = 'block'
        else menu.style.display = 'none'
    }

    handleAbout = () => {
        document.querySelector('.about').style.display = 'block'
        document.querySelector('.menuSlider').style.display = 'none'
    }

    handleContact = () => {
        document.querySelector('.contact').style.display = 'block'
        document.querySelector('.menuSlider').style.display = 'none'
    }

    handleClose = () => {
        document.querySelector('.contact').style.display = 'none'
        document.querySelector('.about').style.display = 'none'
    }

    componentDidMount = () => {
        document.querySelector('.menuSlider').style.display = 'none'
        document.querySelector('.contact').style.display = 'none'
        document.querySelector('.about').style.display = 'none'
    }
    
    render () {
    return (
        <Fragment>
            <div className='menu'>
                <span className='menu__title'>Habit Tracker</span>
                <img src={menuBtn} className='menu__Btn' alt='menuBtn' onClick={this.handleMenuBtn} />
            </div>
            <div className='menuSlider'>
                <ul>
                    <li>Log in</li>
                    <li onClick={this.handleAbout}>About</li>
                    <li onClick={this.handleContact}>Contact</li>
                </ul>
            </div>
            <div className='about'>
                <div className='about__title'>About</div>
                <div className='about__txt'>Habit Tracker v0.1</div>
                <div className='about__closeBtn' onClick={this.handleClose}>Close</div>
            </div>
            <div className='contact'>
                <div className='contact__title'>Contact</div>
                <div className='contact__txt'>wfydrych@gmail.com</div>
                <div className='contact__closeBtn' onClick={this.handleClose}>Close</div>
            </div>
        </Fragment>
    )}
}

export default Menu