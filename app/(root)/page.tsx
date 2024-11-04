import Link from "next/link";
import SearchForm from "../../components/search-form";
import StartupCard from "@/components/startup-card";

export default async function Home({searchParams}:{searchParams:Promise<{query?:string}>}) {
  const query = (await searchParams).query

  const posts = [
    {
      _createdAt:new Date(),
      views:55,
      author:{_id:1, name:"Prachi"},
      _id:1,
      description:"this is a description",
      image:'/logo.png',
      category:"Robots",
      title:"We Robots"
    }
  ]
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
           posts.map((post:StartupCardType)=>(
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
