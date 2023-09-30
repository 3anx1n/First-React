import CourseCards from "./CourseCards"
import './CourseList.css'

const CourseList = ({courses,selected,toggleSelected})=>{  
    return <div className="course-list">{Object.entries(courses).map(
        ([id,course]) => <CourseCards key={id} id={id} course={course} selected={selected} toggleSelected={toggleSelected}/>)}
        </div>
}

export default CourseList