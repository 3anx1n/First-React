import { useState } from 'react'
import Chooser from './TermSelector'
import CourseList from '../components/CourseList'
import Modal from './Modal'
import Cart from './Cart'
import './TermPage.css'
const TermPage = ({ profile, courses }) => {
    const choices = ['Fall', 'Winter', 'Spring'];
    const [selected,setSelected] = useState([])
    const [selectedTerm, setSelectedTerm] = useState("Fall");
    const [open, setOpen] = useState(false);

    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);
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
        
        <Modal open={open} close={closeModal}>
          <Cart selected={selected.map(id => courses[id])} />
        </Modal>
        <div className='header-buttons'>
          <Chooser selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm} choices={choices} />
         <button className="btn btn-outline-dark" onClick={openModal}>Course Plan</button>
        </div>
        <CourseList allCourses={courses} courses={filteredCourses} profile = {profile} selected={selected} toggleSelected={toggleSelected}/>
      </div>
    );

  };
  
  export default TermPage;