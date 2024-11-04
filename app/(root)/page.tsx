
import SearchForm from "../../components/search-form";
import StartupCard, { StartupTypeCard } from "@/components/startup-card";
import { STRARTUPS_QUERY } from '../../sanity/lib/queries';
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function Home({searchParams}:{searchParams:Promise<{query?:string}>}) {
  const query = (await searchParams).query
  const params = {search:query || null}
  const {data:posts} = await sanityFetch({query:STRARTUPS_QUERY, params})

  return (
    <>
    <section className="pink_container">
        <h1 className="heading">Pitch your startup <br />Connnet with entreprenuers</h1>
        <p className="sub-heading !max-w-3xl">Submit ideas, Vote on pitches, and Get Noticed in virtual Competitions</p>
        <SearchForm query={query}/>
    </section>
    <section className="section_container">
       <p className="text-30-semibold">
        {query ? `Search results for "${query}"` : "All Startups"}
       </p>
       <ul className="mt-7 card_grid">
        {posts?.length > 0 ? (
           posts.map((post:StartupTypeCard)=>(
            <StartupCard key={post._id} post={post} />
           ))
        ):(
           <p className="no-result">No posts found</p>
         )}
       </ul>
    </section>
    <SanityLive/>
    </>
  )
}
