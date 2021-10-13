import React from "react";

function NameListOne(){
    const names= ['Scott','Adam','Tuan']
    return(
<div>
 {
    //  names.map(function(n,index){
    //      return <h2 key={index}>{n}</h2>
    //  })
     names.map((n,index)=><h2 key ={index}>{n}</h2>)
    }
</div>
    )
}
export default NameListOne