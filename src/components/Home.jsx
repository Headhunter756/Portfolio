import React from 'react'
import myphoto from '../assets/profile/self.jpg'
import './styles/Home.css'
import anime from '../assets/hobby/anime.jpeg'
import coding from '../assets/hobby/coding.jpeg'
import gaming from '../assets/hobby/gaming.jpeg'
import explore from '../assets/hobby/explore.jpeg'

const Home = () => {
    return (
        <>
            <div className="introduction">
                {/* display writeup and photo side by side */}
                <div className="intro">
                    <h2>Hi, I'm Ayush Ghara </h2>
                    <p>
                        Aspiring to become Full-Stack and DevOps Developer with a passion for building robust, scalable web applications.<br />
                        Currently pursuing my B.Tech in Computer Engineering at Fr. Conceicao Rodrigues College of Engineering (Fr. CRCE), I'm on a mission to master the full product lifecycle — from clean code to seamless deployment.
                    </p>
                </div>
                <div className="pic">
                    {/* the frame should be round and resize it */}
                    <img src={myphoto} alt="my_picture" />
                </div>
            </div>
            <div className="hobbies">
                <h2>Hobbies</h2>
                <p className="hobby-intro">Here's what keeps me inspired and energized outside of work:</p>
                <ul className='hobby-list'>
                    {/* Need to diplay in grid of 2x2 */}
                    <li className='hobby'>
                        Learn Coding
                        <img src={coding} alt="anime" className="hover-img" />
                    </li>
                    <li className='hobby'>
                        Watching Anime
                        <img src={anime} alt="anime" className="hover-img" />
                    </li>
                    <li className='hobby'>
                        Play videogames
                        <img src={gaming} alt="anime" className="hover-img" />
                    </li>
                    <li className='hobby'>
                        Explore new places
                        <img src={explore} alt="anime" className="hover-img" />
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Home
