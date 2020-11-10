import React, {Fragment} from 'react'
import './CompletedTask.sass'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

const countDone = props => {
    let done = 0
    props.forEach(day => {
        if (day.done === true) done++
    })
    return done
}

const confirmDelete = props => {
    let habits = cookies.get('habitsDone')
    const newHabits = habits.filter(habit => {
    return habit.title !== props.title
    })
    cookies.set('habitsDone', newHabits)
    window.location.reload()
}

const CompletedTask = props => {
    const habit = props.habit
    return (
        <Fragment>
            <div onClick={confirmDelete.bind(this, props)} className='task'>
                <div className='task__title'>{habit.title} </div>
                <div className='task__info'>Finished: {habit.days[habit.days.length-1].day}</div>
                <div className='task__info'>Success: {countDone(habit.days)}/{habit.days.length} ({Math.round(countDone(habit.days)/habit.days.length*100)}%)</div>
            </div>
        </Fragment>
    )
}

export default CompletedTask