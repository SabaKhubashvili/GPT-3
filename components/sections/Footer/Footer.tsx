import React from 'react'
import { BigTitle } from '../Titles/BigTitle'
import { Email, Facebook, GPT, SmallGithub, Instagram } from '@/public/assets/svg'

export const Footer = () => {
  return (
    <section className='bg-[#031B34] pt-[8rem] pb-[3rem] mt-24'>
        <div className='lg:max-w-[1920px]  sm:w-11/12 w-full  sm:px-0 px-4 mx-auto'>
            <div className='flex justify-center items-center flex-col text-center gap-4'>
                <BigTitle Styles=' items-center' size='big' sentance={['Do you want to step in to the','future before others']} />
                <button className='border-solid border-2 border-white px-8 py-6 w-fit text-white text-[20px] hover:text-black hover:bg-white transition-colors duration-200'>
                    Request Early Access
                </button>
            </div>
            <div className='flex md:justify-between md:flex-row flex-col md:gap-0 gap-10 mt-16'>
                <div className='sm:w-[14rem] w-[50%]'>
                    <div className='w-full'>
                    <GPT/>
                    </div>
                    <p className='text-white mt-8'>Made By Saba Khubashvhili All Rights Reserved</p>
                </div>
                <div className='text-white'>
                    <h3 className='text-[18px] font-bold'>Links</h3>
                    <ul className='flex flex-col gap-4 mt-5'>
                        <li>Overons</li>
                        <li>Social Media</li>
                        <li>Counters</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className='text-white'>
                    <h3 className='text-[18px] font-bold'>Company</h3>
                    <ul className='flex flex-col gap-4 mt-5'>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className='text-white'>
                    <h3 className='text-[18px] font-bold'>Get in touch</h3>
                    <ul className='flex flex-col gap-4 mt-5'>
                        <li><a  href='https://github.com/SabaKhubashvili' target='_blank' className='flex items-center gap-2'> <div className='w-5'><SmallGithub/> </div>Saba Khubashvili</a></li>
                        <li><a href='https://www.facebook.com/profile.php?id=100011187067102' target='_blank' className='flex items-center gap-2'> <div className='w-5'><Facebook/> </div>Saba Khubashvili</a></li>
                        <li><a href='https://www.instagram.com/xubashvili.saba12/' target='_blank' className='flex items-center gap-2'> <div className='w-5'><Instagram/> </div>xubashvili.saba12</a></li>
                        <li><a href='mailto:khubashvili.saba12@gmail.com' className='flex items-center gap-2'> <div className='w-5'><Email/> </div>khubashvili.saba12@gmail.com </a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}
