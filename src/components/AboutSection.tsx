import React from 'react';
import { Users, Globe, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-section-bg">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a final-year IT student at the <span className="text-primary font-semibold">College of Engineering and Management, Kolaghat</span>. 
              Motivated and detail-oriented, I enjoy working at the intersection of <span className="text-accent font-semibold">Data Analytics and Java Development</span>.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I thrive in team environments — leading sports teams, organizing events, and solving problems collaboratively. 
              I speak <span className="text-primary font-semibold">English, Hindi, and Bengali</span>, and I love learning, traveling, and exploring new opportunities.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently pursuing my B.Tech in Information Technology with a CGPA of 6.92, I'm passionate about turning complex data into meaningful insights 
              and building robust applications that solve real-world problems.
            </p>
          </div>
          
          <div className="grid gap-6">
            <Card className="hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground">Team Leadership</h3>
                  <p className="text-muted-foreground">Sports captain, event organizer, collaborative problem solver</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="p-3 bg-accent/10 rounded-full">
                  <Globe className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground">Cultural Diversity</h3>
                  <p className="text-muted-foreground">Fluent in English, Hindi, and Bengali</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground">Continuous Learning</h3>
                  <p className="text-muted-foreground">Always exploring new technologies and opportunities</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};