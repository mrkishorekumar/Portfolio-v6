import React from 'react'

function Button({bg,color,link,val,className}) {
  return (
    <a href={link} className={"button " + className} target="_blank" style={{backgroundColor : bg, color : color}}>{val}</a>
  )
}

export default Button