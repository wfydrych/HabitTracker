import React, {Component, Fragment} from 'react'
import Cookies from 'universal-cookie'
import './List.sass'
import MiniTask from './MiniTask'

const cookies = new Cookies()

const habits =  [
    {
        title: 'Reading',
        description: 'At least 30 pages a day',
        target: 20,
        color: '#FFDC81',
        start: '2020-06-25',
        prog: [true, false, false, true, true, false, true, true, false]
    },
    {
        title: 'Workout',
        description: 'You can do it!',
        target: 25,
        color: '#FF8181',
        start: '2020-07-02',
        prog: [true, false]
    },
    {
        title: 'Play the piano',
        description: 'Be a Mozart, lol',
        target: 5,
        color: '#81D1FF',
        start: '2020-07-01',
        prog: [false, true, false]
    },
    {
        title: 'Learn new language',
        description: 'Be a polyglot in 1 year',
        target: 10,
        color: '#B8FF81',
        start: '2020-06-28',
        prog: [true, true, false, true, true, false]
    },
]

// cookies.set('habits', habits)

class List extends Component {

    state = {
    }

    countDaysFromStart = props => {

        let dateStart = new Date(props)
        let dateToday = new Date()
        dateStart.setHours(0)
        dateToday.setHours(0)
        dateToday.setMinutes(0)
        dateToday.setSeconds(0)
        return Math.round((dateToday.getTime() - dateStart.getTime()) / (1000 * 3600 * 24))
    }

    countDoneDays = props => {
        let done = 0
        props.forEach(day => {
            if (day === true) done++
        })
        return done
    }

    componentDidMount() {
        const circles = document.querySelectorAll('.miniHabit__circle')
        let i = 0
        let habits = cookies.get('habits')

        habits = habits.map(habit => {
            const leng = this.countDaysFromStart(habit.start)
            console.log(leng)
            for (let x=0; x<leng; x++) {
                if (habit.prog[x] !== true) habit.prog[x] = false
            }
            return habit
        })

        circles.forEach(circle => {
            let prog = (((1 - (this.countDoneDays(habits[i].prog) / habits[i].target)) * 100) + 10) * (-1)
            circle.style.left = prog + '%'
            circle.style.background = habits[i++].color
        })

        cookies.set('habits', habits)
    }

    createHabitList() {
        let habits = cookies.get('habits')
        if (habits !== undefined) {
            if (habits.length !== 0) {
                habits = habits.map(habit => {
                    return <MiniTask key={habit.title} data={habit} title={habit.title} description={habit.description} target={habit.target} color={habit.color}></MiniTask>
                })
                return habits
            }
            else return null
        }
        else return null
    }
    
    render () {
    return (
        <Fragment>
            <div className='list'>
                {this.createHabitList()}
            </div>
        </Fragment>
    )}
}

export default List