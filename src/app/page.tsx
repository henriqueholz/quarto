'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { 
  FaMicrophone, 
  FaMusic, 
  FaTheaterMasks, 
  FaBuilding, 
  FaEye, 
  FaRunning, 
  FaNewspaper, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaInstagram, 
  FaWhatsapp 
} from 'react-icons/fa';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');

  const sections = [
    { id: 'hero', title: 'Sobre' },
    { id: 'edicao1', title: 'Edição 1' },
    { id: 'equipe', title: 'Equipe' },
    { id: 'ficha-tecnica', title: 'Ficha Técnica' },
    { id: 'apresentacao', title: 'Apresentação' },
    { id: 'oficina', title: 'Oficina' },
    { id: 'clipping', title: 'Clipping' },
    { id: 'contato', title: 'Contato' }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-[#5B4636]" style={{ background: 'linear-gradient(135deg, #F0EDE6 0%, #E8DCC8 50%, #D9D2C5 100%)' }}>
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-[#A78E74]/20" style={{ backgroundColor: 'rgba(216, 210, 197, 0.9)' }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.h1 
              className="text-2xl font-bold text-[#B07D62]"
              whileHover={{ scale: 1.05 }}
            >
              Quarto de Som
            </motion.h1>
            <div className="hidden md:flex space-x-6">
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-4 py-2 rounded-full transition-all ${
                    activeSection === section.id 
                      ? 'text-[#F0EDE6]' 
                      : 'text-[#5B4636] hover:text-[#B07D62]'
                  }`}
                  style={activeSection === section.id ? { backgroundColor: '#7A8471' } : {}}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section.title}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section 
        id="hero"
        className="pt-32 pb-20 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6"
          >
            <Image
              src={'/logo.png'}
              alt="Quarto de Som - Logo"
              width={400}
              height={400}
              className="mx-auto max-w-full h-auto"
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 60vw, 400px"
              priority
            />
          </motion.div>
          <motion.div 
            className="max-w-6xl mx-auto mb-12"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="backdrop-blur-md rounded-2xl p-8 border border-[#A78E74]/30" style={{ backgroundColor: 'rgba(192, 163, 122, 0.15)' }}>
                <p className="text-lg md:text-xl leading-relaxed text-[#5B4636] mb-6">
                  O <strong className="text-[#B07D62]">Quarto de Som</strong> é um espetáculo imersivo que propõe uma experiência sensorial única 
                  ao explorar a fusão entre <strong className="text-[#8C5A3C]">música, movimento e luz</strong>. No palco, quatro compositoras 
                  capixabas apresentam um repertório autoral, com canções inéditas e já lançadas, em performances solo e colaborações.
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-[#5B4636]">
                  Com <strong className="text-[#7A8471]">banda ao vivo</strong> e uma cuidadosa direção de movimento e iluminação, 
                  o espetáculo transforma cada apresentação em uma vivência artística envolvente, valorizando a música autoral capixaba 
                  e ampliando a visibilidade das compositoras locais.
                </p>
              </div>
              
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                                  <div className="relative overflow-hidden rounded-2xl border border-[#A78E74]/30">
                    <Image
                      src={'/foto.jpeg'}
                      alt="Apresentação do Quarto de Som"
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#5B4636]/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-[#F0EDE6] text-sm font-medium">
                        Apresentação do Quarto de Som
                      </p>
                    </div>
                  </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.button
            onClick={() => scrollToSection('edicao1')}
            className="px-8 py-4 rounded-full text-lg font-semibold text-white hover:shadow-lg transition-all"
            style={{ backgroundColor: '#7A8471' }}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(122, 132, 113, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Descubra Mais
          </motion.button>
        </div>
      </motion.section>

      {/* Edição 1 Section */}
      <motion.section 
        id="edicao1"
        className="py-20 px-6"
        style={{ backgroundColor: 'rgba(217, 210, 197, 0.3)' }}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-center text-[#B07D62]"
            whileInView={{ scale: [0.8, 1.1, 1] }}
            transition={{ duration: 0.6 }}
          >
            Primeira Edição
          </motion.h2>
          <motion.p 
            className="text-xl text-center text-[#5B4636] mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Contará com as compositoras e intérpretes <strong className="text-[#8C5A3C]">capixabas</strong>:
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                name: 'LUIZA DUTRA', 
                bgColor: '#A78E74',
                image: '/luiza.jpg',
                instagram: '@luizadutraoficial',
                instagramUrl: 'https://www.instagram.com/luizadutraoficial'
              },
              { 
                name: 'BETH MC', 
                bgColor: '#C0A37A',
                image: '/bethmc.jpg',
                instagram: '@_bethmc',
                instagramUrl: 'https://www.instagram.com/_bethmc'
              },
              { 
                name: 'ELAINE AUGUSTA', 
                bgColor: '#B07D62',
                image: '/elaine.jpg',
                instagram: '@elaineaugustaoficial',
                instagramUrl: 'https://www.instagram.com/elaineaugustaoficial'
              },
              { 
                name: 'GAROÁ', 
                bgColor: '#8C5A3C',
                image: '/garoa.jpg',
                instagram: '@a.garoar',
                instagramUrl: 'https://www.instagram.com/a.garoar'
              }
            ].map((artist, index) => (
              <motion.div
                key={artist.name}
                className="p-6 rounded-2xl text-center border border-[#A78E74]/30"
                style={{ backgroundColor: artist.bgColor }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                viewport={{ once: true }}
              >
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-2 border-[#F0EDE6]/30">
                  <Image
                    src={artist.image}
                    alt={`${artist.name} - Cantora`}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#F0EDE6] mb-2">{artist.name}</h3>
                <motion.a
                  href={artist.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-[#F0EDE6]/80 hover:text-[#F0EDE6] transition-colors text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaInstagram className="text-lg" />
                  <span>{artist.instagram}</span>
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Equipe Section */}
      <motion.section 
        id="equipe"
        className="py-20 px-6"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-12 text-center text-[#B07D62]"
            whileInView={{ scale: [0.8, 1.1, 1] }}
            transition={{ duration: 0.6 }}
          >
            Equipe de Direção
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                name: 'Dan Abranches', 
                role: 'Direção Musical',
                description: 'Cantor e produtor responsável pela direção musical do espetáculo',
                bgColor: '#A78E74'
              },
              { 
                name: 'Gabriela Moriondo', 
                role: 'Direção de Movimento e Luz',
                description: 'Bailarina responsável pela direção de movimento e iluminação',
                bgColor: '#C0A37A'
              },
              { 
                name: 'Fernanda Holz', 
                role: 'Direção Executiva',
                description: 'Responsável pela direção executiva e coordenação geral do projeto',
                bgColor: '#B07D62'
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                className="p-6 rounded-2xl text-center border border-[#A78E74]/30"
                style={{ backgroundColor: member.bgColor }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center border border-[#F0EDE6]/30" style={{ backgroundColor: 'rgba(240, 237, 230, 0.2)' }}>
                  {member.name === 'Dan Abranches' && <FaMusic className="text-3xl text-[#F0EDE6]" />}
                  {member.name === 'Gabriela Moriondo' && <FaRunning className="text-3xl text-[#F0EDE6]" />}
                  {member.name === 'Fernanda Holz' && <FaTheaterMasks className="text-3xl text-[#F0EDE6]" />}
                </div>
                <h3 className="text-xl font-bold text-[#F0EDE6] mb-2">{member.name}</h3>
                <h4 className="text-sm font-semibold text-[#E8DCC8] mb-3 uppercase tracking-wide">{member.role}</h4>
                <p className="text-[#E8DCC8] text-sm leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Ficha Técnica Section */}
      <motion.section 
        id="ficha-tecnica"
        className="py-20 px-6 bg-black/20"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-12 text-center text-[#C0A37A]"
            whileInView={{ scale: [0.8, 1.1, 1] }}
            transition={{ duration: 0.6 }}
          >
            Ficha Técnica
          </motion.h2>
          
          <div className="max-w-6xl mx-auto">
            {/* Artistas */}
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-[#8C5A3C] mb-6 text-center">Artistas</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { 
                    name: 'Luiza Dutra',
                    instagram: '@luizadutraoficial',
                    instagramUrl: 'https://www.instagram.com/luizadutraoficial'
                  },
                  { 
                    name: 'Garoá',
                    instagram: '@a.garoar',
                    instagramUrl: 'https://www.instagram.com/a.garoar'
                  },
                  { 
                    name: 'Elaine Augusta',
                    instagram: '@elaineaugustaoficial',
                    instagramUrl: 'https://www.instagram.com/elaineaugustaoficial'
                  },
                  { 
                    name: 'Beth MC',
                    instagram: '@_bethmc',
                    instagramUrl: 'https://www.instagram.com/_bethmc'
                  }
                ].map((artist, index) => (
                  <motion.div
                    key={artist.name}
                    className="backdrop-blur-md rounded-xl p-4 text-center border border-[#A78E74]/30"
                    style={{ backgroundColor: 'rgba(167, 142, 116, 0.15)' }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-[#5B4636] font-semibold mb-2">{artist.name}</p>
                    <motion.a
                      href={artist.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-[#8C5A3C] hover:text-[#B07D62] transition-colors text-xs"
                      whileHover={{ scale: 1.05 }}
                    >
                      <FaInstagram className="text-sm" />
                      <span>{artist.instagram}</span>
                    </motion.a>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Banda */}
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-[#8C5A3C] mb-6 text-center">Banda</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: 'Natália Arrivabene', role: 'Bateria' },
                  { name: 'Mariana Gruvira', role: 'Guitarra' },
                  { name: 'Geremias Rocha', role: 'Teclado' },
                  { name: 'Heviny Moura', role: 'Baixo e Violino' }
                ].map((musician, index) => (
                  <motion.div
                    key={musician.name}
                    className="backdrop-blur-md rounded-xl p-4 text-center border border-[#A78E74]/30"
                    style={{ backgroundColor: 'rgba(192, 163, 122, 0.15)' }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-[#5B4636] font-semibold">{musician.name}</p>
                    <p className="text-[#8C5A3C] text-sm">{musician.role}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Direção e Produção */}
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-[#8C5A3C] mb-6 text-center">Direção e Produção</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: 'Fernanda Holz', role: 'Direção Geral' },
                  { name: 'Dan Abranches', role: 'Diretor Musical' },
                  { name: 'Gabriela Moriondo', role: 'Diretora de Movimento' },
                  { name: 'Flora Fiorio', role: 'Direção de Arte' },
                  { name: 'Dani Maia', role: 'Produção' },
                  { name: 'Gabriella Vasconcelos', role: 'Figurino' },
                  { name: 'Laisa Oliveira', role: 'Designer' },
                  { name: 'Lais Rocio', role: 'Assessoria de Imprensa' }
                ].map((member, index) => (
                  <motion.div
                    key={member.name}
                    className="bg-gradient-to-r from-orange-700/20 to-red-700/20 backdrop-blur-md rounded-xl p-4 text-center border border-orange-700/30"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-[#5B4636] font-semibold">{member.name}</p>
                    <p className="text-orange-200 text-sm">{member.role}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Equipe Técnica */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-[#8C5A3C] mb-6 text-center">Equipe Técnica</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: 'Daniel Seraphim', role: 'Técnico de Som' },
                  { name: 'André Stefson', role: 'Técnico de Luz' },
                  { name: 'Izaque Hortêncio', role: 'Produtor Técnico' },
                  { name: 'Bernardo Firme', role: 'Fotógrafo' },
                  { name: 'Wyucler Rodrigues', role: 'Vídeomaker' },
                  { name: 'Gustavo Louzada', role: 'Vídeomaker' },
                  { name: 'Danilo Zepellin', role: 'Vídeomaker' }
                ].map((member, index) => (
                  <motion.div
                    key={member.name}
                    className="bg-gradient-to-r from-red-700/20 to-rose-700/20 backdrop-blur-md rounded-xl p-4 text-center border border-red-700/30"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-[#5B4636] font-semibold">{member.name}</p>
                    <p className="text-red-200 text-sm">{member.role}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Apresentação SESC/+Mc Section */}
      <motion.section 
        id="apresentacao"
        className="py-20 px-6"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-12 text-center text-[#B07D62]"
            whileInView={{ scale: [0.8, 1.1, 1] }}
            transition={{ duration: 0.6 }}
          >
            Apresentação
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="bg-gradient-to-r from-amber-600/20 to-orange-600/20 backdrop-blur-md rounded-2xl p-8 border border-amber-600/30"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <FaBuilding className="text-3xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#B07D62] mb-2">SESC</h3>
                  <p className="text-[#5B4636]">
                    Apresentação especial no SESC, trazendo toda a magia do Quarto 
                    para um dos espaços culturais mais importantes da cidade.
                  </p>
                </motion.div>
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-600 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <FaMusic className="text-3xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#C0A37A] mb-2">+Mc</h3>
                  <p className="text-[#5B4636]">
                    Colaboração especial com +Mc, expandindo os horizontes musicais 
                    e criando uma experiência ainda mais rica e diversificada.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Oficina Section */}
      <motion.section 
        id="oficina"
        className="py-20 px-6 bg-black/20"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent"
            whileInView={{ scale: [0.8, 1.1, 1] }}
            transition={{ duration: 0.6 }}
          >
            Atividades Formativas
          </motion.h2>
          <motion.p 
            className="text-xl text-center text-[#5B4636] mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            O projeto promove <strong className="text-yellow-600">acessibilidade cultural</strong>, oferecendo atividades formativas e gratuitas
          </motion.p>
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="bg-gradient-to-r from-yellow-600/20 to-amber-600/20 backdrop-blur-md rounded-2xl p-8 border border-yellow-600/30"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-yellow-600 to-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <FaEye className="text-3xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-yellow-600 mb-4">Ensaio Aberto</h3>
                  <p className="text-[#5B4636] leading-relaxed">
                    Uma oportunidade única para o público acompanhar o processo criativo do espetáculo, 
                    conhecendo de perto o trabalho das artistas e da equipe de direção.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <FaRunning className="text-3xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-amber-600 mb-4">Oficina de Improvisação na Dança</h3>
                  <p className="text-[#5B4636] leading-relaxed">
                    Ministrada por <strong className="text-orange-400">Gabriela Moriondo</strong>, esta oficina explora 
                    a conexão entre corpo, movimento e expressão artística através da improvisação.
                  </p>
                </motion.div>
              </div>
              
              <div className="text-center mt-8">
                <motion.button
                  className="bg-gradient-to-r from-yellow-600 to-amber-700 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-yellow-500/25 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Atividades Gratuitas - Saiba Mais
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Clipping Section */}
      <motion.section 
        id="clipping"
        className="py-20 px-6"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"
            whileInView={{ scale: [0.8, 1.1, 1] }}
            transition={{ duration: 0.6 }}
          >
            Clipping
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Revista Cultural', date: '15 Jan 2025', excerpt: 'Quarto de Som promete revolucionar a cena musical local...' },
              { title: 'Blog Musical', date: '20 Jan 2025', excerpt: 'Artistas excepcionais se reúnem em show intimista...' },
              { title: 'Portal de Notícias', date: '25 Jan 2025', excerpt: 'Oficina "O Corpo que Canta" desperta interesse...' }
            ].map((clip, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-full mb-4 flex items-center justify-center">
                  <FaNewspaper className="text-xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-orange-600 mb-2">{clip.title}</h3>
                <p className="text-sm text-[#8C5A3C] mb-3">{clip.date}</p>
                <p className="text-[#5B4636]">{clip.excerpt}</p>
                <motion.button
                  className="mt-4 text-orange-400 hover:text-orange-300 font-semibold"
                  whileHover={{ x: 5 }}
                >
                  Ler mais →
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contato Section */}
      <motion.section 
        id="contato"
        className="py-20 px-6 bg-black/20"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent"
            whileInView={{ scale: [0.8, 1.1, 1] }}
            transition={{ duration: 0.6 }}
          >
            Contato
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="bg-gradient-to-r from-red-600/20 to-rose-600/20 backdrop-blur-md rounded-2xl p-8 border border-red-600/30"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-red-600 mb-6">Entre em Contato</h3>
                  <div className="space-y-4">
                    <motion.div 
                      className="flex items-center space-x-3"
                      whileHover={{ x: 10 }}
                    >
                      <FaEnvelope className="text-2xl text-[#B07D62]" />
                      <a href="mailto:fernandaholz.adv@gmail.com" className="text-[#5B4636] hover:text-[#B07D62] transition-colors">
                        fernandaholz.adv@gmail.com
                      </a>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-3"
                      whileHover={{ x: 10 }}
                    >
                      <FaPhone className="text-2xl text-[#B07D62]" />
                      <a href="tel:+5527999250775" className="text-[#5B4636] hover:text-[#B07D62] transition-colors">
                        (27) 99925-0775
                      </a>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-3"
                      whileHover={{ x: 10 }}
                    >
                      <FaMapMarkerAlt className="text-2xl text-[#B07D62]" />
                      <span className="text-[#5B4636]">Vitória - ES</span>
                    </motion.div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-red-600 mb-6">Redes Sociais</h3>
                  <div className="flex space-x-4">
                    {[
                      { 
                        name: 'Instagram', 
                        icon: <FaInstagram className="text-xl text-white" />, 
                        url: 'https://www.instagram.com/quartodesom_?igsh=MWE5OWk3aTlhd2tvbA==',
                        color: 'from-orange-600 to-red-600'
                      },
                      { 
                        name: 'Email', 
                        icon: <FaEnvelope className="text-xl text-white" />, 
                        url: 'mailto:fernandaholz.adv@gmail.com',
                        color: 'from-red-600 to-rose-600'
                      },
                      { 
                        name: 'WhatsApp', 
                        icon: <FaWhatsapp className="text-xl text-white" />, 
                        url: 'https://wa.me/5527999250775',
                        color: 'from-amber-600 to-orange-600'
                      }
                    ].map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
          target="_blank"
          rel="noopener noreferrer"
                        className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-full flex items-center justify-center hover:shadow-lg transition-all`}
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Patrocinadores Section */}
      <motion.section 
        className="py-20 px-6"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent"
            whileInView={{ scale: [0.8, 1.1, 1] }}
            transition={{ duration: 0.6 }}
          >
            Patrocinadores
          </motion.h2>
          
          <motion.div 
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <Image
                src={'/patrocinio.jpeg'}
                alt="Patrocinadores do Quarto de Som"
                width={800}
                height={800}
                className="w-full h-auto rounded-xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="py-8 px-6 border-t border-white/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[#8C5A3C]">
              © 2025 Quarto de Som. Todos os direitos reservados.
            </p>
            
            <motion.div 
              className="flex items-center gap-4 bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-right">
                <p className="text-[#5B4636] text-sm">Desenvolvido por</p>
                <a 
                  href="tel:+5527999990251" 
                  className="text-[#8C5A3C] hover:text-[#B07D62] transition-colors text-sm font-medium"
                >
                  +55 (27) 99999-0251
                </a>
              </div>
              <Image
                src={'/julia.jpeg'}
                alt="Julia Software Development"
                width={60}
                height={60}
                className="rounded-lg w-16 h-16 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
