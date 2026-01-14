import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description: "View pricing for private soccer coaching sessions in Oahu. Single sessions starting at $65, weekly programs at $200, and free consultations available.",
};

const services = [
  {
    id: "consultation",
    title: "Free Consultation",
    price: "FREE",
    duration: "15 minutes",
    description: "Phone or video call to discuss your goals and create a custom training plan.",
    features: [
      "Assess your current skill level",
      "Discuss your soccer goals",
      "Create a personalized training plan",
      "Answer any questions you have",
      "No commitment required",
    ],
    cta: "Schedule Call",
    href: "/book?service=consultation",
    highlighted: false,
  },
  {
    id: "single",
    title: "Single Session",
    price: "$65",
    duration: "60 minutes",
    description: "One-on-one private training session focused on your specific needs.",
    features: [
      "Full hour of 1-on-1 attention",
      "Customized drills for your level",
      "Real-time feedback and correction",
      "Take-home practice tips",
      "Flexible scheduling",
    ],
    cta: "Book Session",
    href: "/book?service=single",
    highlighted: false,
  },
  {
    id: "weekly",
    title: "Weekly Program",
    price: "$200",
    duration: "4 sessions/week",
    description: "Intensive weekly training for accelerated improvement and skill mastery.",
    features: [
      "4 training sessions per week",
      "Structured progression plan",
      "Priority scheduling",
      "Progress tracking",
      "Best value for committed players",
    ],
    cta: "Start Program",
    href: "/book?service=weekly",
    highlighted: true,
    badge: "Best Value",
  },
];

const faqs = [
  {
    question: "What ages do you train?",
    answer: "I train players of all ages, from young beginners to adults. Training is always tailored to the individual's skill level and goals.",
  },
  {
    question: "Where do sessions take place?",
    answer: "Training sessions are held at local parks and fields across Oahu. We can discuss the most convenient location for you during your free consultation.",
  },
  {
    question: "What should I bring to a session?",
    answer: "Just bring yourself, a ball if you have one (I can provide one if needed), water, and appropriate athletic wear including cleats or turf shoes.",
  },
  {
    question: "How do I pay for sessions?",
    answer: "Payment is collected online when you book. I accept all major credit cards through secure payment processing.",
  },
  {
    question: "What's your cancellation policy?",
    answer: "Sessions can be rescheduled with at least 24 hours notice. Cancellations with less than 24 hours notice may forfeit the session.",
  },
  {
    question: "Do you offer group training?",
    answer: "Currently I focus exclusively on 1-on-1 private training to ensure maximum attention and personalization for each player.",
  },
];

const trainingFocus = [
  {
    title: "Ball Control",
    description: "Master receiving, trapping, and controlling the ball in any situation.",
    icon: "🎯",
  },
  {
    title: "Dribbling Skills",
    description: "Learn moves, feints, and techniques to beat defenders confidently.",
    icon: "⚡",
  },
  {
    title: "First Touch",
    description: "Develop a soft, precise first touch that sets up your next move.",
    icon: "✨",
  },
  {
    title: "Footwork & Agility",
    description: "Build quick feet and coordination through specialized drills.",
    icon: "👟",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-dark-950 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />

        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="primary" className="mb-4">
              Training Programs
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Choose Your Path to{" "}
              <span className="gradient-text">Greatness</span>
            </h1>
            <p className="text-xl text-dark-300 mb-8">
              Flexible training options designed to fit your schedule and accelerate your development.
              All programs include personalized coaching focused on technical skills.
            </p>
          </div>
        </Container>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 lg:py-28 bg-dark-900">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card
                key={service.id}
                id={service.id}
                variant={service.highlighted ? "highlighted" : "default"}
                className="relative flex flex-col"
              >
                {service.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant="success">{service.badge}</Badge>
                  </div>
                )}

                <CardHeader className={service.badge ? "pt-4" : ""}>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-grow">
                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-dark-700">
                    <span className="text-5xl font-bold text-white">{service.price}</span>
                    <span className="text-dark-400 ml-2">/ {service.duration}</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-dark-300">
                        <svg
                          className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button
                    href={service.href}
                    variant={service.highlighted ? "primary" : "secondary"}
                    className="w-full"
                    size="lg"
                  >
                    {service.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 lg:py-28 bg-dark-950">
        <Container>
          <div className="text-center mb-16">
            <Badge variant="primary" className="mb-4">
              Training Focus
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What You&apos;ll Work On
            </h2>
            <p className="text-dark-400 text-lg max-w-2xl mx-auto">
              Every session focuses on the technical fundamentals that make the biggest difference.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingFocus.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-dark-900 border border-dark-800 text-center hover:border-primary-500/50 transition-all"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-dark-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-dark-900">
        <Container size="md">
          <div className="text-center mb-16">
            <Badge variant="primary" className="mb-4">
              FAQ
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-dark-400 text-lg">
              Got questions? Here are some common ones.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-dark-800 border border-dark-700"
              >
                <h3 className="text-lg font-bold text-white mb-2">{faq.question}</h3>
                <p className="text-dark-400">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-dark-400 mb-4">Still have questions?</p>
            <Button href="/contact" variant="outline">
              Contact Me
            </Button>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
