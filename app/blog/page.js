import Link from 'next/link'

async function getBlog() {
        return (await fetch('http://localhost:4000/posts', { next: { revalidate: 0 } })).json(); 
    }

const Blogs = async () => {
    const Blog = await getBlog()
    return ( 
        <article className="flex flex-wrap mx-72">
        {Blog?.map(blog =>
            <div key={blog.id} className="flex flex-col flex-[33%]">
              <Link href={`/blog/${blog.id}`}><img src="https://placehold.co/200x200" alt="placeholder image" className="mt-6 w-60"/></Link>
              <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
              <Link href={`/blog/${blog.id}`}>Sej text</Link>
            </div>
        )}
      </article>
     );
}
 
export default Blogs;