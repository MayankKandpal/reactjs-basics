import React, { Component } from 'react'

class Person extends Component {
    constructor(){
        super()
        this.state = {
            name:'Uma',
            city:'Delhi',
            isAdmin:true

        }
    }
    render() {
        const {name,city,isAdmin} = this.state
        return (
            <div>
                <h1>{name} is in {city} and he is admin {isAdmin? 'True' : false} </h1>
            </div>
        )
    }
}

export default Person
