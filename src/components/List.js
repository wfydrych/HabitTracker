import React, {Component, Fragment} from 'react'
import Cookies from 'universal-cookie'
import './List.sass'
import MiniTask from './MiniTask'

const cookies = new Cookies()

// const habits =  [
//     {
//         title: 'Reading',
//         description: 'At least 30 pages a day',
//         color: '#FFDC81',
//         days: [
//             {
//                 day: '2020-09-27', 
//                 done: false
//             },
//             {
//                 day: '2020-09-28', 
//                 done: true
//             },
//             {
//                 day: '2020-09-29', 
//                 done: false
//             },
//             {
//                 day: '2020-09-30', 
//                 done: true
//             },
//         ]
//     },
// ]

const testhabit = [
    {
        title: 'No habits!',
        description: 'Add your first habit :)',
        color: '#81D1FF',
        days: [
            {
                day: '2012-12-21', 
                done: false
            },
        ]
    },
]

// cookies.set('habits', habits)

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

    getDate = () => {
        const time = new Date()
        let date = time.getFullYear() + '-'
        if (time.getMonth() < 9) date += '0'
        date += time.getMonth() +1
        date += '-'
        if (time.getDate() < 10) date += '0'
        date += time.getDate()
        return date
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
        let habitsDone = cookies.get('habitsDone')
        if (habits === 'undefined' || undefined || habits.length===0) {
            habits = testhabit
            cookies.set('habits', testhabit)
        }

        if (habitsDone === 'undefined' || undefined || habits.length===0) {
            habitsDone = []
        }

        let habitsInProgress = []

        habits = habits.map(habit => {
            if (!(habit.days[habit.days.length-1].day < this.getDate())) {
                habitsInProgress.push(habit)
                return <MiniTask key={habit.title} data={habit.days} title={habit.title} description={habit.description} color={habit.color}></MiniTask>
            }

            else habitsDone.push(habit)
            return null
        })
        cookies.set('habits', habitsInProgress)
        cookies.set('habitsDone', habitsDone)

        return habits
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