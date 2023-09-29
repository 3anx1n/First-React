import { useState } from 'react'
import Chooser from './TermSelector'
import CourseList from '../components/CourseList'

const TermPage = ({ courses }) => {
    const choices = ['Fall', 'Winter', 'Spring'];
    const [selectedTerm, setSelectedTerm] = useState(choices[0]);
    const filteredCourses = Object.fromEntries(
      Object.entries(courses).filter(([id, course]) => course.term === selectedTerm)
    );

    return (
      <div>
        <Chooser selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm} choices={choices} />
        <CourseList courses={filteredCourses}/>
      </div>
    );

  };
  
  export default TermPage;