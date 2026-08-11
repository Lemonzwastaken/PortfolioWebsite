import React from "react";
import Image from "next/image";

const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-US", { month: "short", year: "numeric" });

const ProjectLayout = ({ id, name, description, date, demoLink, index }) => {
  return (
    <a
      href={demoLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex aspect-[4/5] w-full max-w-sm flex-col justify-between
      overflow-hidden rounded-2xl border border-solid border-accent/20
      bg-background shadow-glass-inset transition-all duration-300
      hover:border-accent/50 hover:shadow-glass-sm hover:-translate-y-1"
    >
      <Image
        src={`/projects/images/${id}.png`}
        alt={name}
        fill
        sizes="(max-width: 768px) 100vw, 384px"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-background/10" />

      <div className="relative z-10 flex items-start justify-between p-5">
        <span className="rounded-full border border-solid border-accent/40 bg-background/60 px-3 py-1
        font-mono text-[10px] uppercase tracking-widest text-accent backdrop-blur-sm">
          Project {String(index + 1).padStart(2, "0")}
        </span>
        <span className="rounded-full bg-accent px-3 py-1 font-mono text-[10px] font-bold uppercase
        tracking-widest text-background">
        </span>
      </div>

      <div className="relative z-10 flex flex-col gap-2 p-5">
        <h2 className="text-3xl font-black uppercase leading-[0.95] tracking-tight text-foreground
        drop-shadow-sm">
          {name}
        </h2>
        <p className="text-sm leading-snug text-muted line-clamp-2">
          {description}
        </p>

        <div className="mt-3 flex items-center justify-between border-t border-solid border-muted/20 pt-3">
          <span className="font-mono text-[11px] text-muted/70">
            {formatDate(date)}
          </span>
          <span className="flex items-center gap-1 font-mono text-xs font-semibold text-accent
          opacity-0 transition-all duration-300 group-hover:opacity-100">
            View project
            <svg className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </a>
  );
};

export default ProjectLayout;