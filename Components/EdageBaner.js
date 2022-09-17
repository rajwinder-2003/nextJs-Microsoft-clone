/* eslint-disable @next/next/no-img-element */
import React from 'react'

const EdageBaner = () => {
  return (
    <div className='px-20 py-4'>
        <div>
            <img className='' src="edage.avif" alt="" />
            <div className='-mt-[27rem] mx-14 bg-white absolute w-[25rem]'>
                <div className='space-y-4 w-[19rem] py-12 mx-12'>
                <h1 className='text-3xl font-semibold'>Microsoft Edge</h1>
                <p>World-class performance with more privacy, more productivity and more value while you browse</p>
                <button className='bg-blue-700 text-white font-semibold px-4 py-2 hover:bg-blue-800 hover:cursor-pointer'>Download now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EdageBaner