import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Courses from "./Courses/Courses";
import SignUp from "./components/SignUp"
import ContactForm from "./components/ContactForm";
import {Toaster} from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";


const App = () => {
   const [authUser, setAuthUser] = useAuth();
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
     <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/course" element={authUser ? <Courses/> : <Navigate to="/signup"/>}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/contact" element={<ContactForm />}></Route>
      </Routes>
      <Toaster></Toaster>
     </div>
  </>
    
  );
};

export default App;
