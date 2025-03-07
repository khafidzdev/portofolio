import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import '../styles/Header.css'
import TrueFocus from '../components/TrueFocus/TrueFocus';
import BlurText from "../components/BlurText/BlurText";
function Header() {
    const handleAnimationComplete = () => {
        console.log('Animation completed!');
      };
    return (
        <header>
            <div className="header-jumbotron">
              
                <TrueFocus 
sentence="Khafidz Rizziq Alhuda"
manualMode={false}
blurAmount={5}
borderColor="red"
animationDuration={3}
pauseBetweenAnimations={2}
/>
<BlurText
  text="Full Stack - Social Media Specialist - Researcher "
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-2xl mb-8"
/>
                {/* <div className='socialMedia'>
                    <a href=''><FaInstagram /></a>
                    <a href=''><FaTiktok /></a>
                    <a href=''><FaTwitter /></a>
                    <a href=''><FaFacebookF /></a>
                </div> */}
            </div>
        </header>
    )
}

export default Header