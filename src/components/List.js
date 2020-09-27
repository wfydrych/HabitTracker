import React, {Component, Fragment} from 'react'
import Cookies from 'universal-cookie'
import './List.sass'
import MiniTask from './MiniTask'

const cookies = new Cookies()

const habits =  [
    {
        title: 'Reading',
        description: 'At least 30 pages a day',
        color: '#FFDC81',
        days: [
            {
                day: '2020-08-18', 
                done: false
            },
            {
                day: '2020-08-19', 
                done: true
            },
            {
                day: '2020-08-20', 
                done: false
            },
            {
                day: '2020-08-21', 
                done: true
            },
        ]
    },
    {
        title: 'Workout',
        description: 'You can do it!',
        color: '#FF8181',
        days: [
            {
                day: '2020-08-18', 
                done: true
            },
            {
                day: '2020-08-19', 
                done: false
            },
            {
                day: '2020-08-20', 
                done: false
            },
        ]
    },
    {
        title: 'Play the piano',
        description: 'Be a Mozart, lol',
        color: '#81D1FF',
        days: [
            {
                day: '2020-08-18', 
                done: true
            },
            {
                day: '2020-08-19', 
                done: false
            },
            {
                day: '2020-08-20', 
                done: true
            },
            {
                day: '2020-08-21', 
                done: true
            },
        ]
    },
    {
        title: 'Learn new language',
        description: 'Be a polyglot in 1 year',
        color: '#B8FF81',
        days: [
            {
                day: '2020-08-18', 
                done: true
            },
            {
                day: '2020-08-19', 
                done: false
            },
            {
                day: '2020-08-20', 
                done: true
            },
            {
                day: '2020-08-21', 
                done: false
            },
            {
                day: '2020-08-22', 
                done: true
            },
        ]
    },
]

cookies.set('habits', habits)

class List extends Component {

    state = {
    }

    countDoneDays = props => {
        let done = 0
        props.forEach(day => {
            if (day.done === true) done++
        })
        return done
    }

    componentDidMount() {
        const circles = document.querySelectorAll('.miniHabit__circle')
        let i = 0
        let habits = cookies.get('habits')

        circles.forEach(circle => {
            let prog = (((1 - (this.countDoneDays(habits[i].days) / habits[i].days.length)) * 100) + 10) * (-1)
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
                    return <MiniTask key={habit.title} data={habit.days} title={habit.title} description={habit.description} color={habit.color}></MiniTask>
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