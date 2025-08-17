import React from 'react';
import { Code, BarChart3, Users, Database, TrendingUp, MessageSquare } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const skillCategories = [
  {
    title: "Programming",
    icon: <Code className="h-8 w-8" />,
    color: "primary",
    skills: [
      { name: "C Programming", level: 85 },
      { name: "Data Structures & Algorithms", level: 80 },
      { name: "Java", level: 75 },
      { name: "SQL", level: 70 }
    ]
  },
  {
    title: "Analytics & Tools",
    icon: <BarChart3 className="h-8 w-8" />,
    color: "accent",
    skills: [
      { name: "Microsoft Excel", level: 90 },
      { name: "Power BI", level: 80 },
      { name: "Google Sheets", level: 85 },
      { name: "Python Basics", level: 60 }
    ]
  },
  {
    title: "Soft Skills",
    icon: <Users className="h-8 w-8" />,
    color: "primary",
    skills: [
      { name: "Leadership", level: 95 },
      { name: "Teamwork", level: 90 },
      { name: "Communication", level: 85 },
      { name: "Problem Solving", level: 80 }
    ]
  }
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-section-bg">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical and soft skills developed through academics, projects, and practical experience
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-large transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 rounded-full ${category.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'}`}>
                    <div className={category.color === 'primary' ? 'text-primary' : 'text-accent'}>
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className={`text-sm font-medium ${category.color === 'primary' ? 'text-primary' : 'text-accent'}`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-1000 ease-out ${
                            category.color === 'primary' ? 'bg-primary' : 'bg-accent'
                          }`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional Skills Icons */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Other Competencies</h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            {[
              { icon: <Database className="h-8 w-8" />, label: "Database Management" },
              { icon: <TrendingUp className="h-8 w-8" />, label: "Data Analysis" },
              { icon: <MessageSquare className="h-8 w-8" />, label: "Multilingual" },
              { icon: <Users className="h-8 w-8" />, label: "Event Organization" },
              { icon: <Code className="h-8 w-8" />, label: "Problem Solving" },
              { icon: <BarChart3 className="h-8 w-8" />, label: "Data Visualization" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center space-y-2 group cursor-pointer">
                <div className="p-4 bg-muted rounded-full group-hover:bg-primary/10 transition-colors duration-300">
                  <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                    {item.icon}
                  </div>
                </div>
                <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300 text-center">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};