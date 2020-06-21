import React, {Fragment} from 'react'
import Cookies from 'universal-cookie'
import './MiniTask.sass'
import done from './img/habit_done.png'
import undone from './img/habit_undone.png'
import dot_undone from './img/dot_undone.png'

const cookies = new Cookies()

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
            habit.prog[habit.prog.length-1] = true
        }
    })
    cookies.set('habits', mid)
    console.log(cookies.get('habits'))
}

const MiniTask = props => {
    return (
        <Fragment>
            <div className='habit'>
                <div className='miniHabit'>
                    <div className='miniHabit__txt'>
                        <div className='miniHabit__txt__title'>{props.title}</div>
                        <div className='miniHabit__txt__description'>{props.description}</div>
                    </div>
                    <div onClick={middleHabit.bind(this, props.data)} className='miniHabit__progress'>{props.progress}/{props.target}</div>
                    <div className='miniHabit__circle'></div>

                    <div className='middleHabit'>
                        <div className='middleHabit__txt'>
                            <div className='middleHabit__txt__week'>
                                <span>Mo</span>
                                <span>Tu</span>
                                <span>We</span>
                                <span>Th</span>
                                <span>Fr</span>
                                <span>Sa</span>
                                <span>Su</span>
                            </div>
                            <div className='middleHabit__txt__dots'>
                                <img src={dot_undone} alt='dot'/>
                                <img src={dot_undone} alt='dot'/>
                                <img src={dot_undone} alt='dot'/>
                                <img src={dot_undone} alt='dot'/>
                                <img src={dot_undone} alt='dot'/>
                                <img src={dot_undone} alt='dot'/>
                                <img src={dot_undone} alt='dot'/>
                            </div>
                        </div>
                        <img src={undone} onClick={handleHabitDone.bind(this, props.data)} className='middleHabit__done' alt='done'/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default MiniTask