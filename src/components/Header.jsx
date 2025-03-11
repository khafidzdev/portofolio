import profilePicture from '../assets/profile-picture.png'
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import BlurText from "../components/BlurText/BlurText";
import '../styles/Header.css'
function Header() {
    const handleAnimationComplete = () => {
        console.log('Animation completed!');
      };
    return (
        <header>
            <div className="header-jumbotron">
                <img src={profilePicture} className="img" />
                <h3>KhafidzDev</h3>
                <BlurText
  text="                Programmer - Content Creator - Researcher
"
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