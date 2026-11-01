import React from 'react';
import './index.css';
import { ScrollProgress, Nav, CommandPalette } from './components/shared';
import { useCommandPalette } from './components/hooks';
import Hero from './components/Hero';
import Story from './components/Story';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Journey from './components/Journey';
import Vision from './components/Vision';
import Closing from './components/Closing';

export default function App() {
  const { isOpen, open, close } = useCommandPalette();

  return (
    <>
      <ScrollProgress />
      <Nav onOpenCmd={open} />
      <CommandPalette isOpen={isOpen} onClose={close} />
      <main id="main-content">
        <Hero />
        <Story />
        <Projects />
        <Skills />
        <Journey />
        <Vision />
        <Closing />
      </main>
    </>
  );
}
