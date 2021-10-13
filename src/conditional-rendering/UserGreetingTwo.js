import React, { Component } from 'react'

class UserGreetingTwo extends Component {
    constructor(){
        super()
        this.state = {
            isLoggedIn:false
        }
    }
    render() {
        return(
               this.state.isLoggedIn &&
               <div>Welcome Uma Three</div>
            )
    }
}

export default UserGreetingTwo