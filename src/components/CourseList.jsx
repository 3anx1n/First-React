import CourseCards from "./CourseCards"
import './CourseList.css'
import * as TimeConflictUtil from '../utilities/timeConflict';



const CourseList = ({allCourses,courses,selected,toggleSelected})=>{  
    const isConflictWithSelected = (course, courseId) => selected.some(
        selectedId => selectedId !== courseId && TimeConflictUtil.isConflict(course, allCourses[selectedId])
    );
    
    return <div className="course-list">{Object.entries(courses).map(
        ([id,course]) => <CourseCards key={id} id={id} course={course} selected={selected} toggleSelected={toggleSelected} 
        conflict={isConflictWithSelected(course,id)}/>)}
        </div>
}

export default CourseList