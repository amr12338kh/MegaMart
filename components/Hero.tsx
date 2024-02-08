import Link from "next/link"
import { Button } from "./ui/button"

const Hero = async () => {

  return (
      <div className="flex flex-col items-center justify-center">
        <div className="m-10 flex flex-col items-center justify-center gap-4 text-center w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight lg:leading-[1.1] max-w-5xl">
                An e-commerce website built with everything new in Next.js
            </h1>
            <p className="text-sm text-muted-foreground sm:text-base md:text-xl">
                Shop till you drop, from the comfort of your own home
            </p>
        </div>
        <Link href="/products">
            <Button size="sm">Shop Now</Button>
        </Link>
      </div>
  )
}

export default Hero