import React from 'react'
import Image from 'next/image'
import BannerCraneImage from '@/public/images/bannerCrane.png'

const Banner = () => {
  return (
    <div className='banner-parent flex justify-around py-5 flex-col sm:flex-row'>
        <Image className='banner-child1 max-w-[150px] min-w-[25%]' src={BannerCraneImage}/>
        <div className='banner-child2 flex items-end justify-center flex-col space-y-5'>
            <p className='text-[5rem] font-m-sans text-primary font-medium'>Entrust Shipping</p>
            <p className='text-[2rem] font-m-sans text-secondary font-thin'>Your One-Stop Shop for Global Shipping and Logistics</p>
        </div>
    </div>
  )
}

export default Banner