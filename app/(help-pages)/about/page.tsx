import Link from "next/link";
import { Github, ExternalLink, Globe, Code } from "lucide-react";
import HelpHeroBanner from "@/components/help/HelpHeroBanner";
import { socials, techStack } from "@/data";
import { CTA } from "@/components/help/CTA";

const AboutPage = () => {
  return (
    <main className="flex-1 bg-gradient-to-b from-background to-muted/20">
      <div className="container max-w-6xl py-12 md:py-16 lg:py-20">
        <HelpHeroBanner
          title="About"
          subTitle="Learn about the MegaMart project and the developer behind it."
        />

        <div className="space-y-10">
          <div className="grid lg:grid-cols-3 gap-10">
            <section className="bg-card rounded-xl shadow-sm p-8 border border-border/50 lg:col-span-2">
              <h2 className="text-2xl font-semibold mb-2">The Project</h2>
              <p className="text-muted-foreground mb-6">
                MegaMart is a sleek e-commerce platform showcasing my expertise
                in web development. Built with Next.js, Tailwind CSS, and
                Shadcn/ui, this project offers a seamless shopping experience
                across a wide range of products. With dynamic page rendering and
                responsive design.
              </p>

              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-primary/10 p-2 rounded-full mr-3">
                  <Code className="h-5 w-5 text-primary" />
                </span>
                Tech Stack
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {techStack.map((tech) => (
                  <Link
                    key={tech.name}
                    href={tech.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 bg-card hover:bg-accent/30 rounded-md border border-border/50 transition-colors group"
                  >
                    <div className="bg-primary/10 p-2 rounded-full">
                      <ExternalLink className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-medium text-sm group-hover:text-primary">
                      {tech.name}
                    </span>
                  </Link>
                ))}
              </div>

              <div className="h-px w-full bg-border/60 my-6" />

              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-primary/10 p-2 rounded-full mr-3">
                  <Github className="h-5 w-5 text-primary" />
                </span>
                About the Author
              </h3>

              <p className="text-muted-foreground">
                Hello there! 👋 I&apos;m{" "}
                <Link
                  href="https://github.com/amr12338kh"
                  className="text-primary hover:underline underline-offset-4"
                  target="_blank"
                >
                  &apos;Amr&apos;
                </Link>
                , a passionate Front-End Web Developer with a specialization in
                <Link
                  href="https://nextjs.org/"
                  className="text-primary hover:underline underline-offset-4"
                  target="_blank"
                >
                  {" "}
                  Next.js
                </Link>
                , the cutting-edge
                <Link
                  href="https://react.dev/"
                  className="text-primary hover:underline underline-offset-4"
                  target="_blank"
                >
                  {" "}
                  React.js
                </Link>{" "}
                framework. If you&apos;re seeking a skilled professional to
                transform your web project into a seamless and dynamic user
                experience, you&apos;ve come to the right place.
              </p>
            </section>

            <section className="space-y-8">
              <div className="bg-card rounded-xl shadow-sm p-6 border border-border/50">
                <h2 className="text-2xl font-semibold mb-6 flex items-center">
                  <span className="bg-primary/10 p-2 rounded-full mr-3">
                    <Globe className="h-5 w-5 text-primary" />
                  </span>
                  My Portfolio
                </h2>
                <p className="text-muted-foreground mb-4">
                  Check out my portfolio website to see more of my work and
                  projects.
                </p>
                <Link
                  href="https://amr-portfolio-dev.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 w-full"
                >
                  Visit Portfolio
                </Link>

                <div className="h-px w-full bg-border/60 my-6" />

                <h2 className="text-xl font-semibold mb-4">Connect With Me</h2>
                <ul className="space-y-4">
                  {socials.map((social) => (
                    <li
                      key={social.name}
                      className="flex items-center gap-4 p-3 bg-card hover:bg-accent/30 rounded-md border border-border/50 transition-colors"
                    >
                      <div className="bg-primary/10 p-2 rounded-full">
                        <social.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{social.name}</p>
                        <Link
                          href={social.url}
                          className="text-primary hover:underline underline-offset-4 text-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {social.username}
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          <CTA
            icon={Code}
            title="Want to Collaborate?"
            subTitle="I'm always open to new opportunities and exciting projects."
            btnText="Get in Touch"
            link="https://amr-portfolio-dev.vercel.app/#contact"
            blank
          />
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
