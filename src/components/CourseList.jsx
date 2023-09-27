import CourseCards from "./CourseCards"
import './CourseList.css'
const CourseList = ({courses})=>{

    return <div className="course-list">{Object.entries(courses).map(
        ([id,course]) => <CourseCards key={id} course={course}/>)}
        </div>
}

export default CourseList