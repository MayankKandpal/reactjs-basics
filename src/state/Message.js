import React, { Component } from 'react'

 class Message extends Component {
     constructor(){
         super()
         this.state =  {
             name:"Mayank",
             message:"Welcome Mayank"
         }
     }

     subscribe(){
         this.setState({
             message:"Thanks for subscribing"
         })
     }
    render() {
        return (
            <div>
                <h1>{this.this.state.message}</h1>
                <button className ='btn btn-primart'
                onClick = {() =>this.subscribe()}></button>
            </div>
        )
    }
}

export default Message
