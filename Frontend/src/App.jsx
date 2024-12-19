import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Courses from "./Courses/Courses";
import SignUp from "./components/SignUp"
import ContactForm from "./components/ContactForm";


const App = () => {
  return (
    <>
     <div className="dark:bg-slate-900 dark:text-white">
     <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/course" element={<Courses />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/contact" element={<ContactForm />}></Route>
      </Routes>
     </div>
    </>
  );
};

export default App;
