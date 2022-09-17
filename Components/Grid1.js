/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Grid1 = () => {

    const data = [
        {
            "img":"g1Img1.webp", "title":"Surface Laptop Go 2", "desc":"A sleek laptop with a 12.4-inch touchscreen, great typing experience and improved HD camera.", "li":"Learn more", "btn":"New", "id":"1"
        },
        {
            "img":"g1img2.webp", "title":"Surface Laptop 4", "desc":" Do it all with a perfect balance of sleek, ultra-thin design, multitasking speed and improved performance. ", "li":"Shop now", "id":"2"
        },
        {
            "img":"g1img3.webp", "title":"PC Game Pass", "desc":" Unlock 100+ great games and EA Play, plus get your first month for ₹50. Offer available to new subscribers only.", "li":"Join now", "id":"3"
        },
        {
            "img":"g1Img4.jpg", "title":"Designed for life today – and tomorrow", "desc":"The next-generation of games. Your goals. Friends and family. Windows 11 was made to bring you closer to everything you love.", "li":"See if your PC is ready", "id":"4"
        },
    ]

  return (
    <div className='px-20 flex space-x-6 mt-[5rem]'>
        {data.map((item) =>(
        <div className='w-1/2' key={item.id}>
            <div className=''>
                <img className='' src={item.img} alt="" />
            </div>
            <div className=''>
                <button className='bg-[#ffb900] text-base font-semibold px-4 py-1 mt-4'>New</button>
                <h1 className='text-2xl font-semibold mt-1'>{item.title}</h1>
                <p className='text-base tracking-normal mt-5'>{item.desc}</p>
                <div className='mt-7'>
                    <ul className='flex hover:space-x-2 hover:cursor-pointer'>
                        <li className='text-blue-800 font-semibold hover:underline'>{item.li}</li>
                        <span><img className='h-5 my-1' src="right.png" alt="" /></span>
                    </ul>
                </div>
            </div>
        </div>
        ))}
    </div>
  )
}

export default Grid1