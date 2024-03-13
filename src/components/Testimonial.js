import React from 'react';
import Card from './Card';
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import { useState } from 'react';
// alternate icon
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Testimonial = (props) => {
    let reviews = props.reviews;
    const [index, setIndex] = useState(0);

    function leftShiftHandler() {
        if(index -1 < 0){
            setIndex(reviews.length -1);
        } else{
            setIndex(index -1);
        }
    }

    function rightShiftHandler() {
        if(index + 1 >= reviews.length){
            setIndex(0);
        } else {
            setIndex(index+1);
        }
    }

    function surpriseHandler() {
        let randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    }

  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-500 hover:shadow-xl rounded-md'>
        <Card review={reviews[index]} />

        <div className='flex items-center justify-center text-3xl mt-10 gap-3 text-violet-400 font-bold'>
            <button 
            onClick={leftShiftHandler}
            className='cursor-pointer hover:text-violet-500'>
                <VscChevronLeft />
            </button>
            <button
            onClick={rightShiftHandler}
            className='cursor-pointer hover:text-violet-500'>
                <VscChevronRight />
            </button>
        </div>

        <div className='mt-5'>
            <button
            onClick={surpriseHandler}
            className='bg-violet-400 hover:bg-violet-500 text-white transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-lg'>
                Surprise Me
            </button>
        </div>
    </div>
  )
}

export default Testimonial
