import '../styles/About.css'
import FallingText from '../components/FallingText/FallingText';
import { FaPhp, FaHtml5, FaReact, FaBootstrap, FaRust, FaLaravel, FaGit } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { MdOutlineCss } from "react-icons/md";
import { FaGolang } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiCodeigniter } from "react-icons/di";


function About() {
    return (
        <section id="about">
            <div className='wrapper'>
                <h3>About</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, alias.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, saepe velit, blanditiis suscipit odio non architecto ratione magnam cum porro id nesciunt repudiandae optio assumenda ab ducimus. Nesciunt, eligendi ullam!</p>
                <h4>Programming Language & Tools</h4>
                <FallingText
  text={`JS VSC HTML CSS JS`}
  highlightWords={["JS", "VSC", "HTML", "CSS", "JS"]}
  highlightClass="highlighted"
  trigger="hover"
  backgroundColor="transparent"
  wireframes={false}
  gravity={0.56}
  fontSize="2rem"
  mouseConstraintStiffness={0.9}
/>
                <div className="skills">
                    


                </div>
            </div>
        </section>
    )
}

export default About