"useClient"
import React from 'react'

const index = (props) => {
  return (
    <button className='w-[130px] h-[30px] border-solid border-[1px] font-extralight border-white bg-inherit text-white hover:scale-105 transition-all'>{props.text}</button>
  )
}

export default index;