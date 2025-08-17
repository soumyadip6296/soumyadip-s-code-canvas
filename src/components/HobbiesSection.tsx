import React from 'react';
import { MapPin, BookOpen, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const hobbies = [
  {
    icon: "🏏⚽",
    title: "Cricket & Volleyball",
    description: "Building teamwork and strategic thinking through sports",
    color: "primary"
  },
  {
    icon: "🌍✈️",
    title: "Traveling",
    description: "Exploring new places and cultures to broaden perspectives",
    color: "accent"
  },
  {
    icon: "📚💡",
    title: "Learning Tech",
    description: "Continuously exploring new technologies and solving problems",
    color: "primary"
  }
];

export const HobbiesSection = () => {
  return (
    <section id="hobbies" className="py-20 px-4 bg-section-bg">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Hobbies & Interests
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What drives me outside of academics and professional pursuits
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {hobbies.map((hobby, index) => (
            <Card key={index} className="text-center hover:shadow-large transition-all duration-300 hover:-translate-y-2 group">
              <CardContent className="p-8">
                <div className="text-6xl mb-6 group-hover:animate-bounce">
                  {hobby.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-4 ${
                  hobby.color === 'primary' ? 'text-primary' : 'text-accent'
                } group-hover:scale-105 transition-transform duration-300`}>
                  {hobby.title}
                </h3>
                <p className="text-muted-foreground">
                  {hobby.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto hover:shadow-medium transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <MapPin className="h-6 w-6 text-primary" />
                <BookOpen className="h-6 w-6 text-accent" />
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Life Philosophy
              </h3>
              <p className="text-muted-foreground italic">
                "Combining curiosity with action, teamwork with individual growth, and 
                traditional values with modern innovation to create meaningful impact."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};