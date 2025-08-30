'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('sobre');

  const sections = [
    { id: 'sobre', title: 'Sobre' },
    { id: 'edicao1', title: 'Edição 1' },
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
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.h1 
              className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Quarto
            </motion.h1>
            <div className="hidden md:flex space-x-6">
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-4 py-2 rounded-full transition-all ${
                    activeSection === section.id 
                      ? 'bg-pink-500 text-white' 
                      : 'hover:bg-white/10'
                  }`}
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
        className="pt-32 pb-20 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto text-center">
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            QUARTO
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-gray-300"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Show Musical Imperdível
          </motion.p>
          <motion.button
            onClick={() => scrollToSection('edicao1')}
            className="bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(236, 72, 153, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Descubra Mais
          </motion.button>
        </div>
      </motion.section>

      {/* Sobre Section */}
      <motion.section 
        id="sobre"
        className="py-20 px-6"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
            whileInView={{ scale: [0.8, 1.1, 1] }}
            transition={{ duration: 0.6 }}
          >
            Sobre
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
              whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-lg md:text-xl leading-relaxed text-gray-200">
                O <strong className="text-pink-400">Quarto</strong> é um show musical único que reúne artistas excepcionais 
                em apresentações intimistas e emocionantes. Cada edição traz uma seleção cuidadosa de talentos 
                que prometem tocar o coração do público com suas performances autênticas e envolventes.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-200 mt-6">
                Prepare-se para uma experiência musical inesquecível, onde cada nota conta uma história 
                e cada apresentação é uma jornada emocional única.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Edição 1 Section */}
      <motion.section 
        id="edicao1"
        className="py-20 px-6 bg-black/20"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            whileInView={{ scale: [0.8, 1.1, 1] }}
            transition={{ duration: 0.6 }}
          >
            Edição 1
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Beth Mc', color: 'from-pink-500 to-rose-500' },
              { name: 'Elaine Augusta', color: 'from-purple-500 to-indigo-500' },
              { name: 'Garoá', color: 'from-blue-500 to-cyan-500' },
              { name: 'Luiza Dutra', color: 'from-green-500 to-teal-500' }
            ].map((artist, index) => (
              <motion.div
                key={artist.name}
                className={`bg-gradient-to-br ${artist.color} p-6 rounded-2xl text-center`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🎤</span>
                </div>
                <h3 className="text-xl font-bold text-white">{artist.name}</h3>
              </motion.div>
            ))}
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
            className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
            whileInView={{ scale: [0.8, 1.1, 1] }}
            transition={{ duration: 0.6 }}
          >
            Apresentação
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-md rounded-2xl p-8 border border-yellow-400/30"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl">🏛️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-yellow-400 mb-2">SESC</h3>
                  <p className="text-gray-200">
                    Apresentação especial no SESC, trazendo toda a magia do Quarto 
                    para um dos espaços culturais mais importantes da cidade.
                  </p>
                </motion.div>
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl">🎵</span>
                  </div>
                  <h3 className="text-2xl font-bold text-orange-400 mb-2">+Mc</h3>
                  <p className="text-gray-200">
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
            className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"
            whileInView={{ scale: [0.8, 1.1, 1] }}
            transition={{ duration: 0.6 }}
          >
            Oficina
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-md rounded-2xl p-8 border border-green-400/30"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center">
                <motion.div 
                  className="w-32 h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="text-4xl">🎭</span>
                </motion.div>
                <h3 className="text-3xl font-bold text-green-400 mb-6">O Corpo que Canta</h3>
                <p className="text-lg md:text-xl leading-relaxed text-gray-200">
                  Uma oficina transformadora que explora a conexão entre corpo, voz e expressão artística. 
                  Descubra como seu corpo inteiro pode se tornar um instrumento de comunicação e arte, 
                  integrando movimento, respiração e vocalização em uma experiência única de autoconhecimento 
                  e desenvolvimento artístico.
                </p>
                <motion.button
                  className="mt-8 bg-gradient-to-r from-green-500 to-blue-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Saiba Mais
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
            className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent"
            whileInView={{ scale: [0.8, 1.1, 1] }}
            transition={{ duration: 0.6 }}
          >
            Clipping
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Revista Cultural', date: '15 Jan 2024', excerpt: 'Quarto promete revolucionar a cena musical local...' },
              { title: 'Blog Musical', date: '20 Jan 2024', excerpt: 'Artistas excepcionais se reúnem em show intimista...' },
              { title: 'Portal de Notícias', date: '25 Jan 2024', excerpt: 'Oficina "O Corpo que Canta" desperta interesse...' }
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
                <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-pink-500 rounded-full mb-4 flex items-center justify-center">
                  <span className="text-xl">📰</span>
                </div>
                <h3 className="text-xl font-bold text-red-400 mb-2">{clip.title}</h3>
                <p className="text-sm text-gray-400 mb-3">{clip.date}</p>
                <p className="text-gray-200">{clip.excerpt}</p>
                <motion.button
                  className="mt-4 text-pink-400 hover:text-pink-300 font-semibold"
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
            className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
            whileInView={{ scale: [0.8, 1.1, 1] }}
            transition={{ duration: 0.6 }}
          >
            Contato
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-md rounded-2xl p-8 border border-cyan-400/30"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-cyan-400 mb-6">Entre em Contato</h3>
                  <div className="space-y-4">
                    <motion.div 
                      className="flex items-center space-x-3"
                      whileHover={{ x: 10 }}
                    >
                      <span className="text-2xl">📧</span>
                      <span className="text-gray-200">contato@quarto.com.br</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-3"
                      whileHover={{ x: 10 }}
                    >
                      <span className="text-2xl">📱</span>
                      <span className="text-gray-200">(11) 99999-9999</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-3"
                      whileHover={{ x: 10 }}
                    >
                      <span className="text-2xl">📍</span>
                      <span className="text-gray-200">São Paulo, SP</span>
                    </motion.div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-cyan-400 mb-6">Redes Sociais</h3>
                  <div className="flex space-x-4">
                    {[
                      { name: 'Instagram', icon: '📷' },
                      { name: 'Facebook', icon: '📘' },
                      { name: 'YouTube', icon: '📺' },
                      { name: 'Spotify', icon: '🎵' }
                    ].map((social, index) => (
                      <motion.button
                        key={social.name}
                        className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center"
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <span className="text-xl">{social.icon}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="py-8 px-6 border-t border-white/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Quarto. Todos os direitos reservados.
          </p>
        </div>
      </motion.footer>
    </div>
  );
}
