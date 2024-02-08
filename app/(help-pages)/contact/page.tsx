import Contact from '@/components/forms/Contact'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <main className="flex-1">
            <article className="grid items-center gap-8 container max-w-3xl py-8 md:py-10 lg:py-10">
                <section className="grid gap-1">
                    <h1 
                        className="font-bold tracking-tighter lg:leading-[1.1] text-3xl md:text-4xl"
                    >
                        Contact
                    </h1>
                    <p
                        className="text-muted-foreground max-w-[750px] text-base sm:text-lg"
                    >
                        Contact us for any questions or concerns about Tech Store.
                    </p>
                </section>

                <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full my-4"></div>

                <section className="mdx">
                    <p
                        className="text-base leading-7 [&:not(:first-child)]:mt-5 mb-10"
                    >
                        If you have any questions or concerns about Tech Store, please contact us using one of the methods below. We will try to respond as soon as possible.
                    </p>
                    <Contact />
                    <h2 
                        className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
                    >
                        Or contact us through: 
                    </h2>
                    <ul className="my-6 ml-6 list-disc">
                        <li className="mt-2">
                            <p
                                className="text-base leading-7 [&:not(:first-child)]:mt-5"
                            >
                                <strong>Email: </strong>
                                <Link
                                    href="mailto:amrkhaled12338@gmail.com"
                                    className="font-medium underline underline-offset-4"
                                >
                                    amrkhaled12338@gmail.com
                                </Link>
                            </p>
                        </li>
                        <li className="mt-2">
                            <p
                                className="text-base leading-7 [&:not(:first-child)]:mt-5"
                            >
                                <strong>Instagram: </strong>
                                <Link
                                    href="https://www.instagram.com/amrrkhaled_9/"
                                    className="font-medium underline underline-offset-4"
                                >
                                    @amrrkhaled_9
                                </Link>
                            </p>
                        </li>
                        <li className="mt-2">
                            <p
                                className="text-base leading-7 [&:not(:first-child)]:mt-5"
                            >
                                <strong>Linkedin: </strong>
                                <Link
                                    href="https://www.linkedin.com/in/amr-khaled-a411bb217/"
                                    className="font-medium underline underline-offset-4"
                                >
                                    @Amr Khaled
                                </Link>
                            </p>
                        </li>
                    </ul>
                </section>
            </article>
        </main>
  )
}

export default page