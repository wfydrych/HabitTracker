import React, {Component, Fragment} from 'react'
import Cookies from 'universal-cookie'
import './Register.sass'
import blue from './img/blue_vect.png'
import red from './img/red_vect.png'
import yellow from './img/yellow_vect.png'
import arrow from './img/arrow-left.png'

const cookies = new Cookies()

class Register extends Component {

    state = {
        email: '',
        name: '',
        pass: '',
        passRep: '',
    }

    handleEmail = e => {
        this.setState({
          email: e.target.value
        })
    }

    handleName = e => {
        this.setState({
          name: e.target.value
        })
    }

    handlePass = e => {
        this.setState({
          pass: e.target.value
        })
    }

    handlePassRep = e => {
        this.setState({
          passRep: e.target.value
        })
    }

    handleBack = () => {
        cookies.remove('start')
        window.location.reload()
    }
    
    render () {
    return (
        <Fragment>
            <div className='register'>
                <img className='register__arrow' onClick={this.handleBack} src={arrow} alt='arrow' />
                <div className='register__blue'><img src={blue} alt='blue' /></div>
                <div className='register__red'><img src={red} alt='red' /></div>
                <div className='register__yellow'><img src={yellow} alt='yellow' /></div>
                <div className='register__title'>Sign in!</div>
                    <input type='email' placeholder='email' onChange={this.handleEmail} value={this.state.email} className='register__emailinput'/>
                    <input type='text' placeholder='your name' onChange={this.handleName} value={this.state.name} className='register__nameinput'/>
                    <input type='password' placeholder='password' onChange={this.handlePass} value={this.state.pass} className='register__passinput'/>
                    <input type='password' placeholder='repeat password' onChange={this.handlePassRep} value={this.state.passRep} className='register__secpassinput'/>
                    <button type='submit' className='register__submit'>Register</button>
            </div>
        </Fragment>
    )}
}

export default Register