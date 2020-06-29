import React, {Fragment} from 'react'
import Cookies from 'universal-cookie'
import './MiniTask.sass'
import done from './img/habit_done.png'
import undone from './img/habit_undone.png'
import dot_undone from './img/dot_undone.png'
import dot_done from './img/dot_done.png'
import dot_grey from './img/dot_grey.png'

const cookies = new Cookies()

const weekdays = [
    ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
    ['Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo'],
    ['We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu'],
    ['Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We'],
    ['Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th'],
    ['Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr'],
    ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
]

const countDaysFromStart = props => {

    let dateStart = new Date(props)
    let dateToday = new Date()
    dateStart.setHours(0)
    dateToday.setHours(0)
    dateToday.setMinutes(0)
    dateToday.setSeconds(0)
    return Math.round((dateToday.getTime() - dateStart.getTime()) / (1000 * 3600 * 24))
}

const middleHabit = props => {
    const mid = document.querySelectorAll('.habit')
    
    mid.forEach(habit => {
        if (habit.childNodes[0].firstChild.firstChild.innerText === props.title) {
            const midHabit = habit.querySelector('.middleHabit')
            const optHabit = habit.querySelector('.options')
            if (midHabit.style.display === 'flex') {
                midHabit.style.display = 'none'
                optHabit.style.display = 'none'
            }
            else {
                midHabit.style.display = 'flex'
            }
        }
    })
}

const handleHabitDone = props => {
    let mid = cookies.get('habits')
    mid.forEach(habit => {
        if (habit.title === props.title) {
            const diff = countDaysFromStart(props.start)
            if (habit.prog[diff] !== true) {
                habit.prog[diff] = true
                habit.progress++
            }
        }
    })
    cookies.set('habits', mid)
    window.location.reload()
}

const fillDays = () => {
    let dateToday = new Date()
    let day = dateToday.getDay()
    const daysTable = weekdays[day].map(day => {
        return <span>{day}</span>
    })
    return daysTable
}

const fillDots = props => {
    const diff = countDaysFromStart(props.start) + 1
    let long = props.prog.length
    let i = 0
    let dots = ''

    if (diff > long) {
        if (long > 6) {
            dots = props.prog.slice(long-6)
            dots.push(false)
        }
        
        else {
            dots = props.prog
            dots.push(false)
            i = 7 - dots.length
            for (let x = 0; x < i; x++) {
                dots.unshift(false)
            }
        }
    }

    else {
        if (long > 7) dots = props.prog.slice(long-7)
        
        else {
            dots = props.prog
            i = 7 - dots.length
            for (let x = 0; x < i; x++) {
                dots.unshift(false)
            }
        }
    }   

    const days = dots.map(day => {
        if (i !== 0) {
            i--
            return <img src={dot_grey} alt="dot"/>
        }
        else {
            if (day === true) return <img src={dot_done} alt="dot"/>
            else return <img src={dot_undone} alt="dot"/>
        }
    })
    return days
}

const handleMore = props => {
    const opt = document.querySelectorAll('.habit')
    
    opt.forEach(habit => {
        if (habit.childNodes[0].firstChild.firstChild.innerText === props.title) {
            const optHabit = habit.querySelector('.options')
            if (optHabit.style.display === 'block') optHabit.style.display = 'none'
            else optHabit.style.display = 'block'
        }
    })
}

const countProgress = props => {
    let days = countDaysFromStart(props.start) +1
    let done = 0
    props.prog.forEach(day => {
        if (day === true) done++
    })

    return Math.round(done/days*100)
}

const chooseConfirm = props => {
    const mid = cookies.get('habits')
    let ret = ''

    mid.forEach(habit => {
        if (habit.title === props.title) {
            const diff = countDaysFromStart(habit.start)
            if (habit.prog[diff] === true) ret = done
            else ret = undone
        }
    })
    return ret
}

const handleRemove = props => {
    if (window.confirm('Do you really want to delete this habit?')) {
        let habits = cookies.get('habits')
        const newHabits = habits.filter(habit => {
        return habit.title !== props.title
        })
        cookies.set('habits', newHabits)
        window.location.reload()
    }
}

const showCheckboxes = props => {
    let i = 0
    let checkboxes = ''
    checkboxes = props.prog.map(day => {
        i++
        if (day === true) return <label><input type="checkbox" defaultChecked/>Day {i}</label>
        else return <label><input type="checkbox"/>Day {i}</label>
    })
    return checkboxes
}

const handleEdit = props => {
    const edit = document.querySelectorAll('.habit')
    
    edit.forEach(habit => {
        if (habit.childNodes[0].firstChild.firstChild.innerText === props.title) {
            const optHabit = habit.querySelector('.edit')
            optHabit.style.display = 'block'
        }
    })
    document.querySelector('.body__blurClass').style.display = 'block'
}

const updateHabit = props => {

}

const closeEdit = props => {
    const edit = document.querySelectorAll('.habit')
    
    edit.forEach(habit => {
        if (habit.childNodes[0].firstChild.firstChild.innerText === props.title) {
            const optHabit = habit.querySelector('.edit')
            optHabit.style.display = 'none'
        }
    })
    document.querySelector('.body__blurClass').style.display = 'none'
}

const MiniTask = props => {
    return (
        <Fragment>
            <div className='habit'>
                <div className='miniHabit'>
                    <div className='miniHabit__txt'>
                        <div className='miniHabit__txt__title' onClick={middleHabit.bind(this, props.data)}>{props.title}</div>
                        <div className='miniHabit__txt__description'>{props.description}</div>
                    </div>
                    <div className='miniHabit__progress'>{props.progress}/{props.target}</div>
                    <div className='miniHabit__circle'></div>

                    <div className='middleHabit'>
                        <div className='middleHabit__txt'>
                            <div className='middleHabit__txt__week'>
                                {fillDays()}
                            </div>
                            <div className='middleHabit__txt__dots'>
                                {fillDots(props.data)}
                                <span onClick={handleMore.bind(this, props.data)}>More...</span>
                            </div>
                        </div>
                        <img src={chooseConfirm(props)} onClick={handleHabitDone.bind(this, props.data)} className='middleHabit__done' alt='done'/>
                    </div>
                    <div className='options'>
                        <div className='options__progress'>Your progress: {countProgress(props.data)}% success</div>
                        <div className='options__buttons'>
                            <div className='options__buttons__btn' onClick={handleEdit.bind(this, props.data)}>Edit</div>
                            <div className='options__buttons__btn' onClick={handleRemove.bind(this, props.data)}>Remove</div>
                        </div>
                    </div>
                </div>
                <div className='edit'>
                    <span className='edit__title'>{props.title}</span>
                    <input className='edit__input' placeholder={props.description} type='text'></input>
                    <input className='edit__input' placeholder={'Target: ' + props.target} type='number'></input>
                    <div className='edit__checkboxes'>{showCheckboxes(props.data)}</div>
                    <div className='edit__buttons'>
                        <div className='edit__buttons__btn' onClick={updateHabit.bind(this, props.data)}>Save</div>
                        <div className='edit__buttons__btn' onClick={closeEdit.bind(this, props.data)}>Close</div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default MiniTask