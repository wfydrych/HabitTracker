import React, {Component, Fragment} from 'react'
import Cookies from 'universal-cookie'
import './List.sass'
import MiniTask from './MiniTask'

const cookies = new Cookies()

const habits =  [
    {
        title: 'Reading',
        description: 'At least 30 pages a day',
        progress: 21,
        target: 50,
        color: '#FFDC81',
        start: '2020-06-19',
        prog: [true, false, false]
    },
    {
        title: 'Workout',
        description: 'You can do it!',
        progress: 8,
        target: 50,
        color: '#FF8181',
        start: '2020-06-17',
        prog: [true, false, false]
    },
    {
        title: 'Play the piano',
        description: 'Be a Mozart, lol',
        progress: 37,
        target: 50,
        color: '#81D1FF',
        start: '2020-06-15',
        prog: [false, true, false]
    },
    {
        title: 'Learn new language',
        description: 'Be a polyglot in 1 year',
        progress: 45,
        target: 50,
        color: '#B8FF81',
        start: '2020-06-20',
        prog: [false, false]
    },
]

// cookies.set('habits', habits)

class List extends Component {

    state = {
    }

    componentDidMount() {
        const circles = document.querySelectorAll('.miniHabit__circle')
        let i = 0
        let habits = cookies.get('habits')
        circles.forEach(circle => {
            let prog = (((1 - (habits[i].progress / habits[i].target)) * 100) + 10) * (-1)
            circle.style.left = prog + '%'
            circle.style.background = habits[i++].color
        })
    }

    createHabitList() {
        let habits = cookies.get('habits')
        if (habits !== undefined) {
            if (habits.length !== 0) {
                habits = habits.map(habit => {
                    return <MiniTask key={habit.title} data={habit} title={habit.title} description={habit.description} progress={habit.progress} target={habit.target} color={habit.color}></MiniTask>
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