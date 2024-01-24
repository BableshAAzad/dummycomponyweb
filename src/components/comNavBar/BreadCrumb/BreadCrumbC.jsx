import React from 'react'
import "./BreadCrumbC.css"

function BreadCrumbC({heading}) {
  return (
    <>
      <div className="contact-heading">
        <p className='contactH'>{heading}</p>
        <p>Home / {heading}</p>
      </div>
    </>
  )
}

export default BreadCrumbC
