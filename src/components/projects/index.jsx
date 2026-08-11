import ProjectLayout from "./ProjectLayout"

const ProjectList = ({ projects }) => {
  return (
    <div className="w-full max-w-6xl px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
    gap-6 place-items-center">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className="w-full opacity-0 animate-[fadeInUp_0.5s_ease-out_forwards]"
          style={{ animationDelay: `${index * 80}ms` }}
        >
          <ProjectLayout {...project} index={index} />
        </div>
      ))}
    </div>
  )
}

export default ProjectList