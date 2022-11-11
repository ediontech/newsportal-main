import React from 'react'
import HeaderNav from '../navigations/HeaderNav'
import Entertainment from './Entertainment'
import HotSpot from './HotSpot'
import TopNews from './TopNews'


const HomePage = () => {
  return (
    <div>
        
        <TopNews />
        <HotSpot />
        <div className='bg-gray-100'>
          <Entertainment />
        </div>
    </div>
  )
}

export default HomePage