import React, { Component } from 'react'
import LifeCycleC from './LifeCycleC'

class LifeCycleB extends Component {
    constructor(){
        super()

        this.state ={}
        console.log('This is constructor of Parent Class B')
       
    }
    static gerDerivedStateFromProps(props,state){
   console.log(`This is get derived state from parent B`)
   return {}
    }

    componentDidMount(){
        console.log('This is component did mount method of Parent B')
    }
    render() {
        console.log('This is render method of parent B')
        return (
            <div>
                <h1>LifeCycle B component</h1>
                <LifeCycleC/>
            </div>
        )
    }
}

export default LifeCycleB