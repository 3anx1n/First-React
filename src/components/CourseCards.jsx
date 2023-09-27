const CourseCards = ({course}) =>{
    return <div className="card m-1 p-2">
        <h5 className="card-title">{course.term} CS {course.number}</h5>
        <p className="card-text">{course.title}</p>
        <p className="card-text">{course.meets}</p>
    </div>
}

export default CourseCards