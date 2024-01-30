import React from 'react'
import Back from '../../public/Back.png'
const Main = () => {
  return (
    <>
      <div className="container">
        <h1 className='translate-y-44 text-3xl text-white'>Kusoo Dhawoow <span>Duco Waalid</span></h1>
        <div className="image-back -mt-12">
          <img src={Back} className='bg-cover justify-center ' alt="" />
        </div>
      </div>
    </>
  )
}

export default Main
