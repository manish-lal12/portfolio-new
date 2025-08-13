import { Code, Users, Zap, Award } from "lucide-react";

const AboutSection = () => {
  const philosophies = [
    {
      icon: Code,
      title: "Clean & Scalable Code",
      description:
        "I prioritize writing clean, well-documented, and performant code that is built to scale.",
    },
    {
      icon: Users,
      title: "User-Centric Design",
      description:
        "My focus is on creating intuitive and engaging user experiences that solve real-world problems.",
    },
    {
      icon: Zap,
      title: "Efficient Workflows",
      description:
        "I bridge the gap between development and operations to create seamless, automated CI/CD pipelines.",
    },
    {
      icon: Award,
      title: "Continuous Improvement",
      description:
        "I am dedicated to lifelong learning and constantly exploring new technologies and best practices.",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto rounded-full"></div>
        </div>

        {/* Bio Section */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <p className="text-lg text-slate-300 leading-relaxed">
            I'm a passionate Full Stack Developer and DevOps Engineer with over
            5 years of experience building scalable applications and robust
            infrastructure. My journey started with curiosity about how things
            work under the hood, which led me to master both frontend and
            backend technologies.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            I believe in writing clean, maintainable code and implementing best
            practices for continuous integration and deployment. My mission is
            to bridge the gap between development and operations, creating
            seamless workflows that enable teams to ship quality software
            faster.
          </p>
        </div>

        {/* My Philosophy Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-white text-center mb-10">
            My Core Principles
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {philosophies.map((philosophy, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex p-4 bg-slate-800/50 rounded-full text-cyan-300 mb-4">
                  <philosophy.icon className="w-7 h-7" />
                </div>
                <h4 className="font-semibold text-white text-lg mb-2">
                  {philosophy.title}
                </h4>
                <p className="text-sm text-slate-400">
                  {philosophy.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
