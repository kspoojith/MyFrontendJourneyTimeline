import './index.css'
import {Component} from 'react'
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

class TimelineView extends Component {
  render() {
    const {timelineItemsList} = this.props
    const items = timelineItemsList.map(each => ({title: each.title}))
    console.log(items)
    return (
      <div className="main-page">
        <h1>MY JOURNEY OF</h1>
        <h1>CCBP 4.0</h1>
        <div className="chrono-container">
          <Chrono
            mode="VERTICAL_ALTERNATING"
            items={items}
            theme={{
              primary: '#0967d2', // Line color
              secondary: '#ffffff', // Circle color
              titleColor: '#0967d2', // Default title color
              titleColorActive: '#ffffff', // Selected title color
            }}
          >
            {timelineItemsList.map(each => {
              if (each.categoryId === 'COURSE') {
                return <CourseTimelineCard couseDetails={each} key={each.id} />
              }
              return <ProjectTimelineCard projectDetails={each} key={each.id} />
            })}
          </Chrono>
        </div>
      </div>
    )
  }
}

export default TimelineView
