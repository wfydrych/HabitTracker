import React, {Component, Fragment} from 'react'
import Cookies from 'universal-cookie'
import './Add.sass'
import addBtn from './img/add_btn.png'

const cookies = new Cookies()

class Add extends Component {

    state = {
        title: '',
        days: '',
        description: '',
        color: '#81D1FF'
    }

    getDate = data => {
        const time = new Date(data)
        let date = time.getFullYear() + '-'
        if (time.getMonth() < 9) date += '0'
        date += time.getMonth() +1
        date += '-'
        if (time.getDate() < 10) date += '0'
        date += time.getDate()
        return date
    }

    handleShowHabitMenu = () => {
        document.querySelector('.addMenu').style.display = 'block'
        document.querySelector('.body__blurClass').style.display = 'block'
    }

    handleHideHabitMenu = () => {
        document.querySelector('.addMenu').style.display = 'none'
        document.querySelector('.body__blurClass').style.display = 'none'
    }

    handleTitleChange = e => {
        this.setState({
            title: e.target.value
        })
    }

    handleDaysChange = e => {
        this.setState({
            days: e.target.value
        })
    }

    handleDescriptionChange = e => {
        this.setState({
            description: e.target.value
        })
    }

    handleColor = props => {
        this.setState({
            color: props
        })
        const dots = document.querySelectorAll('.addMenu__colors__dot')
        dots.forEach(dot => {
            dot.classList.remove('activeDot')
        })
        switch(props) {
            case '#81D1FF': 
                dots[0].classList.add('activeDot')
                break
            case '#FF8181': 
                dots[1].classList.add('activeDot')
                break
            case '#FFDC81': 
                dots[2].classList.add('activeDot')
                break
            case '#B8FF81': 
                dots[3].classList.add('activeDot')
                break
            case '#B181FF': 
                dots[4].classList.add('activeDot')
                break
            default:
                break
        }
    }

    handleAddHabit = () => {
        let days = []
        const today = new Date()

        for (let i=0; i<this.state.days; i++) {
            let data = this.getDate(new Date().setDate(today.getDate() + i))

            days[i] = {
                day: data, 
                done: false
            }
        }

        const data = {
            title: this.state.title, 
            days: days,
            description: this.state.description,
            color: this.state.color
        }

        const err = document.querySelector('.err')
        err.innerHTML = ''

        if (data.title.length > 3) 
        {
            if (data.days.length > 0)
            {
                let habits = cookies.get('habits')
                if (habits === undefined) {
                    let habit = []
                    habit.push(data)
                    cookies.set('habits', habit)
                    window.location.reload()
                }
                else {
                    habits.push(data)
                    cookies.set('habits', habits)
                    window.location.reload()
                }
            }
            else err.innerHTML = 'Choose length of habit!'
        }
        else err.innerHTML = 'Habit must have at least 3 signs!'
    }
    
    render () {
    return (
        <Fragment>
            <div className='addBtnBg'>
                <img src={addBtn} className='addBtn' alt='addBtn' onClick={this.handleShowHabitMenu} />
            </div>
            <div className='addMenu'>
                <span className='addMenu__header'>Add new habit</span>
                <input className='addMenu__input' value={this.state.title} onChange={this.handleTitleChange} placeholder='title' type='text'></input>
                <input className='addMenu__input' value={this.state.days} onChange={this.handleDaysChange} placeholder='days' type='number'></input>
                <input className='addMenu__input' value={this.state.description} onChange={this.handleDescriptionChange} placeholder='description' type='text'></input>
                <span className='addMenu__colorSpan'>color</span>
                <div className='addMenu__colors'>
                    <div className='addMenu__colors__dot activeDot' onClick={this.handleColor.bind(this, '#81D1FF')}></div>
                    <div className='addMenu__colors__dot' onClick={this.handleColor.bind(this, '#FF8181')}></div>
                    <div className='addMenu__colors__dot' onClick={this.handleColor.bind(this, '#FFDC81')}></div>
                    <div className='addMenu__colors__dot' onClick={this.handleColor.bind(this, '#B8FF81')}></div>
                    <div className='addMenu__colors__dot' onClick={this.handleColor.bind(this, '#B181FF')}></div>
                </div>
                <div className='addMenu__buttons'>
                    <div className='addMenu__buttons__btn' onClick={this.handleAddHabit}>Add</div>
                    <div className='addMenu__buttons__btn' onClick={this.handleHideHabitMenu}>Close</div>
                </div>
                <span className='err'></span>
            </div>
        </Fragment>
    )}
}

export default Add