import Logo from "../assets/logo.svg";
import "../styles/header.css";
import "../styles/utility.css";
import { useState, useEffect } from 'react'; 
import Button from "../components/Button";
import Close from "../assets/close.svg";
import Menu from "../assets/hamburguer.svg";
import "../styles/buttons.css";

export default function Header() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        if (showMobileMenu) {
            document.body.classList.add('scroll');

        } else {
            document.body.classList.remove('scroll');
        }

        return () => {
            document.body.classList.remove('scroll');
        };
    }, [showMobileMenu]); 

    return (
        <>
            <header className='container py-sm'>
                <nav className='flex items-center justify-between'>
                    <img src={Logo} alt="logo" width={200} height={60} />
                
                    <div className='desktop-only'>
                        <ul className="flex gap-1">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Lanches</a></li>
                            <li><a href="#">Avaliações</a></li>
                            <li><a href="#">Contato</a></li>
                        </ul>
                    </div>
                    <div className='desktop-only'>
                        <div className='flex items-center'>
                            <a className='reverse-color ml-lg' href="">Login</a>
                            <Button text="cadastre-se" />
                        </div>
                    </div>
                    <div className='mobile-menu'>
                        {showMobileMenu ?
                            <div className='mobile-menu-content'>
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#solution">Lanches</a>
                                        </li>
                                        <li>
                                            <a href="#testimonials">Avaliações</a>
                                        </li>
                                        <li>
                                            <a href="#contact">Contato</a>
                                        </li>
                                        <li>
                                            <a className="reverse-color" href="#">Login</a>
                                        </li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className='btn-wrapper'>
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className='btn-wrapper'>
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>
                </nav>
            </header>
        </>
    );
}
