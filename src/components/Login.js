import React, {Component, Fragment} from 'react'
import Cookies from 'universal-cookie'
import './Login.sass'
import blue from './img/blue_vect.png'
import red from './img/red_vect.png'
import yellow from './img/yellow_vect.png'
import arrow from './img/arrow-left.png'

const cookies = new Cookies()

class Login extends Component {

    state = {
        email: '',
        pass: '',
    }

    handleEmail = e => {
        this.setState({
          email: e.target.value
        })
    }
    
    handlePass = e => {
        this.setState({
          pass: e.target.value
        })
    }

    handleBack = () => {
        cookies.remove('start')
        window.location.reload()
    }

    render () {
    return (
        <Fragment>
            <div className='login'>
                <img className='login__arrow' onClick={this.handleBack} src={arrow} alt='arrow' />
                <div className='login__blue'><img src={blue} alt='blue' /></div>
                <div className='login__red'><img src={red} alt='red' /></div>
                <div className='login__yellow'><img src={yellow} alt='yellow' /></div>
                <div className='login__title'>Log in!</div>
                    <input type='email' placeholder='email' onChange={this.handleEmail} value={this.state.email} className='login__emailinput'/>
                    <input type='password' placeholder='password' onChange={this.handlePass} value={this.state.pass} className='login__passinput'/>
                    <button type='submit' className='login__submit'>Log in</button>
                <div className='login__forgot'>Forgot password?</div>
            </div>
        </Fragment>
    )}
}

export default Login