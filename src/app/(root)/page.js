import SearchForm from '@/app/components/SearchForm'

export default async function  Home({searchParams}) {
  const query = (await searchParams).query;
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
    </>
  );
}
