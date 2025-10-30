import React from 'react'
import './styles/Skill.css'

const Skills = (props) => {
    return (
        <div className="skill">
            <div className="skill_icon">
                <img src={props.src} alt={props.alt} />
            </div>
            <div className="skill_desc">
                {props.desc}
            </div>
        </div>
    )
}

export default Skills