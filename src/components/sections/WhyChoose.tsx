import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

const reasons = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Lifelong Experience",
    description: "Over a decade of playing soccer at competitive levels, including high school states and club teams.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Technique Focused",
    description: "Specialized in fundamentals, ball control, and dribbling—the skills that make the biggest difference.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "All Ages Welcome",
    description: "Whether you're a young beginner or an adult looking to improve, training is tailored to your level.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Oahu Local",
    description: "Training at convenient local parks and fields across Oahu. Flexible locations to suit your needs.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Personalized Approach",
    description: "Every session is customized to your goals, strengths, and areas for improvement. No cookie-cutter drills.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Transparent Pricing",
    description: "Clear, straightforward pricing with no hidden fees. Pay per session or save with weekly programs.",
  },
];

export function WhyChoose() {
  return (
    <section className="py-20 lg:py-28 bg-dark-950">
      <Container>
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="primary" className="mb-4">
            Why Train With Me
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            What Sets{" "}
            <span className="gradient-text">Grind2Greatness</span>
            {" "}Apart
          </h2>
          <p className="text-dark-400 text-lg max-w-2xl mx-auto">
            Dedicated to helping you master the fundamentals and develop the technical skills that make a real difference on the field.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-dark-900 border border-dark-800 hover:border-primary-500/50 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary-500/10 rounded-xl flex items-center justify-center text-primary-500 mb-4 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
              <p className="text-dark-400">{reason.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
