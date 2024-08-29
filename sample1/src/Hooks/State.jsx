import React, { useContext, useState } from 'react'
import { Mycontext } from './Context'

function State() {

  const [time,setTime] = useState(0)
  const {name} = useContext(Mycontext)

  return (
    <div>
      <h1>Counter:{time}</h1>
      <button onClick={()=>setTime(time+1)}>inrement</button>
      <button onClick={()=>time==0?setTime(0):setTime(time-1)}>decrement</button>
      <h5 className='p-3 m-3 bg-success'>{name}</h5>
    </div>
    
  )
}

export default State;