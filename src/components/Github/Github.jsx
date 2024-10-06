import React, { useState, useEffect } from 'react'


function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
      fetch('https://api.github.com/users/Ashuu1102')
      .then(res => res.json())
      .then(data => {setData(data)})
    }, [])
    
  return (
    <div className='text-center m-4 bg-gray-500
     text-white p-4 text-3xl'>Github Followers : {data.followers}
      <img className='flex' src={data.avatar_url} alt='github pp' width={300} />
     </div>
  )
}

export default Github