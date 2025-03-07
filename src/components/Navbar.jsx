import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import Dock from '../components/Dock/Dock';
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from "react-icons/vsc";

function Navbar() {
    const navigate = useNavigate(); 
    const location = useLocation(); // Untuk mengecek halaman saat ini
    const [statusTampil, setStatusTampil] = useState('');

    function handleNavigation(path, isHashLink = false) {
        setStatusTampil(''); // Tutup menu setelah navigasi

        if (isHashLink) {
            if (location.pathname !== '/') {
                // Jika di halaman lain, navigasi ke home dulu, lalu scroll setelah home dimuat
                navigate('/');
                setTimeout(() => {
                    scrollToSection(path);
                }, 100); // Tunggu sebentar agar halaman utama dimuat dulu
            } else {
                scrollToSection(path);
            }
        } else {
            navigate(path);
        }
    }

    function scrollToSection(id) {
        const targetElement = document.getElementById(id.replace('#', ''));
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const items = [
        { icon: <VscHome size={18} />, label: 'Home', onClick: () => handleNavigation('/') },
        { icon: <VscArchive size={18} />, label: 'Portfolio', onClick: () => handleNavigation('#portfolio', true) },
        { icon: <VscAccount size={18} />, label: 'About', onClick: () => handleNavigation('#about', true) },
        { icon: <VscSettingsGear size={18} />, label: 'Experience', onClick: () => handleNavigation('/experience') },
    ];

    return (
        <nav>
            <div className="wrapper">
                <Dock 
                    items={items}
                    panelHeight={68}
                    baseItemSize={50}
                    magnification={70}
                />
            </div>
        </nav>
    );
}

export default Navbar;
