import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleC extends Component {
    constructor(){
        super()

        this.state ={}
        console.log('This is constructor of Parent Class C')
       
    }

   static gerDerivedStateFromProps(props,state){
   console.log(`This is get derived state from parent C`)
   return {}
    }

    componentDidMount(){
        console.log('This is component did mount method of Parent C')
    }
    render() {
        console.log('This is render method of parent C')
        return (
            <div>
                <h1>LifeCycle C component</h1>
            </div>
        )
    }
}

export default LifeCycleC