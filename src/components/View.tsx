import React from 'react'
import Ping from './Ping'
import { client } from '@/sanity/lib/client'
import { STARTUP_VIEWS_QUERY } from '@/sanity/lib/queries'
STARTUP_VIEWS_QUERY

const View = async ({ id }: { id: string }) => {
    const {
        views: totalviews } = await client
            .withConfig({ useCdn: false })
            .fetch(STARTUP_VIEWS_QUERY,  { id });
     
  return (
      <div className='view-container'>
          <div className='absolute -top-2 -right-2'>
              <Ping/>
          </div>
          <p className='view-text'>
              <span className='font-black'>
                {totalviews}
              </span>
          </p>
    </div>
  )
}

export default View