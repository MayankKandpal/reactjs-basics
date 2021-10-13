import React from 'react'

function Greetings({name,skill,children}) {
    return (
        <div>
           <h2>Developer name is {name} and is a{skill} {children}</h2> 
        </div>
    )
}

export default Greetings
