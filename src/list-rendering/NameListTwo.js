import react from "react";
import React from "react";

function NameListTwo(){
    const names= ['Scott','Adam','Tuan']
    const nameList = names.map((n,index)=><h2 key ={index}>{n}</h2>)
    return(

    <React.Fragment>
    <h1>This is a list</h1>
    <h2>This is another List</h2>
    </React.Fragment>

    )
}
export default NameListTwo