"use client";
import React, {useState} from 'react';
import logo from '@/../../public/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import {BiSearch} from 'react-icons/bi';
import {BsCart3,BsArrowRight} from 'react-icons/bs';
import {MdOutlineAccountBox} from 'react-icons/md';
import {RxHamburgerMenu} from 'react-icons/rx';

const index = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className='w-full flex flex-row items-center justify-between px-6 py-4 backdrop-blur-md fixed'>
      <div className=''>
        <Link href='/'><Image width={70} src={logo} alt=""/></Link>
      </div>
      <div className='hidden lg:flex flex-row gap-6 items-center text-white'>
        <Link href='/about'>Treks & Expedition</Link>
        <Link href='/about'>Summit Run</Link>
        <Link href='/about'>About</Link>
        <Link href='/merchandise'>Merchandise</Link>
        <Link href='/about'>Contact</Link>
        <div >
          <button className='w-full bg-white text-[#002F4C] hover:scale-105 transition-all p-3'>Customise your Journey</button>
        </div>
      </div>
      <div className='hidden lg:flex  flex-row gap-2'>
          <BiSearch className='text-3xl  text-[#002F4C]'/>
          <BsCart3 className='text-3xl text-[#002F4C]' />
          <MdOutlineAccountBox  className='text-3xl text-[#002F4C]'/>
      </div>
      <div className='block lg:hidden'>
        <RxHamburgerMenu onClick={() => setToggle(true)}/>
        {toggle && (
          <>
          <div className='w-screen bg-white h-screen p-0 m-0'>
            <BsArrowRight onClick={() => setToggle(false)}/>
          </div>
          </>
        )}
      </div>
    </div>
  )
}

export default index;
