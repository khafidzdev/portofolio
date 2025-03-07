import { useEffect, useState } from 'react';
import '../styles/About.css';
import ScrollFloat from '../components/ScrollFloat/ScrollFloat';
import { FaPhp, FaHtml5, FaReact, FaBootstrap, FaRust, FaLaravel, FaGit } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { MdOutlineCss } from 'react-icons/md';
import { FaGolang } from 'react-icons/fa6';
import { RiTailwindCssFill } from 'react-icons/ri';
import { DiCodeigniter } from 'react-icons/di';
import GitHubCalendar from 'react-github-calendar';
import profilePicture from '../assets/profile-picture.png'
import CircularText from '../components/CircularText/CircularText';

function About() {
    const username = "khafidzdev";
    const [profile, setProfile] = useState({});

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then((response) => response.json())
            .then((data) => {
                setProfile(data);
            })
            .catch((error) => {
                console.error("Failed to fetch GitHub profile:", error);
            });
    }, []);

    return (
        <section id="about">
            <div className="wrapper">
                <h3>
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                    >
                        About
                    </ScrollFloat>
                </h3>

                {/* Container untuk Profile Picture & Teks */}
         {/* Container untuk Profile Picture & Teks */}
<div className="about-container">
    {/* Bagian gambar dan CircularText */}
    <div className="profile-wrapper">
        <img src={profilePicture} alt="Profile" className="about-profile" />
        <CircularText
            text="REACT*BITS*COMPONENTS*"
            onHover="speedUp"
            spinDuration={20}
            className="circular-text"
        />
    </div>

    {/* Bagian teks */}
    <div className="about-text">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, alias.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, saepe
            velit, blanditiis suscipit odio non architecto ratione magnam cum porro id nesciunt
            repudiandae optio assumenda ab ducimus. Nesciunt, eligendi ullam!
        </p>
    </div>
</div>


                {/* Wrapper untuk Profil + GitHub Calendar */}
                <div className="github-container">
                    {/* Profil GitHub */}
                    <div className="github-profile">
                        <img src={profile.avatar_url} alt="GitHub Avatar" className="github-avatar" />
                        <div className="github-info">
                            <h4>{profile.name || "No Name Available"}</h4>
                            <p>{profile.bio || "No Bio Available"}</p>
                        </div>
                    </div>

                    {/* GitHub Calendar */}
                    <div className="calendar-container">
                        <h4>My GitHub Activity</h4>
                        <GitHubCalendar 
                            username={username}
                            year={2025}
                            blockSize={12}
                            blockMargin={5}
                            hideTotalCount={true}
                            hideColorLegend={true}
                            showWeekdayLabels={true}
                        />
                    </div>
                </div>

                <h4>Programming Language & Tools</h4>
                <div className="skills">
                    <FaPhp /><FaHtml5 /><SiJavascript /><FaReact /><MdOutlineCss />
                    <FaGolang /><FaBootstrap /><FaRust /><RiTailwindCssFill />
                    <FaLaravel /><DiCodeigniter /><FaGit />
                </div>
            </div>
        </section>
    );
}

export default About;
