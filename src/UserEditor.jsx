
import { useFormData } from './utilities/useFormData'
import { useDbUpdate } from './utilities/firebase';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const validateCourseData = (key, val) => {
  switch (key) {
    case 'title':
      return val.length >= 2 ? '' : 'Must be at least two characters';
    case 'meets':
      if (!val) return 'Meeting time cannot be empty'; 
      const timePattern = /^[0-2]?[0-9]:[0-5][0-9]-[0-2]?[0-9]:[0-5][0-9]$/;
      const [days, time] = val.split(' ');
      if (!days) {
        return 'Must provide days before time.';
      }
      const cleanedDays = days.replace(/M|Tu|W|Th|F|Sa|Su/g, '');
      if (cleanedDays.length !== 0) {
        return 'Must contain valid days sequence (e.g., M, Tu, W, Th, F, Sa, Su) without repetitions.';
      }
      if (!timePattern.test(time)) {
        return 'Must contain a valid start-end time, e.g., 12:00-13:20';
      }
    default:
      return '';
  }
};

const InputField = ({name, text, state, change}) => (
  <div className="mb-3">
    <label htmlFor={name} className="form-label">{text}</label>
    <input className={`form-control ${state.errors?.[name] ? 'is-invalid' : ''}`} id={name} name={name} 
      defaultValue={state.values?.[name]} onChange={change} />
    {state.errors?.[name] && <div className="invalid-feedback">{state.errors?.[name]}</div>}
  </div>
);


const ButtonBar = ({message, disabled}) => {
  const navigate = useNavigate();
  return (
    <div className="d-flex">
      <button type="button" className="btn btn-outline-dark me-2" onClick={() => navigate(-1)}>Cancel</button>
      <button type="submit" className="btn btn-primary me-auto" disabled={disabled}>Submit</button>
      <span className="p-2">{message}</span>
    </div>
  );
};

const UserEditor = ({courses}) => {
    const { id } = useParams()
    const course = courses[id]

  const [update, result] = useDbUpdate(`/courses/${course.id}`);
  const [state, change] = useFormData(validateCourseData, course);
  const submit = (evt) => {
    evt.preventDefault();
    if (!state.errors) {
      update(state.values);
    }
  };

  return (
    <form onSubmit={submit} noValidate className={state.errors ? 'was-validated' : null}>
      <InputField name="title" text="Title" state={state} change={change} />
      <InputField name="meets" text="Meeting time" state={state} change={change} />
      <ButtonBar />
    </form>
  )
};

export default UserEditor;