import React from 'react'
import GrandChild from '../GrandChild/GrandChild';

export default function Child(props) {
    console.log(props);
  return (
   <>
    <div className='bg-info my-5 p-5'>
      <h1>display Data from child</h1>
      <p className='fs-3'>{props.user.name}</p>
      <p className='fs-3'>{props.user.age}</p>
      <button onClick={props.updateFunction} className='btn btn-outline-dark'>update user from child</button>
      </div>
       <GrandChild user={props.user} updateFunction={props.updateFunction}/>
   </>
    
  )
}
