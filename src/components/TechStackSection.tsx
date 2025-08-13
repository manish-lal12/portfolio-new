import {
  SiReact,
  SiPrisma,
  SiNextdotjs,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiGraphql,
  SiExpress,
  SiPrometheus,
  SiDocker,
  SiKubernetes,
  SiTailwindcss,
  SiNodedotjs,
  SiTerraform,
  SiSocketdotio,
  SiNginx,
  SiTurborepo,
  SiGit,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { DiRedis } from "react-icons/di";
import { Flame } from "lucide-react";

const TechStackSection = () => {
  const technologies = [
    { name: "Next.js", Icon: SiNextdotjs },
    { name: "React", Icon: SiReact },
    { name: "Tailwind", Icon: SiTailwindcss },
    { name: "Node.js", Icon: SiNodedotjs },
    { name: "Prisma", Icon: SiPrisma },
    { name: "PostgreSQL", Icon: SiPostgresql },
    { name: "Redis", Icon: DiRedis },
    { name: "MongoDB", Icon: SiMongodb },
    { name: "MySQL", Icon: SiMysql },
    { name: "GraphQL", Icon: SiGraphql },
    { name: "Express", Icon: SiExpress },
    { name: "Hono", Icon: Flame },
    { name: "Docker", Icon: SiDocker },
    { name: "Kubernetes", Icon: SiKubernetes },
    { name: "Terraform", Icon: SiTerraform },
    { name: "AWS", Icon: FaAws },
    { name: "Prometheus", Icon: SiPrometheus },
    { name: "Socket.IO", Icon: SiSocketdotio },
    { name: "Nginx", Icon: SiNginx },
    { name: "Turborepo", Icon: SiTurborepo },
    { name: "Git", Icon: SiGit },
  ];

  return (
    <section id="skills" className="py-20 px-2 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
            Tech Stack
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto rounded-full"></div>
        </div>

        {/* Main Container Card */}
        <div className="relative bg-slate-900/60 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-slate-800 shadow-2xl">
          <div className="absolute -inset-px bg-gradient-to-r from-blue-500/30 to-cyan-400/30 rounded-2xl blur-lg opacity-20"></div>

          {/* Unified Grid of Technologies */}
          <div className="relative grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-8">
            {technologies.map((tech) => (
              <div key={tech.name} className="relative group">
                <div className="absolute -inset-px bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg opacity-0 group-hover:opacity-70 transition-opacity duration-300 blur-sm"></div>
                <div className="relative bg-slate-900/80 backdrop-blur-md rounded-lg p-5 border border-slate-800 group-hover:border-slate-700 transition-colors duration-300 aspect-square">
                  <div className="flex flex-col items-center justify-center text-center h-full">
                    <tech.Icon className="text-3xl text-slate-300 group-hover:text-white transition-colors" />
                    <h4 className="font-semibold text-xs text-slate-400 group-hover:text-white transition-colors mt-2">
                      {tech.name}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
