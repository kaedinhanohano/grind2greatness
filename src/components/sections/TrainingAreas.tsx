import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

const trainingAreas = [
  {
    title: "Ball Control",
    description: "Master the ability to receive, trap, and control the ball in any situation.",
    icon: "🎯",
  },
  {
    title: "Dribbling",
    description: "Learn moves, feints, and techniques to beat defenders with confidence.",
    icon: "⚡",
  },
  {
    title: "First Touch",
    description: "Develop a soft, precise first touch that sets up your next move perfectly.",
    icon: "✨",
  },
  {
    title: "Passing",
    description: "Improve accuracy, weight, and timing of your passes at all distances.",
    icon: "🎯",
  },
  {
    title: "Shooting",
    description: "Perfect your shooting technique for power, accuracy, and consistency.",
    icon: "🔥",
  },
  {
    title: "Footwork",
    description: "Build quick feet and coordination through specialized drills and exercises.",
    icon: "👟",
  },
];

export function TrainingAreas() {
  return (
    <section className="py-20 lg:py-28 bg-dark-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-500/5 to-transparent" />

      <Container className="relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <Badge variant="primary" className="mb-4">
              Training Focus
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Skills That Make{" "}
              <span className="gradient-text">Champions</span>
            </h2>
            <p className="text-dark-400 text-lg mb-8">
              My training focuses on the technical fundamentals that separate good players from great ones.
              Every session is designed to build muscle memory and confidence with the ball at your feet.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-primary-500">10+</div>
                <div className="text-dark-400 text-sm">Years Playing</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-500">All</div>
                <div className="text-dark-400 text-sm">Ages Welcome</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-500">1:1</div>
                <div className="text-dark-400 text-sm">Personal Focus</div>
              </div>
            </div>
          </div>

          {/* Training areas grid */}
          <div className="grid grid-cols-2 gap-4">
            {trainingAreas.map((area, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-dark-800 border border-dark-700 hover:border-primary-500/50 transition-all group"
              >
                <div className="text-3xl mb-3">{area.icon}</div>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary-500 transition-colors">
                  {area.title}
                </h3>
                <p className="text-dark-400 text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
