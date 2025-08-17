import React from 'react';
import { ExternalLink, Github, BarChart3, Database, Code2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: "Student Performance Dashboard",
    description: "Interactive dashboard visualizing academic trends and performance metrics using Excel and Power BI. Analyzed student data to identify patterns and insights for educational improvement.",
    technologies: ["Excel", "Power BI", "Data Analysis"],
    icon: <BarChart3 className="h-8 w-8" />,
    color: "primary",
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    title: "Library Management System",
    description: "Comprehensive book record management system built with Java and SQL. Features include book cataloging, member management, and automated tracking of book loans and returns.",
    technologies: ["Java", "SQL", "Database Design"],
    icon: <Database className="h-8 w-8" />,
    color: "accent",
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    title: "DSA Practice Repository",
    description: "Collection of solved Data Structures and Algorithms problems in C and Java. Organized by topics with detailed explanations and multiple solution approaches for each problem.",
    technologies: ["C", "Java", "Algorithms", "Problem Solving"],
    icon: <Code2 className="h-8 w-8" />,
    color: "primary",
    links: {
      demo: "#",
      github: "#"
    }
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-section-bg">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects demonstrating skills in data analysis, software development, and problem-solving
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-large transition-all duration-300 hover:-translate-y-2 h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className={`p-4 rounded-full w-fit mb-6 ${project.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'}`}>
                  <div className={project.color === 'primary' ? 'text-primary' : 'text-accent'}>
                    {project.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        project.color === 'primary' 
                          ? 'bg-primary/10 text-primary' 
                          : 'bg-accent/10 text-accent'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 mt-auto">
                  <Button variant="outline" size="sm" className="flex-1 group/btn">
                    <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:animate-bounce" />
                    Demo
                  </Button>
                  <Button variant="ghost" size="sm" className="flex-1 group/btn">
                    <Github className="h-4 w-4 mr-2 group-hover/btn:animate-bounce" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};