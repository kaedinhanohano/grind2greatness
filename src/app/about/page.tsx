import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "About Adrian Cardenas Santiago",
  description: "Meet Adrian Cardenas Santiago, your dedicated soccer coach in Oʻahu, Hawaiʻi. With over a decade of playing experience and continuous study of skill development, Adrian helps players of all ages master the fundamentals.",
};


const values = [
  {
    title: "Fundamentals First",
    description: "Every great player is built on a foundation of solid fundamentals. That's where we start.",
  },
  {
    title: "Personalized Approach",
    description: "No two players are the same. Training is tailored to your unique needs and goals.",
  },
  {
    title: "Patience & Progress",
    description: "Skill development takes time. We focus on consistent improvement, not overnight results.",
  },
  {
    title: "Passion for the Game",
    description: "Soccer should be fun. Training is designed to build both skill and love for the sport.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-dark-950 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />

        <Container>
          <div className="max-w-4xl mx-auto">
            <Badge variant="primary" className="mb-4">
              Meet Your Coach
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Hi, I&apos;m{" "}
              <span className="gradient-text">Adrian Cardenas Santiago</span>
            </h1>
            <p className="text-xl text-dark-300 mb-8 leading-relaxed">
              I&apos;ve been playing soccer my entire life, constantly learning and refining my craft.
              The game has shaped who I am today. Now based in Oʻahu, Hawaiʻi, I help players of all ages
              develop the technical skills that make the biggest difference on the field. All ages welcome—come ready to grind.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/book" size="lg">
                Book a Session
              </Button>
              <Button href="/services" variant="outline" size="lg">
                View Services
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Built Through the Process */}
      <section className="py-20 lg:py-28 bg-dark-900">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="primary" className="mb-4">
              My Journey
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Built Through the Process
            </h2>
            <p className="text-dark-400 text-lg">
              Shaped by years of playing, studying the game, and testing what actually improves performance on the field.
            </p>
          </div>
        </Container>
      </section>

      {/* Training Philosophy */}
      <section className="py-20 lg:py-28 bg-dark-950">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Badge variant="primary" className="mb-4">
                Training Philosophy
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Building Better Players,{" "}
                <span className="gradient-text">One Touch at a Time</span>
              </h2>
              <p className="text-dark-300 text-lg mb-6">
                My approach to coaching is simple: master the fundamentals first. Ball control,
                dribbling, first touch, footwork—these are the skills that separate good players
                from great ones.
              </p>
              <p className="text-dark-400 mb-8">
                I don&apos;t focus on game tactics or positioning. Instead, I specialize in the technical
                skills that give you confidence with the ball at your feet. When you have that foundation,
                everything else becomes easier.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="p-4 bg-dark-900 rounded-xl border border-dark-800">
                    <h3 className="font-bold text-white mb-1">{value.title}</h3>
                    <p className="text-dark-400 text-sm">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats/Highlights */}
            <div className="bg-dark-900 rounded-2xl p-8 border border-dark-800">
              <h3 className="text-2xl font-bold text-white mb-8">Why Train With Me</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Dedicated Student of the Game</h4>
                    <p className="text-dark-400">Over a decade of playing, backed by continuous research and hands-on study.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Technique Specialist</h4>
                    <p className="text-dark-400">Focused exclusively on the technical skills that matter most.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Local & Worldwide</h4>
                    <p className="text-dark-400">In-person training on Oʻahu, online programs available worldwide.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Passionate About Teaching</h4>
                    <p className="text-dark-400">Nothing beats seeing a player master a new skill.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
