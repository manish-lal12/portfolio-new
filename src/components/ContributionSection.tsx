import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const GitHubCalendar = React.lazy(() => import("react-github-calendar"));
const Tooltip = React.lazy(() =>
  import("react-tooltip").then((mod) => ({ default: mod.Tooltip }))
);

const OpenSourceSection = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  useEffect(() => {
    // Show calendar after component mounts to avoid blocking page render
    const timer = setTimeout(() => {
      setShowCalendar(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="open-source" className="py-20 md:py-28 bg-slate-950">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">
          My Coding Activity
        </h2>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
          Here's a snapshot of my coding journey over the last year. I enjoy
          staying consistent and contributing regularly.
        </p>

        <div className="flex justify-center p-4 bg-slate-900 rounded-lg">
          {showCalendar && (
            <React.Suspense
              fallback={
                <div className="flex items-center justify-center py-8">
                  <div className="text-slate-300">Loading contributions...</div>
                </div>
              }
            >
              <GitHubCalendar
                username="manish-lal12"
                blockSize={15}
                blockMargin={5}
                colorScheme="dark"
                renderBlock={(block, activity) =>
                  React.cloneElement(block, {
                    "data-tooltip-id": "gh-tooltip",
                    "data-tooltip-content": `${activity.count} contributions on ${activity.date}`,
                  })
                }
              />
              <Tooltip id="gh-tooltip" />
            </React.Suspense>
          )}
        </div>

        <div className="mt-10">
          <a
            href={`https://github.com/manish-lal12`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-accent-gradient hover:shadow-glow transition-all duration-300 group"
            >
              See my work on GitHub
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default OpenSourceSection;
