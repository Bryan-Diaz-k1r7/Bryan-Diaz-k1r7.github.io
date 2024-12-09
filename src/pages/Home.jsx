import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import { GitHubIcon } from '../assets/icons/github';
import { InstagramIcon } from '../assets/icons/instagram';
import { LinkedInIcon } from '../assets/icons/linkedin';

const Home = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validateForm = () => {
    let tempErrors = {};
    
    // Validación del nombre (solo letras y espacios)
    if (!/^[A-Za-zÁ-ÿ\s]{1,50}$/.test(formData.nombre)) {
      tempErrors.nombre = 'El nombre solo puede contener letras y espacios';
    }
    
    // Validación del email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = 'Ingresa un correo electrónico válido';
    }
    
    // Validación del mensaje
    if (formData.mensaje.trim() === '') {
      tempErrors.mensaje = 'El mensaje es requerido';
    }
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        const response = await fetch('https://bryandiaz-dev.duckdns.org/portfolio/api/mensajes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nombre: formData.nombre,
            email: formData.email,
            mensaje: formData.mensaje
          }),
        });

        if (response.ok) {
          alert('¡Mensaje enviado con éxito!');
          setFormData({ nombre: '', email: '', mensaje: '' });
          setErrors({});
        } else {
          const errorData = await response.json();
          alert(errorData.error || 'Error al enviar el mensaje');
        }
      } catch (error) {
        alert('Error de conexión al servidor');
        console.error('Error:', error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
      <main className="min-h-screen bg-[#1a1a1a]">

        <Navbar />

        <section id="inicio" className="container mx-auto pt-28 pb-16 sm:py-32 px-4">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#8b5cf6] mb-4">¡Hola! Soy Bryan Diaz</h2>
            <p className="text-lg sm:text-xl text-[#a78bfa]">Desarrollador Web Full Stack</p>
          </div>
        </section>

        <section id="habilidades" className="bg-[#151515] py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#8b5cf6] text-center mb-16">Tecnologías y Herramientas</h2>
            
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12">
              {/* Columna izquierda */}
              <div className="space-y-6 sm:space-y-8">
                {/* Frontend */}
                <div className="bg-[#222222] p-4 sm:p-8 rounded-xl border border-[#6d28d9]/20">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#8b5cf6] mb-4 sm:mb-6 flex items-center gap-2">
                    <span className="text-[#7c3aed]">⚡</span> Frontend
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6">
                    <div className="flex flex-col items-center bg-[#1a1a1a] p-4 rounded-lg">
                      <span className="text-[#a78bfa]">React</span>
                    </div>
                    <div className="flex flex-col items-center bg-[#1a1a1a] p-4 rounded-lg">
                      <span className="text-[#a78bfa]">JavaScript</span>
                    </div>
                    <div className="flex flex-col items-center bg-[#1a1a1a] p-4 rounded-lg">
                      <span className="text-[#a78bfa]">HTML5</span>
                    </div>
                    <div className="flex flex-col items-center bg-[#1a1a1a] p-4 rounded-lg">
                      <span className="text-[#a78bfa]">CSS3</span>
                    </div>
                    <div className="flex flex-col items-center bg-[#1a1a1a] p-4 rounded-lg">
                      <span className="text-[#a78bfa]">Tailwind</span>
                    </div>
                  </div>
                </div>

                {/* Backend */}
                <div className="bg-[#222222] p-8 rounded-xl border border-[#6d28d9]/20">
                  <h3 className="text-2xl font-bold text-[#8b5cf6] mb-6 flex items-center gap-2">
                    <span className="text-[#7c3aed]">🔧</span> Backend
                  </h3>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="flex flex-col items-center bg-[#1a1a1a] p-4 rounded-lg">
                      <span className="text-[#a78bfa]">Node.js</span>
                    </div>
                    <div className="flex flex-col items-center bg-[#1a1a1a] p-4 rounded-lg">
                      <span className="text-[#a78bfa]">MySQL</span>
                    </div>
                    <div className="flex flex-col items-center bg-[#1a1a1a] p-4 rounded-lg">
                      <span className="text-[#a78bfa]">Java</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Columna derecha */}
              <div className="space-y-8">
                {/* Herramientas */}
                <div className="bg-[#222222] p-8 rounded-xl border border-[#6d28d9]/20">
                  <h3 className="text-2xl font-bold text-[#8b5cf6] mb-6 flex items-center gap-2">
                    <span className="text-[#7c3aed]">🛠️</span> Herramientas
                  </h3>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="flex flex-col items-center bg-[#1a1a1a] p-4 rounded-lg">
                      <span className="text-[#a78bfa]">Git</span>
                    </div>
                    <div className="flex flex-col items-center bg-[#1a1a1a] p-4 rounded-lg">
                      <span className="text-[#a78bfa]">GitHub</span>
                    </div>
                    <div className="flex flex-col items-center bg-[#1a1a1a] p-4 rounded-lg">
                      <span className="text-[#a78bfa]">VS Code</span>
                    </div>
                    <div className="flex flex-col items-center bg-[#1a1a1a] p-4 rounded-lg">
                      <span className="text-[#a78bfa]">Docker</span>
                    </div>
                    <div className="flex flex-col items-center bg-[#1a1a1a] p-4 rounded-lg">
                      <span className="text-[#a78bfa]">Cursor IDE</span>
                    </div>
                    <div className="flex flex-col items-center bg-[#1a1a1a] p-4 rounded-lg">
                      <span className="text-[#a78bfa]">Postman</span>
                    </div>
                  </div>
                </div>

                {/* Otros conocimientos */}
                <div className="bg-[#222222] p-8 rounded-xl border border-[#6d28d9]/20">
                  <h3 className="text-2xl font-bold text-[#8b5cf6] mb-6 flex items-center gap-2">
                    <span className="text-[#7c3aed]">💡</span> Otros Conocimientos
                  </h3>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="flex flex-col items-center bg-[#1a1a1a] p-4 rounded-lg">
                      <span className="text-[#a78bfa]">Python</span>
                    </div>
                    <div className="flex flex-col items-center bg-[#1a1a1a] p-4 rounded-lg">
                      <span className="text-[#a78bfa]">Linux</span>
                    </div>
                    <div className="flex flex-col items-center bg-[#1a1a1a] p-4 rounded-lg">
                      <span className="text-[#a78bfa]">Windows</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre-mi" className="bg-[#1f1f1f] py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#8b5cf6] text-center mb-12">Sobre Mí</h2>
            <div className="max-w-3xl mx-auto text-[#a78bfa]">
              <p className="mb-4">
                Soy un joven de 17 años de Uruguay, actualmente cursando el bachillerato de informática. He completado exitosamente el segundo año y estoy por comenzar tercero. Me apasiona la programación y disfruto mucho aprendiendo nuevas tecnologías. Una de mis principales fortalezas es mi capacidad de aprendizaje rápido y mi facilidad para asimilar nuevos conceptos. Estoy constantemente buscando expandir mis conocimientos y habilidades en el mundo del desarrollo de software.
              </p>
            </div>
          </div>
        </section>

        <section id="proyectos" className="bg-[#1a1a1a] py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#8b5cf6] text-center mb-12">Mis Proyectos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
              {projects.slice(0, 3).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            
            {/* Botón Ver Más */}
            <div className="text-center mt-12">
              <Link 
                to="/proyectos" 
                className="inline-block bg-[#6d28d9] text-white px-8 py-3 rounded-lg hover:bg-[#5b21b6] transition-colors"
              >
                Ver Todos los Proyectos
              </Link>
            </div>
          </div>
        </section>

        <section id="contacto" className="bg-[#151515] py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#8b5cf6] text-center mb-12">Contacto</h2>
            <div className="max-w-xl mx-auto px-4">
              <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input 
                  type="text" 
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Nombre"
                  className="p-3 border border-[#6d28d9] rounded-lg bg-[#1a1a1a] text-[#a78bfa] placeholder-[#7c3aed]/50 w-full"
                />
                {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre}</p>}
                
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="p-2 border border-[#6d28d9] rounded-lg bg-[#1a1a1a] text-[#a78bfa] placeholder-[#7c3aed]/50"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                
                <textarea 
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Mensaje"
                  className="p-2 border border-[#6d28d9] rounded-lg bg-[#1a1a1a] text-[#a78bfa] placeholder-[#7c3aed]/50 h-32"
                ></textarea>
                {errors.mensaje && <p className="text-red-500 text-sm">{errors.mensaje}</p>}
                
                <button 
                  type="submit"
                  className="bg-[#6d28d9] text-white px-6 py-3 rounded-lg hover:bg-[#5b21b6] transition-colors"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Nueva sección de redes sociales */}
        <section id="redes-sociales" className="bg-[#1a1a1a] py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#8b5cf6] text-center mb-8">Mis Redes Sociales</h2>
            <div className="flex justify-center space-x-12">
              <a 
                href="https://github.com/Bryan-Diaz-k1r7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-[#222222] rounded-full flex items-center justify-center mb-3 group-hover:bg-[#6d28d9] transition-colors">
                  <div className="w-8 h-8 text-[#a78bfa] group-hover:text-white transition-colors flex items-center justify-center">
                    <GitHubIcon />
                  </div>
                </div>
                <span className="text-[#a78bfa] group-hover:text-[#8b5cf6] transition-colors">GitHub</span>
              </a>
              <a 
                href="https://www.instagram.com/_bryan.dev_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-[#222222] rounded-full flex items-center justify-center mb-3 group-hover:bg-[#6d28d9] transition-colors">
                  <div className="w-8 h-8 text-[#a78bfa] group-hover:text-white transition-colors flex items-center justify-center">
                    <InstagramIcon />
                  </div>
                </div>
                <span className="text-[#a78bfa] group-hover:text-[#8b5cf6] transition-colors">Instagram</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/bryan-d-08457830a/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-[#222222] rounded-full flex items-center justify-center mb-3 group-hover:bg-[#6d28d9] transition-colors">
                  <div className="w-8 h-8 text-[#a78bfa] group-hover:text-white transition-colors flex items-center justify-center">
                    <LinkedInIcon />
                  </div>
                </div>
                <span className="text-[#a78bfa] group-hover:text-[#8b5cf6] transition-colors">LinkedIn</span>
              </a>
            </div>
          </div>
        </section>
      </main>
  )
}

export default Home

