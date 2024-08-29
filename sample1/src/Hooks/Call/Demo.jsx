import React from 'react'

function Demo({num}) {
    const val = num*2
  return (
    <div>Demo:{val}</div>
  )
}

export default React.memo(Demo)