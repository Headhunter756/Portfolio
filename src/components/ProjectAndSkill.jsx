import React from 'react'
import hcj from '../assets/skills/HTML.png'
import java from '../assets/skills/java.png'
import reacticon from '../assets/skills/react.png'
import boot from '../assets/skills/Spring Boot.png'
import security from '../assets/skills/spring-security.png'
import project1 from '../assets/skills/Project 1.png'
import project2 from '../assets/skills/Project 2.png'
import Skill from './Skill.jsx'
import Project from './Project.jsx'
import './styles/ProjectAndSkill.css'
import useScrollReveal from './ScrollReveal.jsx'

const ProjectAndSkill = () => {
  useScrollReveal();
  return (
    <div className='PaS'>
      <h2>My Skills</h2>
      <div className="skills">
        {/* Image slider with next/previous buttons to cycle through skills */}
        <Skill
          src={hcj}
          alt="HTML, CSS, JavaScript"
          desc="Core web languages (HTML, CSS, JavaScript) that enable me to build responsive, small-scale web projects."
        />

        <Skill
          src={reacticon}
          alt="React.js"
          desc="React.js, a JavaScript library I use to build dynamic UIs. I also work with React Router for navigation and use Redux basics for global state management"
        />

        <Skill
          src={java}
          alt="Java"
          desc="Java, a robust and platform-independent language, ideal for building scalable backend systems and enterprise-grade applications."
        />

        <Skill
          src={boot}
          alt="Spring Boot"
          desc="Spring Boot, a Java framework that streamlines backend development using Maven/Gradle and provides embedded servers for running APIs."
        />

        <Skill
          src={security}
          alt="Spring Security"
          desc="Spring Security, a powerful Java framework that adds authentication and authorization to Spring-based applications."
        />
      </div>
      <h2>My Projects</h2>
      <div className="projects scroll-reveal">
        {/* kind of cards system */}
        <Project
          src={project1}
          alt="1st Project"
          name="Expense Tracker"
          href="https://headhunter756.github.io/Expense-Tracker/"
          techno="Java,Spring Boot,Spring Security,MySQL,HTML,CSS,JS"
          desc="Expense Tracker is a personal finance web application that helps you monitor and manage your spending. It allows you to log your expenses and view detailed records over time. You can also share your expense history with others by granting them view-only access — ensuring they can see your data without being able to modify, add, or delete any entries."
        />
        <Project
          src={project2}
          alt="Upcoming Project"
          name="My Canten"
          href=""
          techno="Kotlin,Firebase"
          desc="My Canten is a food ordering web application that allows users to browse the menu and place orders seamlessly. Designed for convenience and clarity, it streamlines the dining experience by putting the entire canteen menu at your fingertips. The project is currently under development and will be available for use soon."
        />
      </div>
    </div>
  )
}

export default ProjectAndSkill
