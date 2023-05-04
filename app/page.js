
async function getStarted() {

  return (await fetch(`http://localhost:4000/started`, { next: { revalidate: 30 } })).json()

}

export default async function Home() {

  const allStarted = await getStarted()

  const allIcons = allStarted.bullets

  return (

    <article className="flex justify-between px-28">
      <img src="https://placehold.co/525x525" alt="placeholder image" />
      <article className='mt-16'>
        <article>
          <p className='text-5xl w-[32rem]'>{allStarted.headline}</p>
          <p className='w-[40rem] mt-6'>{allStarted.text}</p>
        </article>

        <article>

          {allIcons?.map(icon =>
            <article key={icon.id} className='flex gap-6 mt-6'>
              <p>{icon.icon}</p>
              <section>
                <p className='text-2xl'>{icon.name}</p>
                <p className='opacity-60'>{icon.text}</p>
              </section>
            </article>
          )}
        </article>
      </article>
    </article>
  )
}