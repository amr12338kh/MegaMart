"use client"

import { Button } from "@/components/ui/button" 
import { BiError } from "react-icons/bi";

const notFound = () => {

  return (
    <section className=" container flex flex-col justify-center items-center h-screen">

        <div className="p-4 rounded-full bg-primary-foreground">
            <BiError size={50} />
        </div>

        <div className=" my-10">
            <h1 className="scroll-m-20 text-2xl sm:text-3xl text-center font-extrabold tracking-tight lg:text-5xl">Oops! There is an Error</h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6 text-center">Please try again.</p>
        </div>

        <div>
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