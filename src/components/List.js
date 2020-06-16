import React, {Component, Fragment} from 'react'
// import Cookies from 'universal-cookie'
import './List.sass'
import MiniTask from './MiniTask'

// const cookies = new Cookies()

class List extends Component {

    state = {
        habits: [
            {
                title: 'Reading',
                description: 'At least 30 pages a day',
                progress: 21,
                target: 50,
                color: '#FFDC81'
            },
            {
                title: 'Workout',
                description: 'You can do it!',
                progress: 8,
                target: 50,
                color: '#FF8181'
            },
            {
                title: 'Play the piano',
                description: 'Be a Mozart, lol',
                progress: 37,
                target: 50,
                color: '#81D1FF'
            },
        ]
    }

    componentDidMount() {
        const circles = document.querySelectorAll('.miniTask__circle')
        let i = 0
        circles.forEach(circle => {
            let prog = (((1 - (this.state.habits[i].progress / this.state.habits[i].target)) * 100) + 10) * (-1)
            circle.style.left = prog + '%'
            circle.style.background = this.state.habits[i++].color
        })
    }

    createHabitList() {
        const habits = this.state.habits.map(habit => {
            return <MiniTask key={habit.title} title={habit.title} description={habit.description} progress={habit.progress} target={habit.target} color={habit.color}></MiniTask>
        })
        return habits
    }
    
    render () {
    return (
        <Fragment>
            {this.createHabitList()}
        </Fragment>
    )}
}

export default List