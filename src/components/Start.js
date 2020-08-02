import React, {Component, Fragment} from 'react'
import Cookies from 'universal-cookie'
import './Start.sass'
import blue from './img/blue_vect.png'
import red from './img/red_vect.png'
import yellow from './img/yellow_vect.png'

const cookies = new Cookies()

class Start extends Component {

    state = {
        
    }
    
    render () {
    return (
        <Fragment>
            <div className='start'>
                <div className='start__blue'><img src={blue} alt='blue' /></div>
                <div className='start__red'><img src={red} alt='red' /></div>
                <div className='start__yellow'><img src={yellow} alt='yellow' /></div>
                <div className='start__title'>Habits</div>
                <div className='start__subtitle'>Let's make some habits!</div>
                <div className='start__logbtn'>Log in</div>
                <div className='start__signbtn'>Sign in</div>
                <div className='start__forgot'>Forgot password?</div>
            </div>
        </Fragment>
    )}
}

export default Start