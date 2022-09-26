import React from 'react'

function Filter(props) {

  return (
    <div>
    Search:<input type="text" placeholder='search' 
    onChange={(e)=>props.handleFilter(e.target.value)}/>

    </div>
  )
}

export default Filter