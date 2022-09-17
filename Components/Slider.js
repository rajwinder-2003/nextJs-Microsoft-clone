/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'

const Slider = () => {
  
  const slider = [{"img":'img1.jpg', "title":'Microsoft 365', "desc":'Premium Office apps, extra cloud storage, advanced security, and more – all in one convenient subscription', "li":'For up to 6 people', "btn":'For 1 person', "liImg":'right.png'},
                {"img":'img2.jpg', "title":"Surface Laptop Studio", "desc":'Flex your creative muscle on the most powerful Surface Laptop. Now available with Windows 11.', "btn":'Shop now'}
  ]
  
  
  const [index, setIndex] = useState(0)

  const [circal1, setCircal1] = useState(true)
  const [circal2, setCircal2] = useState(false)

  const handelNext = () => {
    setIndex((index + 1) % slider.length)
    setCircal1(false)
    setCircal2(true)
  }

  const handelPrev = () => {
    setCircal1(true)
    setCircal2(false)

    const nextIndex = index-1;

    if(nextIndex < 0) {
      setIndex(slider.length-1)
    } else {
      setIndex(nextIndex)
    }
  }

  return (
    <>
      <div className='flex'>
        <div>
        <img src={slider[index].img} alt="" />
        <div className='justify-between my-5 flex mx-[36rem]'>
          <div>
          <button onClick={handelPrev} className="focus:outline-dashed focus:outline-1 py-1 px-2" >
            <img className='h-8' src="left.png" alt="" />
          </button>
          </div>
          <div className='flex space-x-6 mt-3'>
            <img className='h-3' src={circal1 ? "circal2.png" :"circal1.png"} alt="" />
            <img className='h-3' src={circal2 ? "circal2.png" : "circal1.png"} alt="" />
          </div>
          <div>
          <button onClick={handelNext} className="focus:outline-dashed focus:outline-1 py-1 px-2">
            <img className='h-8' src="right2.png" alt="" />
          </button>
          </div>
      </div>
        <div className='w-1/4 px-2 py-2 -mt-[29.5rem] ml-[7.25rem]'>
          <h1 className='text-3xl font-semibold'>{slider[index].title}</h1>
          <p className='font-[400] text-base my-5 mb-4'>{slider[index].desc}</p>
          <div className='flex'>
            <button className='px-3 py-2 bg-blue-700 hover:bg-blue-800 hover:cursor-pointer text-white font-medium text-base'>{slider[index].btn}</button>
            <ul className='flex hover:space-x-1'>
              <li className='ml-7 my-2 text-blue-700 font-semibold hover:underline hover:cursor-pointer'>{slider[index].li}</li> <span className='hover:cursor-pointer'><img className='h-5 my-3' src={slider[index].liImg} alt="" /></span>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Slider