import React from 'react'
import Button from '../../components/Button'
const index = () => {
  return (
    <div className='bg flex flex-col '>
      <div className='homeTitle flex flex-col'>
        <div className='myFonts'>Kang Yatse</div>
        <div className='line w-1/2 h-1 bg-black'></div>
        <p>Take a journey to the top of the world</p>
        <Button text='Learn More'/>
      </div>

    </div>
  )
}

export default index