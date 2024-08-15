
import React, { useState } from "react";
import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills"; 
import Education from "./components/Education/Education"; 
import { useDispatch } from "react-redux";
import { addMessage } from "./features/ui/uislice";
import ChatbotContainer from "./components/ChatbotContainer";
import './components/Chatbot.css';

const App = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <ChatbotContainer />
      <About />
      <Education />
      <Experience />
      <Skills />  
      <Projects />
      <Contact />
    </div>
  );
};
export default App;
