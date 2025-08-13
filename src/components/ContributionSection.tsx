import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const OpenSourceSection = () => {
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
