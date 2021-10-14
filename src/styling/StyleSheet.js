import React from "react";
import './styling.css'
function StyleSheet(props){
    const{primary} = props
    let className = primary ? 'primary': 'error'
    return (

        <div>
            <h1 className = {className}>StyleSheet Class Applied</h1>
            <h2 className='success'>Applied Success Class</h2>
            <h2 className='error'>Error Class Applied</h2>
            <div className='primary enlarge-text'>This element is having multiple classes</div>
        </div>
    )
}
export default StyleSheet