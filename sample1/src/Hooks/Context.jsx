import React, { createContext } from 'react'

const Mycontext = createContext()

const Context = ({children}) => {
  const name = 'gouse'
  return (
    <div>
      <Mycontext.Provider value={{name}}>
        {children}
      </Mycontext.Provider>
    </div>
  )
}

export {Mycontext,Context}