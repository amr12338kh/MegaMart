"use client"

import { Button } from "@/components/ui/button" 
import Link from "next/link"
import { BiError } from "react-icons/bi";

const notFound = () => {

  return (
    <section className=" container flex flex-col justify-center items-center h-screen">

        <div className="p-4 rounded-full bg-primary-foreground">
            <BiError size={50} />
        </div>

        <div className=" my-10">
            <h1 className="scroll-m-20 text-3xl sm:text-4xl font-extrabold text-center tracking-tight lg:text-5xl">Oops! This page is not found.</h1>
            <p className="leading-7 [&:not(:first-child)]:mt-3 text-xs sm:text-base text-center">Please try again later or contact us about your problem.</p>
        </div>

        <div className="flex gap-2">
            <Link href="/">
                <Button>Home</Button>
            </Link>
            <Button
                onClick={(e) => window.location.reload()} 
                variant="secondary"
            >
                Try Again
            </Button>
        </div>
    </section>
  )
}

export default notFound