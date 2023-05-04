"use client"

export default function Contact() {

    return (
        <section>
            <article className="bg-hero w-full h-[370px]">
                <div className="w-full h-full flex flex-col items-center justify-center">
                    <h1 className="text-7xl">Contact</h1>
                    <p>Home Contact</p>
                </div>
            </article>

            <article className="flex mt-20 gap-24 justify-center">
                <section>
                    <div>
                        <p className="text-4xl">Contact Info</p>
                        <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <div className="flex mt-4 justify-between">
                        <div>
                            <p className="text-2xl">Office</p>
                            <p>Adress here</p>
                            <p>Phone number here</p>
                            <p>Phone number here</p>
                            <p>Email here</p>
                        </div>

                        <div>
                            <p className="text-2xl">Management</p>
                            <p>Adress here</p>
                            <p>Phone number here</p>
                            <p>Phone number here</p>
                            <p>Email here</p>
                        </div>
                    </div>

                </section>
                <article>
                    <article>
                        <p className="text-4xl">Any Questions?</p>
                        <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ut!</p>
                    </article>

                    <article className="mt-4">
                        <form action="get" className="flex flex-col gap-5">
                            <article className="flex justify-between">
                                <input type="text" name="name" placeholder="Name" className="border-b-2" />
                                <input type="email" name="email" placeholder="Email" className="border-b-2" />
                            </article>
                            <input type="number" name="phone" placeholder="Phone number" className="border-b-2" />
                            <input type="text" name="subject" placeholder="Subject" className="border-b-2" />
                            <input type="text" name="message" placeholder="Message" className="border-b-2" />
                            <input type="submit" value="Submit" />
                        </form>
                    </article>
                </article>
            </article>
        </section>
    )
}