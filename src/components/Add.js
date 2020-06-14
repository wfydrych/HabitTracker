import React, {Component, Fragment} from 'react'
// import Cookies from 'universal-cookie'
import './Add.sass'
import addBtn from './img/add_btn.png'

// const cookies = new Cookies()

class Add extends Component {

    state = {
        title: '',
        days: '',
        description: '',
        color: ''
    }

    handleShowHabitMenu = () => {
        document.querySelector('.addMenu').style.display = 'block'
    }

    handleHideHabitMenu = () => {
        document.querySelector('.addMenu').style.display = 'none'
    }

    handleTitleChange = e => {
        this.setState({
            title: e.target.value
        })
    }

    handleDaysChange = e => {
        this.setState({
            days: e.target.value
        })
    }

    handleDescriptionChange = e => {
        this.setState({
            description: e.target.value
        })
    }

    handleColor = props => {
        this.setState({
            color: props
        })
        
    }
    
    render () {
    return (
        <Fragment>
            <img src={addBtn} className='addBtn' alt='addBtn' onClick={this.handleShowHabitMenu} />
            <div className='addMenu'>
                <span className='addMenu__header'>Add new habit</span>
                <input className='addMenu__input' value={this.state.title} onChange={this.handleTitleChange} placeholder='title' type='text'></input>
                <input className='addMenu__input' value={this.state.days} onChange={this.handleDaysChange} placeholder='days' type='number'></input>
                <input className='addMenu__input' value={this.state.description} onChange={this.handleDescriptionChange} placeholder='description' type='text'></input>
                <span className='addMenu__colorSpan'>color</span>
                <div className='addMenu__colors'>
                    <div className='addMenu__colors__dot' onClick={this.handleColor.bind(this, '#81D1FF')}></div>
                    <div className='addMenu__colors__dot' onClick={this.handleColor.bind(this, '#FF8181')}></div>
                    <div className='addMenu__colors__dot' onClick={this.handleColor.bind(this, '#FFDC81')}></div>
                    <div className='addMenu__colors__dot' onClick={this.handleColor.bind(this, '#B8FF81')}></div>
                    <div className='addMenu__colors__dot' onClick={this.handleColor.bind(this, '#B181FF')}></div>
                </div>
                <div className='addMenu__buttons'>
                    <div className='addMenu__buttons__btn'>Add</div>
                    <div className='addMenu__buttons__btn' onClick={this.handleHideHabitMenu}>Close</div>
                </div>
            </div>
        </Fragment>
    )}
}

export default Add