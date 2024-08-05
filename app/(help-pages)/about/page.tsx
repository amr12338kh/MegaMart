import Link from "next/link";

const page = () => {
  return (
    <main className="flex-1">
      <article className="grid items-center gap-8 container max-w-3xl py-8 md:py-10 lg:py-10">
        <section className="grid gap-1">
          <h1 className="font-bold tracking-tighter lg:leading-[1.1] text-3xl md:text-4xl">
            About
          </h1>
          <p className="text-muted-foreground max-w-[750px] text-base sm:text-lg">
            About the project and the author of the project.
          </p>
        </section>
        <div
          data-orientation="horizontal"
          role="none"
          className="shrink-0 bg-border h-[1px] w-full my-4"
        />
        <section className="mdx">
          <p className="text-base leading-7 [&:not(:first-child)]:mt-5">
            This is an e-commerce store for training built with everything new
            in &nbsp;
            <Link
              href="https://nextjs.org/"
              className="font-medium underline underline-offset-4"
              target="_blank"
            >
              Next.js
            </Link>
            &nbsp; and I used &nbsp;
            <Link
              href="https://tailwindcss.com/"
              className="font-medium underline underline-offset-4"
              target="_blank"
            >
              Tailwind CSS
            </Link>
            &nbsp; for the style.
          </p>

          <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
            Tech used in this project
          </h2>

          <ul className="my-6 ml-6 list-disc">
            <li className="mt-2">
              <Link
                className="font-medium underline underline-offset-4"
                href="https://nextjs.org/"
                target="_blank"
              >
                Next.js
              </Link>
            </li>
            <li className="mt-2">
              <Link
                className="font-medium underline underline-offset-4"
                href="https://tailwindcss.com/"
                target="_blank"
              >
                Tailwind CSS
              </Link>
            </li>
            <li className="mt-2">
              <Link
                className="font-medium underline underline-offset-4"
                href="https://www.emailjs.com/"
                target="_blank"
              >
                emailJS
              </Link>
            </li>
            <li className="mt-2">
              <Link
                className="font-medium underline underline-offset-4"
                href="https://ui.shadcn.com/"
                target="_blank"
              >
                shadcn/ui
              </Link>
            </li>
            <li className="mt-2">
              <Link
                className="font-medium underline underline-offset-4"
                href="https://react-icons.github.io/react-icons/"
                target="_blank"
              >
                React Icons
              </Link>
            </li>
          </ul>

          <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
            About the author
          </h2>
          <p className="text-base leading-7 [&:not(:first-child)]:mt-5">
            Hello there! 👋 I&apos;m
            <Link
              href="https://github.com/amr12338kh"
              className="font-medium underline underline-offset-4"
              target="_blank"
            >
              &nbsp;&apos;Amr&apos;&nbsp;
            </Link>
            , a passionate Front-End Web Developer with a specialization in
            <Link
              href="https://nextjs.org/"
              className="font-medium underline underline-offset-4"
              target="_blank"
            >
              &nbsp;Next.js&nbsp;
            </Link>
            , the cutting-edge
            <Link
              href="https://react.dev/"
              className="font-medium underline underline-offset-4"
              target="_blank"
            >
              &nbsp;React.js&nbsp;
            </Link>
            framework. If you&apos;re seeking a skilled professional to
            transform your web project into a seamless and dynamic user
            experience, you&apos;ve come to the right place.
          </p>

          <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
            My Socials
          </h2>
          <ul className="my-6 ml-6 list-disc">
            <li className="mt-2">
              <Link
                className="font-medium underline underline-offset-4"
                href="https://www.instagram.com/amrrkhaled_9/"
                target="_blank"
              >
                Instagram
              </Link>
            </li>
            <li className="mt-2">
              <Link
                className="font-medium underline underline-offset-4"
                href="https://github.com/amr12338kh"
                target="_blank"
              >
                GitHub
              </Link>
            </li>
            <li className="mt-2">
              <Link
                className="font-medium underline underline-offset-4"
                href="https://www.linkedin.com/in/amr-khaled-a411bb217/"
                target="_blank"
              >
                Linkedin
              </Link>
            </li>
          </ul>
          <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
            My Website
          </h2>
          <ul className="my-6 ml-6 list-disc">
            <li className="mt-2">
              <Link
                className="font-medium underline underline-offset-4"
                href="https://amr-portfolio-dev.vercel.app/"
                target="_blank"
              >
                amr-portfolio-dev.vercel.app
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
};

export default page;
