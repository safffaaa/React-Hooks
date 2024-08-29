import React, { useReducer } from 'react'

const reduce = (state,action) => {
  switch (action.type) {
    case "INC":
     return {
      count :state.count +1
     }
    case "DEC":
     return {
      count :state.count > 0 ? state.count -1 : 0,
     }
  }
  return state
}

function Reducer() {
  
  const [state ,dispatch] = useReducer(reduce,{count : 0})

  return (
    <div>
      <h3>Counter:{state.count}</h3>
      <button className='btn-btn bg-primary m-3 py-2' onClick={()=>dispatch({type : "INC"})}>Inc</button>
      <button className='btn-btn bg-success m-3 py-2' onClick={()=>dispatch({type: "DEC"})}>dec</button>
    </div>
  )
}

export default Reducer