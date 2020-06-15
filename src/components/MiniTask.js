import React, {Fragment} from 'react'
// import Cookies from 'universal-cookie'
import './MiniTask.sass'

// const cookies = new Cookies()

const MiniTask = props => {

    console.log(props.progress/props.target)
    return (
        <Fragment>
            <div className='miniTask'>
                <div className='miniTask__txt'>
                    <div className='miniTask__txt__title'>{props.title}</div>
                    <div className='miniTask__txt__description'>{props.description}</div>
                </div>
                <div className='miniTask__progress'>{props.progress}/{props.target}</div>
                <div className='miniTask__circle'></div>
            </div>
        </Fragment>
    )
}

export default MiniTask