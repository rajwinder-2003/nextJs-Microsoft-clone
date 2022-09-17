/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
    return () => window.removeEventListener('scroll', handleScroll, true);
  });

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className=''>
      <div className=''>
        <div className=''>
          <button onClick={scrollToTop} className={showButton ? "bg-[#cecccc] px-3 py-3 font-semibold flex rounded-[0.235rem] hover:bg-[#ffffff] hover:cursor-pointer hover:shadow-lg ml-[74.7rem] fixed top-[37.2rem]" : ""}>
            <span><img className='h-5 mr-2' src="up.png" alt="" /></span>
          Back to top
          </button>
        </div>
      </div>
    </div>
  )
}

export default BackToTop