
import SearchForm from "../../components/search-form";
import StartupCard, { StartupTypeCard } from "@/components/startup-card";
import { client } from "@/sanity/lib/client";
import { STRARTUPS_QUERY } from '../../sanity/lib/queries';

export default async function Home({searchParams}:{searchParams:Promise<{query?:string}>}) {
  const query = (await searchParams).query
  const posts = await client.fetch(STRARTUPS_QUERY)

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
    </>
  )
}
