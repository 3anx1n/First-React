import { BrowserRouter, Routes, Route } from "react-router-dom";
import TermPage from "./TermPage";
import UserEditor from "../UserEditor";

const Dispatcher = ({courses}) => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<TermPage courses={courses}/>} />
    <Route path="/edit/:id" element={<UserEditor courses={courses} />} />
    </Routes>
  </BrowserRouter>
);

export default Dispatcher;