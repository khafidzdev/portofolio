import '../styles/About.css';
import ScrollVelocity from '../components/ScrollVelocity/ScrollVelocity';
import profilePicture from '../assets/profile-picture.png';

import { FaPhp, FaHtml5, FaReact, FaBootstrap, FaRust, FaLaravel, FaGit } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { MdOutlineCss } from "react-icons/md";
import { FaGolang } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiCodeigniter } from "react-icons/di";

function About() {
    const velocity = 150;

    return (
        <section id="about">
            {/* Wrapper untuk memastikan gambar dan teks bertumpukan */}
            <div className="about-container">
                {/* ScrollVelocity Bertumpukan dengan Gambar */}
                <ScrollVelocity 
                    texts={['Full Stack Developer']} 
                    velocity={velocity} 
                    className="custom-scroll-text"
                />
            </div>

            <div className='wrapper'>
                <h3>About</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, alias.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, saepe velit, blanditiis suscipit odio non architecto ratione magnam cum porro id nesciunt repudiandae optio assumenda ab ducimus. Nesciunt, eligendi ullam!</p>
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
