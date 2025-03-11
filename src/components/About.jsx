import { useEffect, useState } from "react";
import '../styles/About.css';
import { FaPhp, FaHtml5, FaReact, FaBootstrap, FaLaravel } from "react-icons/fa";
import { SiJavascript, SiVisualstudiocode, SiMysql, SiUnity } from "react-icons/si";
import { MdOutlineCss } from "react-icons/md";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiCodeigniter } from "react-icons/di";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import GitHubCalendar from "react-github-calendar";

function About() {
    const githubUsername = "khafidzdev"; // Ganti dengan username GitHub Anda
    const [githubProfile, setGithubProfile] = useState(null);

    useEffect(() => {
        fetch(`https://api.github.com/users/${githubUsername}`)
            .then(response => response.json())
            .then(data => setGithubProfile(data))
            .catch(error => console.error("Error fetching GitHub profile:", error));
    }, []);

    return (
        <section id="about">
            <div className='wrapper'>
                <h3>About</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, alias.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, saepe velit, blanditiis suscipit odio non architecto ratione magnam cum porro id nesciunt repudiandae optio assumenda ab ducimus. Nesciunt, eligendi ullam!</p>

                <h4>Programming Language & Tools</h4>
                <div className="skills-carousel-wrapper">
                    <div className="skills-carousel">
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={5}
                            loop={true}
                            speed={4000} 
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                        >
                            <SwiperSlide><FaHtml5 color="#E34F26" /></SwiperSlide>
                            <SwiperSlide><MdOutlineCss color="#1572B6" /></SwiperSlide>
                            <SwiperSlide><SiJavascript color="#F7DF1E" /></SwiperSlide>
                            <SwiperSlide><FaBootstrap color="#7952B3" /></SwiperSlide>
                            <SwiperSlide><RiTailwindCssFill color="#06B6D4" /></SwiperSlide>
                            <SwiperSlide><FaPhp color="#777BB4" /></SwiperSlide>
                            <SwiperSlide><SiVisualstudiocode color="#007ACC" /></SwiperSlide>
                            <SwiperSlide><DiCodeigniter color="#EE4623" /></SwiperSlide>
                            <SwiperSlide><FaLaravel color="#FF2D20" /></SwiperSlide>
                            <SwiperSlide><FaReact color="#61DAFB" /></SwiperSlide>
                            <SwiperSlide><SiMysql color="#4479A1" /></SwiperSlide>
                            <SwiperSlide><SiUnity color="#222C37" /></SwiperSlide>
                        </Swiper>
                    </div>
                </div>

                <h4>GitHub Profile & Activity</h4>
                {githubProfile && (
                    <div className="github-profile">
                        <img src={githubProfile.avatar_url} alt="GitHub Avatar" />
                        <div className="github-info">
                            <h3>{githubProfile.name || githubProfile.login}</h3>
                            <p>{githubProfile.bio}</p>
                            {/* <a href={githubProfile.html_url} target="_blank" rel="noopener noreferrer">
                                View GitHub Profile
                            </a> */}
                        </div>
                    </div>
                )}

                <div className="github-calendar-container">
                    <GitHubCalendar 
                        username={githubUsername}
                        colorScheme="dark"
                        blockSize={12}
                        blockMargin={5}
                        fontSize={16}
                        fullYear={true}
                        until="2025-12-31"
                        showWeekdayLabels={true}
                        hideTotalCount={true}
                    />
                </div>
            </div>
        </section>
    );
}

export default About;
