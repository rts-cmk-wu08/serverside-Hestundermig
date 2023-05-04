

async function getBlog(id) {
    return (await fetch(`http://localhost:4000/posts/${id}`, { next: { revalidate: 0 } })).json();
}

export default async function pageid({ params }) {
const posts = await getBlog(params.id)

console.log(posts)

return (
    <article>
        <h1>{posts.title}</h1>
        <p>{posts.text}</p>
    </article>
);
}