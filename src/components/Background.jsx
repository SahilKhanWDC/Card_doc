import React from 'react'

const Background = () => {
  return (
    <div className='w-full h-screen fixed z-[2]'>
      <div className='absolute top-[5%] w-full py-8 flex justify-center font-semibold text-xl text-zinc-600'>Documents.</div>
      <h1 className='absolute text-9xl tracking-tighter font-semibold leading-none top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-zinc-900'>Docs.</h1>
    </div>
  )
}

export default Background
