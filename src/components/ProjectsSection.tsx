import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Moneymap",
      description:
        "A personal finance dashboard that helps you visualize, track, and manage your money with clarity.",
      image: "https://i.postimg.cc/jjLqYtqL/Screenshot-20250811-124535.png",
      technologies: [
        "Next.js",
        "PostgreSQL",
        "Docker",
        "Tailwind CSS",
        "Prisma",
      ],
      github: "https://github.com/manish-lal12/money-map",
      demo: "https://money-map-lac.vercel.app/",
      stars: 124,
      featured: true,
    },
    {
      id: 2,
      title: "Dashcraft",
      description:
        "A front-end library with reusable React components and pre-built templates to accelerate future development.",
      image: "https://i.postimg.cc/G3Y2pLFD/Screenshot-20250812-142354.png",
      technologies: [
        "React.js",
        "Express",
        "MongoDB",
        "Firebase",
        "Stripe SDK",
        "Docker",
      ],
      github: "https://github.com/sagarchaurasia176/DashboardUI",
      demo: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Shrinkr",
      description:
        "Easily create and manage short URLs, track click performance in real-time, and optimize your marketing with powerful analytics.",
      image: "https://i.postimg.cc/yNzsJc7C/Screenshot-20250812-130406.png",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Prisma",
        "Server-Sent Events (SSE)",
        "MongoDB",
      ],
      github: "https://github.com/manish-lal12/url-shortener",
      demo: "https://url-shortener-two-olive.vercel.app/",
      featured: true,
    },
    {
      id: 4,
      title: "Password Manager",
      description:
        "Vault is a secure and user-friendly password manager that stores and encrypts your credentials using AES-256. Access your passwords anytime, anywhere—safely.",
      // image: "",
      // technologies: ["Vue.js", "Python", "TensorFlow", "D3.js", "FastAPI"],
      github: "https://github.com/manish-lal12/Vault",
      demo: "https://vault-b0kc.onrender.com/",
      featured: false,
    },
    {
      id: 5,
      title: "Video Meet",
      description:
        "A scalable microservices pattern with an API gateway, service discovery, and distributed tracing.",
      // image: "",
      // technologies: ["Go", "Docker", "Consul", "Jaeger", "gRPC"],
      github: "https://github.com/manish-lal12/video-meet",
      demo: "https://video-meet-rho.vercel.app",
      featured: false,
    },
    // {
    //   id: 6,
    //   title: "Cloud Infrastructure Manager",
    //   description:
    //     "IaC tool for multi-cloud deployments with cost optimization and security scanning.",
    //   // image: "",
    //   // technologies: ["Terraform", "AWS", "Azure", "Python", "Ansible"],
    //   github: "#",
    //   demo: "#",
    //   featured: false,
    // },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 px-4 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto rounded-full"></div>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {featuredProjects.map((project) => (
            <div key={project.id} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg blur-sm opacity-50 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-md rounded-lg h-full overflow-hidden border border-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-slate-800 text-cyan-300 border-slate-700"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                    <div className="flex items-center gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                      >
                        <Github className="w-4 h-4" /> Code
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                      >
                        <ExternalLink className="w-4 h-4" /> Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-3xl font-semibold mb-8 text-center text-white">
            Other Noteworthy Projects
          </h3>
          <div className="max-w-4xl mx-auto">
            <ul className="space-y-4">
              {otherProjects.map((project) => (
                <li
                  key={project.id}
                  className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-lg p-4 group hover:border-slate-700 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex-grow">
                      <h4 className="font-semibold text-white">
                        {project.title}
                      </h4>
                      <p className="text-sm text-slate-400 mt-1">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 flex-shrink-0 mt-2 sm:mt-0">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
