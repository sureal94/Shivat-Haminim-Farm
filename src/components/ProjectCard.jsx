import { Link } from 'react-router-dom'
import FadeIn from './FadeIn'

export default function ProjectCard({ project, delay = 0 }) {
  return (
    <FadeIn delay={delay}>
      <article className="group h-full overflow-hidden rounded-3xl bg-white border border-sand/60 shadow-soft">
        <div className="overflow-hidden aspect-[4/3]">
          <img
            src={project.image}
            alt=""
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="p-6">
          <h3 className="font-display text-xl font-semibold text-forest">{project.title}</h3>
          <p className="mt-3 text-muted leading-relaxed">{project.description}</p>
          <Link
            to={`/donate#${project.id}`}
            className="mt-5 inline-flex text-sm font-semibold text-terracotta hover:text-earth"
          >
            {project.cta}
          </Link>
        </div>
      </article>
    </FadeIn>
  )
}
