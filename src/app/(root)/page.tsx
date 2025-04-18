import SearchForm from '@/components/SearchForm'
import Startup, { StartupTypeCard } from '@/components/StartupCard'
import { STARTUPS_QUERY } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import { sanityFetch } from '@/sanity/lib/live';
import { auth } from "auth";

export default async function  Home({searchParams}) {
  const query = (await searchParams).query;
  const params ={search:query||null};
  const session = await auth();
  const {data:posts} =await sanityFetch({ query: STARTUPS_QUERY,params });

  return (
    <>
      <section className="pink_container pattern">
        <h1 className="heading">
          Pitch your startup,
          <br /> connect with enterpreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit ideas,Vote on Pitches, and Get Noticed in Virtual Competition
        </p>
        <SearchForm query={query}/>
       
      </section>
      <section className='section_container'>
        <p className='text-30-semibold'>
{query?`search result for "${query}"`:"All Startups" }
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post:StartupTypeCard) => (
              <Startup key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
        </section>


    </>
  );
}
