import React from "react";

function WithJSX(){
    return (
        <>
        <h1>component with JSX</h1>
       
        <p>The markup syntax you’ve seen above is called JSX. It is optional, but most React projects use JSX for its convenience. All of the tools we recommend for local development support JSX out of the box.

        JSX is stricter than HTML. You have to close tags like <br />. Your component also can’t return multiple JSX tags. You have to wrap them into a shared parent, like a <div>...</div> or an empty <>...</> wrapper:</p>
        </>
    )
}


function WithOutJSX(){
    return(
        React.createElement('div',null,React.createElement('h1',{id:'test',className:'testClass'},'component without JSX'))
        )
    }
    
    // export WithJSX;
    export default WithOutJSX;