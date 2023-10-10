import { BrowserRouter, Routes, Route } from "react-router-dom";
import TermPage from "./TermPage";
import UserEditor from "../UserEditor";
import { useProfile } from '../utilities/profile';


const Dispatcher = ({courses}) => {
  const [profile, profileLoading, profileError] = useProfile();

  if (profileError) return <h1>Error loading profile: {`${profileError}`}</h1>;
  if (profileLoading) return <h1>Loading user profile</h1>;
  if (!profile) return <h1>No profile data</h1>;

  return(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<TermPage profile = {profile} courses={courses}/>} />
    <Route path="/edit/:id" element={<UserEditor courses={courses} />} />
    </Routes>
  </BrowserRouter>
  )
};

export default Dispatcher;