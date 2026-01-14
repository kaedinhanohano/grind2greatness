import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Book a Session",
  description: "Schedule your soccer training session with Adrian Cardenas. Book a free consultation, single session, or weekly program online.",
};

const bookingOptions = [
  {
    id: "consultation",
    title: "Free Consultation",
    price: "FREE",
    duration: "15 minutes",
    description: "Quick call to discuss your goals and create a training plan.",
    icon: "📞",
  },
  {
    id: "single",
    title: "Single Session",
    price: "$65",
    duration: "60 minutes",
    description: "One-on-one private training focused on your needs.",
    icon: "⚽",
  },
  {
    id: "weekly",
    title: "Weekly Program",
    price: "$200",
    duration: "4 sessions",
    description: "Intensive weekly training for accelerated improvement.",
    icon: "🏆",
    badge: "Best Value",
  },
];

const whatToExpect = [
  {
    step: "1",
    title: "Choose Your Service",
    description: "Select the training option that fits your needs and schedule.",
  },
  {
    step: "2",
    title: "Pick a Time",
    description: "Choose from available time slots that work for your schedule.",
  },
  {
    step: "3",
    title: "Confirmation",
    description: "You'll receive an email confirmation with session details.",
  },
  {
    step: "4",
    title: "Show Up Ready",
    description: "Come prepared with water, ball, and a great attitude!",
  },
];

export default function BookPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-dark-950">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="primary" className="mb-4">
              Book Now
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Schedule Your{" "}
              <span className="gradient-text">Training</span>
            </h1>
            <p className="text-xl text-dark-300">
              Choose a service below and book your session online.
              Start with a free consultation if you&apos;re not sure where to begin.
            </p>
          </div>
        </Container>
      </section>

      {/* Booking Options */}
      <section className="py-12 lg:py-16 bg-dark-950">
        <Container>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {bookingOptions.map((option) => (
              <Card
                key={option.id}
                className="relative text-center hover:border-primary-500/50 transition-all cursor-pointer"
                hover
              >
                {option.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant="success">{option.badge}</Badge>
                  </div>
                )}
                <CardContent className={option.badge ? "pt-6" : ""}>
                  <div className="text-4xl mb-4">{option.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-1">{option.title}</h3>
                  <p className="text-dark-400 text-sm mb-4">{option.description}</p>
                  <div className="text-2xl font-bold text-primary-500">
                    {option.price}
                    <span className="text-dark-400 text-sm font-normal ml-1">
                      / {option.duration}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Calendar Embed Placeholder */}
      <section className="py-12 lg:py-16 bg-dark-900">
        <Container size="lg">
          <div className="bg-dark-800 rounded-2xl border border-dark-700 p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Select a Date & Time</h2>
              <p className="text-dark-400">
                Choose from available time slots below
              </p>
            </div>

            {/* Placeholder for Cal.com embed */}
            <div className="bg-dark-900 rounded-xl border border-dark-600 p-12 text-center min-h-[400px] flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Calendar Coming Soon</h3>
              <p className="text-dark-400 max-w-md mb-6">
                Online booking will be available here shortly. In the meantime, please contact me directly to schedule your session.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:4adrian.cardenas.santiago@gmail.com"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Me
                </a>
                <a
                  href="https://instagram.com/adrian.cardenas.santiago"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-dark-700 text-white font-semibold rounded-xl hover:bg-dark-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  DM on Instagram
                </a>
              </div>
            </div>

            {/* Integration note */}
            <p className="text-center text-dark-500 text-sm mt-6">
              💡 Tip: Mention &quot;Grind2Greatness&quot; when you reach out!
            </p>
          </div>
        </Container>
      </section>

      {/* What to Expect */}
      <section className="py-20 lg:py-28 bg-dark-950">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white mb-2">What to Expect</h2>
            <p className="text-dark-400">The booking process is simple</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatToExpect.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-dark-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Preparation Tips */}
      <section className="py-12 lg:py-16 bg-dark-900">
        <Container size="md">
          <div className="bg-dark-800 rounded-2xl border border-dark-700 p-8">
            <h2 className="text-xl font-bold text-white mb-4">Before Your Session</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-dark-300">
                <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Bring a soccer ball (I can provide one if needed)
              </li>
              <li className="flex items-start gap-3 text-dark-300">
                <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Wear appropriate athletic clothing and cleats/turf shoes
              </li>
              <li className="flex items-start gap-3 text-dark-300">
                <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Bring plenty of water to stay hydrated
              </li>
              <li className="flex items-start gap-3 text-dark-300">
                <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Arrive a few minutes early to warm up
              </li>
              <li className="flex items-start gap-3 text-dark-300">
                <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Come ready to work hard and have fun!
              </li>
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
