import { useState } from 'react'
import Chooser from './TermSelector'
import CourseList from '../components/CourseList'

const TermPage = ({ courses }) => {
    const choices = ['Fall', 'Winter', 'Spring'];
    const [selected,setSelected] = useState([])
    const [selectedTerm, setSelectedTerm] = useState(choices[0]);
    const filteredCourses = Object.fromEntries(
      Object.entries(courses).filter(([id, course]) => course.term === selectedTerm)
    );
    
    const toggleSelected = (item) => setSelected(
      selected.includes(item)
      ? selected.filter(x => x !== item)
      : [...selected, item]
    );

    return (
      <div>
        <Chooser selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm} choices={choices} />
        <CourseList courses={filteredCourses} selected={selected} toggleSelected={toggleSelected}/>
      </div>
    );

  };
  
  export default TermPage;