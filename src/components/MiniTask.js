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
            if (midHabit.style.display === 'flex') midHabit.style.display = 'none'
            else midHabit.style.display = 'flex'
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
            
            console.log(habit.prog)
            console.log(habit)
        }
    })
    cookies.set('habits', mid)
    // console.log(cookies.get('habits'))
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

const MiniTask = props => {
    return (
        <Fragment>
            <div className='habit'>
                <div  onClick={middleHabit.bind(this, props.data)} className='miniHabit'>
                    <div className='miniHabit__txt'>
                        <div className='miniHabit__txt__title'>{props.title}</div>
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
                                <span>More...</span>
                            </div>
                        </div>
                        <img src={chooseConfirm(props)} onClick={handleHabitDone.bind(this, props.data)} className='middleHabit__done' alt='done'/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default MiniTask