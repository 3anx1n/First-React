const Course = ({course})=>{
    return (<div>{course.term} CS {course.number}: {course.title}</div>)
}

const CourseList = ({courses})=>{

    return <div>{Object.entries(courses).map(
        ([id,course]) => <Course key={id} course={course}/>)}
        </div>
}

export default CourseList