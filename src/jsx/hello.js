import React,{Component} from 'react'
// const Hello = function(){
//     return <div>
//     <h1>Hello</h1>
//     </div> 
// }

const Hello = function(){
    return React.createElement('div',null,'h1','Hello')
}
export default Hello