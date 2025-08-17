import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const educationData = [
  {
    degree: "B.Tech in Information Technology",
    institution: "College of Engineering and Management, Kolaghat",
    period: "2022 - 2026",
    score: "CGPA: 6.92 (till 6th Sem)",
    icon: <GraduationCap className="h-6 w-6" />,
    color: "primary"
  },
  {
    degree: "XII - Science",
    institution: "Morar Sammilani High School, Bankura",
    period: "2022",
    score: "87%",
    icon: <Award className="h-6 w-6" />,
    color: "accent"
  },
  {
    degree: "X - Secondary",
    institution: "Peardoba High School, Bankura",
    period: "2020",
    score: "87%",
    icon: <Award className="h-6 w-6" />,
    color: "primary"
  }
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Education
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey through various institutions, building a strong foundation in technology and problem-solving
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 timeline-line hidden md:block"></div>
          
          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}>
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-full ${item.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'}`}>
                          <div className={item.color === 'primary' ? 'text-primary' : 'text-accent'}>
                            {item.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-foreground mb-2">
                            {item.degree}
                          </h3>
                          <p className="text-muted-foreground mb-2">
                            {item.institution}
                          </p>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {item.period}
                            </div>
                            <div className={`font-semibold ${item.color === 'primary' ? 'text-primary' : 'text-accent'}`}>
                              {item.score}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Timeline Node */}
                <div className="hidden md:flex w-4 h-4 bg-primary rounded-full border-4 border-background shadow-medium z-10"></div>
                
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};