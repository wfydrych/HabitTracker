import React, {Component, Fragment} from 'react'
import Cookies from 'universal-cookie'
import './Register.sass'
import blue from './img/blue_vect.png'
import red from './img/red_vect.png'
import yellow from './img/yellow_vect.png'

const cookies = new Cookies()

class Register extends Component {

    state = {
        
    }
    
    render () {
    return (
        <Fragment>
            <div className='register'>
                <div className='register__blue'><img src={blue} alt='blue' /></div>
                <div className='register__red'><img src={red} alt='red' /></div>
                <div className='register__yellow'><img src={yellow} alt='yellow' /></div>
                <div className='register__title'>Sign in!</div>
                    <input type='text' placeholder='email' className='register__emailinput'/>
                    <input type='text' placeholder='your name' className='register__nameinput'/>
                    <input type='password' placeholder='password' className='register__passinput'/>
                    <input type='password' placeholder='repeat password' className='register__secpassinput'/>
                    <button type='submit' className='register__submit'>Register</button>
            </div>
        </Fragment>
    )}
}

export default Register