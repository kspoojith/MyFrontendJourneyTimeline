import './index.css'
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectDetails
  return (
    <div className="project-section">
      <img src={imageUrl} className="project-img" alt="project" />
      <div className="course-head">
        <h1>{projectTitle}</h1>
        <p className="duration">
          <AiFillCalendar />
          {duration}
        </p>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl} className="visit-link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
