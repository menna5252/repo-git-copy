import React from 'react'

export default function GrandChild({user,updateFunction}) {
  return (
    <div className='bg-warning  my-5 p-5'>
      <h1>display Data from grand child</h1>
      <p className='fs-3'>{user.name}</p>
      <p className='fs-3'>{user.age}</p>
      <button onClick={updateFunction} className='btn btn-outline-dark'>update user from Grand child</button>
      </div>
  )
}
