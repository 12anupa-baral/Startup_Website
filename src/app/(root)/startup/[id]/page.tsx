import { formateDate } from '@/lib/utils';
import { client } from '@/sanity/lib/client';
import { STARTUP_BY_ID_QUERY } from '@/sanity/lib/queries';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react'
export const experimental_ppr=true
import Image from 'next/image';

const page = async ({params}:{params:Promise<{id:string}>}) => {
    const id = (await params).id;
    // const post =await client.fetch(STARTUP_BY_ID_QUERY,{params:{id}});
    const post =await client.fetch(STARTUP_BY_ID_QUERY,{id});
    if(!post) return notFound();
  return (
   <>
   <section className='pink_container pattern !min-h[230px]'>
    <p className='tag'>{formateDate(post?._createdAt)}</p>
    <h1 className='heading'>{post.title}</h1>
    <p className='sub-heading !max-w-5xl'>{post.description}</p>
    </section>

    <section className="section_container">
        <img src={post.image} alt="thumbnail" className='w-full h-auto rounded-xl' />
        <div className='space-y-5 mt-10 max-w-4xl mx-auto'>
            <div className='flex-between gap-5'>
                <Link href={`user/${post.author?._id}`} className='flex gap-2 items-enter mb-3'>
                <Image src={post.author.image} alt="avatar" width={64} height={64} className='rounded-full object-cover'>

                </Image>
                </Link>

            </div>
        </div>
    </section>
    </>

  )
}

export default page