import {
  Building,
  CheckCircle,
  Zap,
  Users,
  Rocket,
  Workflow,
  CreditCard,
} from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Full Stack Engineer Intern",
      company: "Referrio.io",
      period: "May 2025 – Present",
      description:
        "Assisting in building and deploying scalable web apps, streamlining CI/CD, and integrating core backend services.",
      achievements: [
        {
          text: "Led a critical database migration with zero downtime, ensuring seamless user experience.",
          icon: Workflow,
        },
        {
          text: "Built and deployed Docker images with automated scripts, streamlining CI/CD pipelines.",
          icon: Rocket,
        },
        {
          text: "Managed deployments and testing across development and production environments.",
          icon: Zap,
        },
        {
          text: "Integrated Stripe to enable secure and efficient payment processing workflows.",
          icon: CreditCard,
        },
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
            My Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto rounded-full"></div>
        </div>

        {/* Experience Card */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative bg-slate-900/60 backdrop-blur-md rounded-2xl p-8 border border-slate-800 shadow-2xl"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-blue-500/30 to-cyan-400/30 rounded-2xl blur-lg opacity-20"></div>
              <div className="relative">
                {/* Header Info */}
                <div className="text-center md:text-left mb-6">
                  <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                  <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-x-4 gap-y-1 text-slate-400 mt-1">
                    <p className="flex items-center gap-2">
                      <Building className="w-4 h-4" /> {exp.company}
                    </p>
                    <span className="hidden md:inline">•</span>
                    <p className="text-sm text-cyan-300">{exp.period}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 mb-8 max-w-3xl mx-auto md:mx-0">
                  {exp.description}
                </p>

                {/* Achievements Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {exp.achievements.map((ach, i) => (
                    <div
                      key={i}
                      className="bg-slate-800/50 p-4 rounded-lg flex items-start gap-4"
                    >
                      <div className="p-2 bg-slate-700/50 rounded-md">
                        <ach.icon className="w-5 h-5 text-cyan-300 flex-shrink-0" />
                      </div>
                      <p className="text-sm text-slate-300">{ach.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
