import React, { useMemo } from 'react'

function Demo({num}) {
 
    const val = useMemo(()=>{
      return num*5
    },[num])

  return (
    <div>Demo:{val}</div>
  )
}

export default React.memo(Demo)