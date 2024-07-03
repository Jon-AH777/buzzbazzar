import React from 'react'
import Category from './shopBy/Category'
import Brand from './shopBy/Brand'
import Color from './shopBy/Color'


const ShopSideNav = () => {
  return (
    <div className='flex flex-col gap-2'>
        <Category />
        <Brand />
        <Color />

    </div>
  )
}

export default ShopSideNav