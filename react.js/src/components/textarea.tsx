import React from 'react'
// import React, { useState } from 'react';


const textarea = () => {
    const [charecter, setCharecter] = useState("")


  return (
    <div>
      <div className='flex justify-center items-center'>
        <textarea className='w-[500px] h-[500px] border rounded' rows={10} placeholder='please enter anything'></textarea>
      </div>
    </div>
  )
}

export default textarea;
