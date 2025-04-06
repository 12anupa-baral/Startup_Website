'use client'
import { X } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const SearchFormReset = () => {
    const reset =()=>{
        const form = document.querySelector('.search-form');
    }
   
  return (
    <button className="search-button" type="submit" onClick={reset}>
  <Link href="/" className='search-btn text-white'>
  <X className='size-5'/>
  </Link>
  </button>
  )
}

export default SearchFormReset