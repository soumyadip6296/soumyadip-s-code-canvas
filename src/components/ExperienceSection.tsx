import React from 'react';
import { Building2, Calendar, MapPin, TrendingUp, Database, BarChart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Experience
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional experience and hands-on learning in data analytics and technology
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="hover:shadow-large transition-all duration-300 overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 md:w-1/3 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building2 className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Infotact Solutions</h3>
                    <p className="text-muted-foreground">Data Analytics Intern</p>
                  </div>
                </div>
                
                <div className="p-8 md:w-2/3">
                  <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      October 2025
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      Remote/Hybrid
                    </div>
                  </div>
                  
                  <h4 className="text-2xl font-semibold text-foreground mb-4">
                    Data Analytics Intern
                  </h4>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <Database className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        Hands-on work with <span className="text-primary font-semibold">Excel, Power BI, and Python basics</span> 
                        for comprehensive data analysis and visualization
                      </p>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <BarChart className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        Performed data cleaning, transformation, and visualization tasks on real-world datasets
                      </p>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <TrendingUp className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        Successfully extracted meaningful trends, patterns, and insights from complex datasets 
                        to support business decision-making
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h5 className="font-semibold text-foreground">Key Skills Developed:</h5>
                    <div className="flex flex-wrap gap-2">
                      {['Data Cleaning', 'Excel Analytics', 'Power BI', 'Python Basics', 'Data Visualization', 'Trend Analysis'].map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};