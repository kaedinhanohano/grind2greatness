import { Container } from "@/components/ui/Container";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const services = [
  {
    id: "consultation",
    title: "Free Consultation",
    price: "FREE",
    duration: "15 minutes",
    description: "Phone or video call to discuss your goals and create a custom training plan.",
    features: [
      "Assess current skill level",
      "Discuss training goals",
      "Create personalized plan",
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
    duration: "1 hour 15 minutes",
    description: "In-person 1-on-1 training on Oʻahu, Hawaiʻi. Focused attention on your specific needs.",
    features: [
      "In-person training only",
      "1-on-1 personal attention",
      "Customized drills",
      "Oʻahu, Hawaiʻi locations",
    ],
    cta: "Book Session",
    href: "/book?service=single",
    highlighted: false,
  },
  {
    id: "weekly",
    title: "Weekly Program",
    price: "$200",
    duration: "5 sessions/week",
    description: "Structured online training program designed for athletes to follow independently from anywhere.",
    features: [
      "5 training sessions",
      "Online program worldwide",
      "Follow at your own pace",
      "Best value for serious players",
    ],
    cta: "Start Program",
    href: "/book?service=weekly",
    highlighted: true,
    badge: "Best Value",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-dark-900">
      <Container>
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="primary" className="mb-4">
            Training Programs
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Choose Your Path to{" "}
            <span className="gradient-text">Greatness</span>
          </h2>
          <p className="text-dark-400 text-lg max-w-2xl mx-auto">
            Flexible training options designed to fit your schedule and accelerate your development.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              variant={service.highlighted ? "highlighted" : "default"}
              className="relative flex flex-col"
              hover
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
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{service.price}</span>
                  <span className="text-dark-400 ml-2">/ {service.duration}</span>
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-dark-300">
                      <svg
                        className="w-5 h-5 text-primary-500 flex-shrink-0"
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
                >
                  {service.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
