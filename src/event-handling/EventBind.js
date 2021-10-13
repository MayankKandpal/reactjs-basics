import React, { Component } from 'react'

class EventBind extends Component {
    constructor(){
        super()
        this.state = {
            message:'Hello'
        } 
        //third approach
        this.clickHandler = this.clickHandler.bind(this)

        
        
    }
    clickHandler =()=>{
            
        this.setState({
            message:'Thank You'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* /*1st approach*/}
                <button className='btn btn-primary'
                 onClick={this.clickHandler.bind(this)}> eventclick</button>
               <br />
               <br />
                 {/* second approach */}
               <button className='btn btn-primary' onClick={() => this.clickHandler()}>Fat Arrow Event</button>
               <br/>
               <br/>
               <button className='btn btn-primary' onClick={this.clickHandler}>Event Click-Bind Inside Constructor</button>

            </div>
        )
    }
}

export default EventBind
