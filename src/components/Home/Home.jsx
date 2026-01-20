import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Button from 'react-bootstrap/Button';
import BasicExample from '../Navbar/Navbar';
import { AiFillCheckCircle } from 'react-icons/ai';
import Child from '../Child/Child';

export default function Home() {
    let [count,setCount]=useState(0);

    // let arr = ['samsung',15215]
    // console.log(arr[0]);
    // console.log(arr[1]);

    // let [x,y]=arr;
    // console.log(x);
    // console.log(y);


   let [user,setUser] = useState({
    name:'aya',
    age:25
   });
   let [newName,setNewName] = useState('');

    const handleChange=(e)=>{
        setNewName(e.target.value);
    }

    console.log(useState(0));
    function updateCount(x){
        setCount(count+x);
    }
    function updateUser(){
        setUser({
            ...user,
            name:'ahmed'
        })
    }
  return (
     <>
     <i className='fas fa-home fa-2x'></i>
     <AiFillCheckCircle size='10rem' color='green'/>
    <BasicExample/>
  <Button variant="danger">Danger</Button>
  <div className='bg bg-primary mt-3'>Home</div>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, ut.</p>
  <div className='bg-secondary text-white fs-1 p-4'>
    <input type="text" name="" id="" onChange={handleChange}/>
    
    <p>Name:{user.name}</p>
  <p>Age:{user.age}</p>
    <button className='btn btn-warning d-block mx-auto my-3' onClick={updateUser}>update user</button>

  </div>
  <p className={`${count>5?'bg-success':'bg-danger'} fs-1 text-white my-3`}>Count:{count}</p>
  <button className='btn btn-primary d-block mx-auto my-3' onClick={()=>updateCount(5)}>update count</button>
  <input type="text" id='test'/>
  <label htmlFor="test">rest</label>
  <Child user={user} updateFunction={updateUser}/>
  </>
  )
  
}
