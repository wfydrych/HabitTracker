import React, {Fragment} from 'react'
import './CompletedTask.sass'

const countDone = props => {
    let days = props.length
    let done = 0
    props.forEach(day => {
        if (day.done === true) done++
    })
    return done
    // return Math.round(done/days*100)
}

const CompletedTask = props => {
    const habit = props.habit
    return (
        <Fragment>
            <div className='task'>
                <div className='task__title'>{habit.title} </div>
                <div className='task__info'>Finished: {habit.days[habit.days.length-1].day}</div>
                <div className='task__info'>Success: {countDone(habit.days)}/{habit.days.length} ({Math.round(countDone(habit.days)/habit.days.length*100)}%)</div>
            </div>
        </Fragment>
    )
}

export default CompletedTask