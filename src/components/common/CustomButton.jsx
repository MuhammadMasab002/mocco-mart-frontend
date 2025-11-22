import React, { useState } from 'react'

const CustomButton = () => {
        const [count, setCount] = useState(0);
  return (
    <div>
      <button className='text-black' onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  )
}

export default CustomButton
