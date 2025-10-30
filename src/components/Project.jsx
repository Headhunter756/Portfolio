import React from 'react'
import './styles/Project.css'

const Project = (props) => {
    return (
        <div className='project'>
            <img src={props.src} alt={props.alt} />
            <div className="project_name">
                <a href={props.href}>{props.name}</a>
            </div>
            <div className="project_techno">
                {props.techno.split(",").map((tech, index)=>{
                    return <span className='badge' key={index}>{tech}</span>
                })}
            </div>
            <div className="project_desc">
                {props.desc}
            </div>
        </div>
    )
}

export default Project
