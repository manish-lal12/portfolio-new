import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Mail, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const GRID_SIZE = 20;
const TILE_COLORS = [
  "hsl(217, 91%, 60%)", // blue
  "hsl(262, 84%, 59%)", // purple
  "hsl(314, 79%, 52%)", // pink
  "hsl(240, 100%, 90%)", // light blue/white
];

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["Full Stack Developer", "DevOps Engineer"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [roles.length]);

  const handleMouseEnter = (e) => {
    const tile = e.target;
    const randomColor =
      TILE_COLORS[Math.floor(Math.random() * TILE_COLORS.length)];
    tile.style.backgroundColor = randomColor;
    tile.style.boxShadow = `0 0 20px ${randomColor}`;
  };

  const handleMouseLeave = (e) => {
    const tile = e.target;
    tile.style.backgroundColor = "transparent";
    tile.style.boxShadow = "none";
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 p-4">
      {/* Interactive Grid Background */}
      <div className="absolute inset-0 h-full w-full -z-10">
        <div
          className="grid h-full w-full"
          style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)` }}
        >
          {[...Array(GRID_SIZE * GRID_SIZE)].map((_, i) => (
            <div
              key={i}
              className="border-x border-t border-slate-900 transition-colors duration-500"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </div>
      </div>

      {/* Content in a refined Glassmorphism Card */}
      <div className="relative z-10 bg-slate-900/60 backdrop-blur-md rounded-2xl max-w-5xl w-full border border-slate-800 shadow-2xl">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 p-8 md:p-12">
          {/* Left Column: Photo */}
          <div className="flex-shrink-0">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <img
                src="https://res.cloudinary.com/ddjyilvpw/image/upload/w_300,h_320/v1755061228/IMG_20250812_fcv6pl.jpg"
                alt="Manish Kumar"
                className="relative w-40 h-40 rounded-full object-cover border-4 border-slate-800"
              />
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            {/* Masked Reveal Animation for Headline */}
            <div className="overflow-hidden">
              <h1
                className="text-5xl md:text-6xl font-semibold text-white drop-shadow-lg animate-fade-in-up"
                style={{
                  animationDelay: "200ms",
                  animationFillMode: "backwards",
                }}
              >
                Manish Kumar
              </h1>
            </div>

            {/* Masked Reveal for Dynamic Role Rotator */}
            <div className="overflow-hidden h-16 flex items-center">
              <span
                key={currentRole}
                className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 animate-fade-in"
                style={{
                  animationDelay: "300ms",
                  animationFillMode: "backwards",
                }}
              >
                {roles[currentRole]}
              </span>
            </div>
            <p
              className="text-lg text-slate-300 max-w-xl leading-relaxed drop-shadow-md animate-fade-in-up"
              style={{
                animationDelay: "400ms",
                animationFillMode: "backwards",
              }}
            >
              I build scalable full-stack applications, from intuitive user
              interfaces to automated cloud infrastructure.
            </p>
            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in-up"
              style={{
                animationDelay: "600ms",
                animationFillMode: "backwards",
              }}
            >
              <a href="#contact">
                <Button
                  size="lg"
                  className="bg-accent-gradient hover:shadow-glow transition-all duration-300 group"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <a href="https://drive.google.com/uc?export=download&id=1OmRJoBUXGCwRyZ_fjn150771o9JU4uGe">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-slate-700 hover:border-slate-500 hover:bg-white/10 transition-colors group"
                >
                  <Download className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  Download Resume
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div
              className="flex gap-4 mt-8 animate-fade-in-up"
              style={{
                animationDelay: "800ms",
                animationFillMode: "backwards",
              }}
            >
              <a
                href="https://github.com/manish-lal12"
                aria-label="Github Profile"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <FaGithub className="h-6 w-6" />
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/manish00110011/"
                aria-label="LinkedIn Profile"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <FaLinkedin className="h-6 w-6" />
                </Button>
              </a>
              <a
                href="mailto:manishlal2274@gmail.com"
                aria-label="Send an Email"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Mail className="h-6 w-6" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
