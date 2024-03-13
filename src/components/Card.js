import React from 'react'
import {FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Card = (props) => {
    let review = props.review;
  return (
    <div className='flex flex-col md:relative'>
      <div className='absolute top-[-7rem] z-10 mx-auto'>
        <img
        className='w-[140px] h-[140px] aspect-square rounded-full z-[25]' 
        src={review.image} alt='profile' />
        <div className='w-[140px] h-[140px] aspect-square rounded-full top-[-6px] left-[10px] bg-violet-500 absolute z-[-10]'></div>
      </div>

      <div className='text-center tracking-wider'>
        <p className='font-bold text-2xl capitalize'>{review.name}</p>
      </div>

      <div className='text-center'>
        <p className='text-violet-300 text-sm uppercase'>{review.job}</p>
      </div>
      
      <div className='text-violet-400 mx-auto mt-5'>
      <FaQuoteLeft />
      </div>

      <div className='text-slate-500 text-center mt-4'>
        {review.text}
      </div>

      <div className='text-violet-400 mx-auto mt-5'>
      <FaQuoteRight />
      </div>
    </div>
  )
}

export default Card
