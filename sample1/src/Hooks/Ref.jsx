import React, { useEffect, useRef } from 'react'

function Ref() {

  const Myref = useRef(null)

  useEffect(()=>{
    Myref.current.focus()
    Myref.current.style.background = 'gray'
  },[])

  return (
    <div className='container m-5 py-5'>
      <h4>Form submition</h4> 
      <input ref={Myref} type="text" />
      <br />
      <br />
      <input type="text" />
    </div>
  )
}

export default Ref