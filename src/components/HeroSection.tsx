import React from 'react';
import { Download, ChevronDown, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/soumyadip-profile.jpg';
import resumeURL from '@/assets/Soumyadip_Mandal_Resume.pdf';

export const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resumeURL;
    link.download = 'Soumyadip_Mandal_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient px-4 relative">
      <div className="container mx-auto text-center animate-fade-in">
        <div className="mb-8 animate-bounce-in">
          <img 
            src={profileImage} 
            alt="Soumyadip Mandal" 
            className="w-48 h-48 mx-auto rounded-full object-cover shadow-large hover:shadow-glow-primary transition-all duration-300 hover:scale-105"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground animate-slide-up">
          Hi, I'm <span className="text-primary">Soumyadip Mandal</span> 👋
        </h1>
        
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Aspiring Data Analyst & Java Developer | B.Tech IT Student (2026)
        </h2>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
          I love turning data into insights and building solutions with code.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <Button variant="hero" size="lg" onClick={downloadResume} className="group">
            <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
            Download Resume
          </Button>
          <Button variant="accent" size="lg" onClick={scrollToContact} className="group">
            <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce" />
            Get In Touch
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-muted-foreground" />
      </div>
    </section>
  );
};