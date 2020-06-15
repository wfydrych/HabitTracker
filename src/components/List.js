import React, {Component, Fragment} from 'react'
// import Cookies from 'universal-cookie'
import './List.sass'
import MiniTask from './MiniTask'

// const cookies = new Cookies()

class List extends Component {

    state = {
        
    }
    
    render () {
    return (
        <Fragment>
            <MiniTask title='Reading' description='At least 30 pages a day' progress='21' target='50' color='#FFDC81'></MiniTask>
            <MiniTask title='Workout' description='You can do it!' progress='8' target='50' color='#FF8181'></MiniTask>
            <MiniTask title='Play the piano' description='Be a Mozart, lol' progress='37' target='50' color='#81D1FF'></MiniTask>
        </Fragment>
    )}
}

export default List