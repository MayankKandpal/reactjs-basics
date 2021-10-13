import React,{Component} from "react";

class Welcome extends Component{
    render(){
        const{name,skill,children} =this.props
                return(
            <div>
                <h3>Name is{name} and skill is{skill}</h3>
            </div>

        )
    }
}