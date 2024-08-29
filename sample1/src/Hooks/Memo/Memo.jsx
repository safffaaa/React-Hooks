import React, { useState } from 'react'
import Demo from './Demo'

function Memo() {

  const [nmbr,setNumb] = useState(1)
  const [count,setCount] = useState(0)

  return (
    <div>
      <h4>number:{nmbr}</h4>
      <h4>count:{count}</h4>
      <button className='bg-primary btn p-3 m-3' onClick={()=>setNumb(nmbr+1)}>incNumb</button>
      <button  className='bg-primary btn p-3 m-3' onClick={()=>setCount(count+1)}>incCount</button>
      <Demo num={nmbr}/>
    </div>
  )
}

export default Memo;