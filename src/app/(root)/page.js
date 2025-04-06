import SearchForm from '@/components/SearchForm'
import Startup from '@/components/Startup'

export default async function  Home({searchParams}) {
  const query = (await searchParams).query;
  const posts =[{
    _createdAt:new Date(),
    views:55,
    author:{_id:1,name:'Anupa'},
    description:"This is a description",
    image:"https://www.bing.com/images/search?view=detailV2&ccid=5ZW9PSjp&id=2D1168A7BBA0F7E46662108F5F6E052143AF8020&thid=OIP.5ZW9PSjpidwVusjVKlGeuQAAAA&mediaurl=https%3A%2F%2Fimg.freepik.com%2Fpremium-photo%2Fhappy-businesswoman-wearing-wireless-headphones-standing-with-smart-phone-office_662214-353847.jpg&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.e595bd3d28e989dc15bac8d52a519eb9%3Frik%3DIICvQyEFbl%252bPEA%26pid%3DImgRaw%26r%3D0&exph=626&expw=351&q=images&form=IRPRST&ck=C28E400074E3000EC9AE3EF2E720C8CD&selectedindex=2&itb=0&ajaxhist=0&ajaxserp=0&pivotparams=insightsToken%3Dccid_c971SFkT*cp_DD84747E0140B029C7DD3009E6823283*mid_A48597DB5B4CDD2CA817DC2AAD5AA22A30002E9E*simid_607995077581961815*thid_OIP.c971SFkTAdWQvF65WSJTLgHaEY&vt=0&sim=11&iss=VSI&ajaxhist=0&ajaxserp=0https://img.freepik.com/premium-photo/happy-businesswoman-wearing-wireless-headphones-standing-with-smart-phone-office_662214-353847.jpg",
    category:"Business",
    title:'My startup',
    position:'Senior Level'
  },
  {
    _createdAt:new Date(),
    views:55,
    author:{_id:2,name:'Anupa'},
    description:"This is a description",
    image:"https://www.bing.com/images/search?view=detailV2&ccid=5ZW9PSjp&id=2D1168A7BBA0F7E46662108F5F6E052143AF8020&thid=OIP.5ZW9PSjpidwVusjVKlGeuQAAAA&mediaurl=https%3A%2F%2Fimg.freepik.com%2Fpremium-photo%2Fhappy-businesswoman-wearing-wireless-headphones-standing-with-smart-phone-office_662214-353847.jpg&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.e595bd3d28e989dc15bac8d52a519eb9%3Frik%3DIICvQyEFbl%252bPEA%26pid%3DImgRaw%26r%3D0&exph=626&expw=351&q=images&form=IRPRST&ck=C28E400074E3000EC9AE3EF2E720C8CD&selectedindex=2&itb=0&ajaxhist=0&ajaxserp=0&pivotparams=insightsToken%3Dccid_c971SFkT*cp_DD84747E0140B029C7DD3009E6823283*mid_A48597DB5B4CDD2CA817DC2AAD5AA22A30002E9E*simid_607995077581961815*thid_OIP.c971SFkTAdWQvF65WSJTLgHaEY&vt=0&sim=11&iss=VSI&ajaxhist=0&ajaxserp=0https://img.freepik.com/premium-photo/happy-businesswoman-wearing-wireless-headphones-standing-with-smart-phone-office_662214-353847.jpg",
    category:"Business",
    title:'My startup',
    position:'Senior Level'
  },
  {
    _createdAt:new Date(),
    views:55,
    author:{_id:3,name:'Anupa'},
    description:"This is a description",
    image:"https://www.bing.com/images/search?view=detailV2&ccid=5ZW9PSjp&id=2D1168A7BBA0F7E46662108F5F6E052143AF8020&thid=OIP.5ZW9PSjpidwVusjVKlGeuQAAAA&mediaurl=https%3A%2F%2Fimg.freepik.com%2Fpremium-photo%2Fhappy-businesswoman-wearing-wireless-headphones-standing-with-smart-phone-office_662214-353847.jpg&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.e595bd3d28e989dc15bac8d52a519eb9%3Frik%3DIICvQyEFbl%252bPEA%26pid%3DImgRaw%26r%3D0&exph=626&expw=351&q=images&form=IRPRST&ck=C28E400074E3000EC9AE3EF2E720C8CD&selectedindex=2&itb=0&ajaxhist=0&ajaxserp=0&pivotparams=insightsToken%3Dccid_c971SFkT*cp_DD84747E0140B029C7DD3009E6823283*mid_A48597DB5B4CDD2CA817DC2AAD5AA22A30002E9E*simid_607995077581961815*thid_OIP.c971SFkTAdWQvF65WSJTLgHaEY&vt=0&sim=11&iss=VSI&ajaxhist=0&ajaxserp=0https://img.freepik.com/premium-photo/happy-businesswoman-wearing-wireless-headphones-standing-with-smart-phone-office_662214-353847.jpg",
    category:"Business",
    title:'My startup',
    position:'Senior Level'
  }]
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
  {posts.length > 0 
    ? posts.map((post, index) => (
      <Startup key={post._id} post={post} />
      ))
    : <li>No posts available</li>
  }
</ul>
        </section>


    </>
  );
}
