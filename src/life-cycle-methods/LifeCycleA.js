import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(){
        super()

        this.state ={}
        console.log('This is constructor of Parent Class A')
       
    }
    static gerDerivedStateFromProps(props,state){
   console.log('This is get derived state from parent A')
   return {}
    }

    componentDidMount(){
        console.log('This is component did mount method of Parent A')
    }
    render() {
        console.log('This is render method of parent A')
        return (
            <div>
                <h1>LifeCycle A component</h1>
                <LifeCycleB/>
            </div>
        )
    }
}

export default LifeCycleA
