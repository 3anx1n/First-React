import './CourseCards.css'
import { Link } from 'react-router-dom';
const CourseCards = ({id, course,profile,selected,toggleSelected, conflict}) =>{
    const isSelected = selected.includes(id);
    let cardClasses = 'card m-1 p-2';
    if (isSelected) cardClasses += ' selected';
    if (conflict) cardClasses += ' conflict';

    return <div className={cardClasses} onClick={() => { if (!conflict) toggleSelected(id) }}>
           <div className={`card-body ${selected.includes(id) ? 'selected' : ''}`}>
           <h5 className="card-title">{course.term} CS {course.number}</h5>
           <p className="card-text">{course.title}</p>
           { 
            profile?.isAdmin && 
            <Link to={`/edit/${id}`}>edit</Link>}
           </div>
           <div className='card-footer'>
           <p className="card-text">{course.meets}</p>
           </div>
       </div>
   }
   
   export default CourseCards