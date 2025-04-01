'use client'
import Link from 'next/link';
import React from 'react'

const SearchFormReset = () => {
    const reset =()=>{
        const form = document.querySelector(selector,'.search-form');
    }
   
  return (
    <button className="search-button" type="submit" onClick={reset}>
  <Link href="/" className='search-btn text-white'>
  X
  </Link>
  </button>
  )
}

export default SearchFormReset