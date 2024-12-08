import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import portfolioLogo from '../assets/images/logo/portfolio-book.svg';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#151515] shadow-lg border-b border-[#6d28d9]/10 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-[#8b5cf6] hover:text-[#7c3aed] transition-colors flex items-center">
            <img 
              src={portfolioLogo} 
              alt="Portfolio Logo" 
              className="w-8 h-8"
            />
            <span className="ml-2 font-bold">Portafolio</span>
          </div>
          
          <button 
            className="md:hidden text-[#8b5cf6] hover:text-[#7c3aed]"
            onClick={toggleMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className={`
            absolute top-16 left-0 w-full md:relative md:top-0 md:w-auto
            bg-[#151515] md:bg-transparent
            ${isOpen ? 'block' : 'hidden'} md:block
          `}>
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 p-4 md:p-0">
              <button onClick={() => scrollToSection('inicio')} className="text-[#8b5cf6] hover:text-[#7c3aed] transition-colors text-left">
                Inicio
              </button>
              <button onClick={() => scrollToSection('habilidades')} className="text-[#8b5cf6] hover:text-[#7c3aed] transition-colors text-left">
                Habilidades
              </button>
              <button onClick={() => scrollToSection('sobre-mi')} className="text-[#8b5cf6] hover:text-[#7c3aed] transition-colors text-left">
                Sobre Mí
              </button>
              <button onClick={() => scrollToSection('proyectos')} className="text-[#8b5cf6] hover:text-[#7c3aed] transition-colors text-left">
                Proyectos
              </button>
              <button onClick={() => scrollToSection('contacto')} className="text-[#8b5cf6] hover:text-[#7c3aed] transition-colors text-left">
                Contacto
              </button>
              <button onClick={() => scrollToSection('redes-sociales')} className="text-[#8b5cf6] hover:text-[#7c3aed] transition-colors text-left">
                Redes Sociales
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 