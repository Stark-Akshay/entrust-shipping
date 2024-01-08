import React from 'react'
import Image from 'next/image'
import BannerCraneImage from '@/public/images/bannerCrane.png'

const Banner = () => {
  return (

    /*Write out tailwind css from mobile standard then build it up*/
    <div className='banner-parent flex justify-center flex-col-reverse items-center sm:justify-around md:flex-row'>
        <Image className='banner-child1 w-full h-auto max-w-[250px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[500px]' src={BannerCraneImage}/>
        <div className='banner-child2 text-content flex flex-col px-5 w-full justify-around items-center md:items-end md:space-y-5'>
            <p className='text-[4rem] leading-[4.5rem] md:text-[5rem] font-m-sans text-primary font-medium'>Entrust Shipping</p>
            <p className='text-lg font-m-sans text-secondary font-semibold'>Your One-Stop Shop for Global Shipping and Logistics</p>
        </div>
    </div>
  )
}

export default Banner