import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {couseDetails} = props
  const {courseTitle, description, duration, tagsList} = couseDetails
  return (
    <div className="course-section">
      <div className="course-head">
        <h1>{courseTitle}</h1>
        <p className="duration">
          <AiFillClockCircle />
          {duration}
        </p>
      </div>
      <p className="description">{description}</p>
      <ul type="none">
        {tagsList.map(each => (
          <li>{each.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
