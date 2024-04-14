import React from 'react'
import './Button.css'

function Button({children, w, h, bgc, br, b, fse}) {
    return (
      <>
      <button className='btn' style={{width:w, height:h, backgroundColor:bgc, borderRadius: br, border: b, fontSize:fse}}>{children}</button>
      </>
    )
}

export default Button