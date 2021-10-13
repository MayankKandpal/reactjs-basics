import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler() {
        console.log('Click the button')
    }

    render() {
        return (
            <div>
               <button className='btn btn-primary'
               onClick = {this.clickHandler}>
                   Click
                   </button> 
            </div>
        )
    }
}

export default ClassClick
