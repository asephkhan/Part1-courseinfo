import React from 'react'

function Header(props) {
  console.log(props)
  return (
    <div>
        <h1>{props.course.name}</h1>
    </div>
  )
}

export default Header