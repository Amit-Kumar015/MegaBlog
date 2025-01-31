import React from 'react'

function Logo({width= "100px"}) {
  return (
    <div>
      <img src="/icon.ico" alt="logo" width={width}/>
    </div>
  )
}

export default Logo
