"use client";

import useGithubRepos from "@/hooks/useGitHubRepos";

import config from "@/config";

import InternalLink from "@/components/Links/InternalLink";
import SectionTitle from "@/components/SectionTitle";

import Image from "next/image";
import Link from "next/link";

import { Star, ArrowUpRight } from "lucide-react";

interface Project {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  languages: string[];
  img: string;
}

export default function Projects() {
  const { repos, isLoading } = useGithubRepos();

  const filteredRepos = repos.filter((repo: Project) => {
    return config.showedProjects.includes(repo.name);
  });

  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <SectionTitle>Projects</SectionTitle>
      <div>
        {isLoading ? (
          <div>
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                className="relative grid gap-4 pb-1 mb-12 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 animate-pulse"
                key={index}
              >
                <div className="absolute z-0 hidden transition rounded-md -inset-x-4 -inset-y-4 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50"></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <div className="w-full h-4 mb-1 rounded bg-teal-400/10"></div>
                  <div className="w-full h-2 mb-2 rounded bg-teal-400/10"></div>
                  <div className="w-full h-10 rounded bg-teal-400/10"></div>
                </div>
                <div className="transition rounded sm:order-1 sm:col-span-2 bg-teal-400/10"></div>
              </div>
            ))}
          </div>
        ) : (
          <ul className="group/list">
            {filteredRepos.map((project: Project, index) => (
              <li key={index} className="mb-12">
                <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:order-2 sm:col-span-6">
                    <h3>
                      <Link
                        className="inline-flex items-baseline text-base font-medium leading-tight group/link text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                        href={project.html_url}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${project.name} (opens in a new tab)`}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          {project.name.replaceAll("-", " ")}
                          <span className="inline-block">
                            <ArrowUpRight className="inline-block w-4 h-4 ml-1 transition-transform translate-y-px shrink-0 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
                          </span>
                        </span>
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">
                      {project.description}
                    </p>
                    {project.stargazers_count !== undefined && (
                      <Link
                        className="relative inline-flex items-center mt-2 text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                        href={project.html_url}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="0 stars on GitHub (opens in a new tab)"
                      >
                        <Star className="w-3 h-3 mr-1" />
                        <span>{project.stargazers_count}</span>
                      </Link>
                    )}
                    <ul
                      className="flex flex-wrap mt-2"
                      aria-label="Technologies used:"
                    >
                      {project.languages &&
                        project.languages.map((language, index) => (
                          <li key={index} className="mr-1.5 mt-2">
                            <div className="flex items-center px-3 py-1 text-xs font-medium leading-5 text-teal-300 rounded-full bg-teal-400/10">
                              {language}
                            </div>
                          </li>
                        ))}
                    </ul>
                  </div>
                  <Image
                    alt={`${project.name} homepage`}
                    loading="lazy"
                    width="200"
                    height="48"
                    decoding="async"
                    data-nimg="1"
                    className="transition border-2 rounded border-slate-200/10 group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                    style={{
                      color: "transparent",
                    }}
                    src={project.img} // add fallback image
                  />
                </div>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-12">
          <InternalLink href="/projects">View All Projects</InternalLink>
        </div>
      </div>
    </section>
  );
}
