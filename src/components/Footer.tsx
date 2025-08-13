import { Mail, Heart } from "lucide-react";
import { SiReact, SiTailwindcss, SiVite } from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://github.com/manish-lal12",
      icon: FaGithub,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/manish00110011/",
      icon: FaLinkedin,
      label: "LinkedIn",
    },
    {
      href: "mailto:manishlal2274@gmail.com",
      icon: Mail,
      label: "Email",
    },
  ];

  return (
    <footer className="py-8 px-6 bg-slate-950 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Left Side: Credit and Tech */}
          <div className="flex flex-col items-center sm:items-start gap-3">
            <p className="flex gap-1 text-sm text-slate-400">
              Made with
              <Heart height={20} fill="red" stroke="none" /> by Manish Kumar
              &copy; {currentYear}
            </p>
            <div className="flex items-center gap-3 text-slate-500">
              <span className="text-xs font-medium">Built with:</span>
              <SiReact className="w-4 h-4" />
              <SiTailwindcss className="w-4 h-4" />
            </div>
          </div>

          {/* Right Side: Socials */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-slate-500 hover:text-white transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
