import React, {Component, Fragment} from 'react'
import Cookies from 'universal-cookie'
import './Menu.sass'
import CompletedTask from './CompletedTask'
import menuBtn from './img/menu_btn.png'
import user from './img/user_icon.png'
import about from './img/about_icon.png'
import arrow from './img/arrow-right.png'

const cookies = new Cookies()

class Menu extends Component {

    state = {
        
    }

    handleMenuBtn = () => {
        document.querySelector('.menuSlider').style.display = 'flex'
        document.querySelector('.body__blurClass').style.display = 'block'  
        document.querySelector('.menu__arrow').style.display = 'block' 
        document.querySelector('.menu__Btn').style.display = 'none'
    }

    handleMenuClose = () => {
        document.querySelector('.menuSlider').style.display = 'none'
        document.querySelector('.body__blurClass').style.display = 'none'
        document.querySelector('.account').style.display = 'none'
        document.querySelector('.menu__arrow').style.display = 'none'
        document.querySelector('.menu__Btn').style.display = 'block'
    }

    handleAccount = () => {
        document.querySelector('.account').style.display = 'flex'
        document.querySelector('.menuSlider').style.display = 'none'
        document.querySelector('.body__blurClass').style.display = 'block'
    }

    handleClose = () => {
        document.querySelector('.contact').style.display = 'none'
        document.querySelector('.about').style.display = 'none'
    }

    showCompletedHabits = () => {
        const habitsWindow = document.querySelector('.menuSlider__completedHabits')
        if (habitsWindow.style.display === 'block') habitsWindow.style.display = 'none'
        else habitsWindow.style.display = 'block'
    }

    handleCompletedHabits = () => {
        let habits = cookies.get('habitsDone')

        habits = habits.map(habit => {
            return <CompletedTask habit={habit}></CompletedTask>
        })

        return habits
    }

    componentDidMount = () => {
        document.querySelector('.menuSlider').style.display = 'none'
        document.querySelector('.account').style.display = 'none'
    }
    
    render () {
    return (
        <Fragment>
            <div className='menu'>
                <span className='menu__title'>Habit Tracker</span>
                <img src={menuBtn} className='menu__Btn' alt='menuBtn' onClick={this.handleMenuBtn} />
                <img src={arrow} className='menu__arrow' alt='menuBtn' onClick={this.handleMenuClose} />
            </div>
            <div className='menuSlider'>
                <div className='menuSlider__title'>Menu</div>
                <div className='menuSlider__link' onClick={this.showCompletedHabits}>Completed habits</div>
                <div className='menuSlider__completedHabits'>{this.handleCompletedHabits()}</div>
                <div className='menuSlider__break'></div>
                <div className='menuSlider__link' onClick={this.handleAccount}><img src={user} alt='user' />Your account</div>
                <div className='menuSlider__link' onClick={this.handleAbout}><img src={about} alt='about' />About application</div>
            </div>
            <div className='account'>
                <div className='menuSlider__title'><img src={user} alt='user' />Your account</div>
                <div className='menuSlider__link'>Change password</div>
                <div className='menuSlider__link'>Delete account</div>
                <div className='menuSlider__break'></div>
                <div className='menuSlider__link' onClick={this.handleAbout}><img src={about} alt='about' />About application</div>
            </div>
        </Fragment>
    )}
}

export default Menu