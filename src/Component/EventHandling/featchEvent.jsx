import React from 'react'

const featchEvent = () => {
    const handleClick = (evnt) =>{
        console.log('click button', event.target);
    }
  return (
    <div>
{/* event when the button is clicked by directly passing handle click function
this approch will invock the handleClick function  */}
        <button onClick={handleClick}>Click</button>
{/* event handling by passing inline arrow function. this approch invocks an anonimus arrowfunction which turn call handle Click with evant and 'btn1' argument. this allow ypu to pass aditional data along with the event */}
        <button onClick={evt => handleClick(evt,'btn1')}>Click1</button>
        <button onClick={handleClick.bind(this,'btn2')}>Click2</button>
    </div>
  )
}

export default featchEvent