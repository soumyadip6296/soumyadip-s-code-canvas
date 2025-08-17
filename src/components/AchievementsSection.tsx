import React from 'react';
import { Trophy, Medal, Users, Target, Crown, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const achievements = [
  {
    title: "School Topper",
    description: "Achieved top rank in Class X examinations",
    year: "2020",
    icon: <Crown className="h-6 w-6" />,
    color: "achievement"
  },
  {
    title: "Man of the Tournament",
    description: "Outstanding performance in inter-school sports competition",
    year: "2019",
    icon: <Trophy className="h-6 w-6" />,
    color: "primary"
  },
  {
    title: "Best Defender Award",
    description: "Recognized for exceptional defensive skills in volleyball",
    year: "2024",
    icon: <Medal className="h-6 w-6" />,
    color: "accent"
  }
];

const leadership = [
  {
    title: "Volleyball Captain",
    description: "Leading the college volleyball team",
    icon: <Target className="h-6 w-6" />
  },
  {
    title: "Mess Committee Member",
    description: "Managing hostel food and dining operations",
    icon: <Users className="h-6 w-6" />
  },
  {
    title: "Departmental Sports Organizer",
    description: "Coordinating sports events and activities",
    icon: <Award className="h-6 w-6" />
  },
  {
    title: "Cricket & Football Player",
    description: "Active member of college sports teams",
    icon: <Trophy className="h-6 w-6" />
  }
];

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Achievements & Leadership
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition for academic excellence and leadership in sports and organizational activities
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center">
              <Trophy className="h-6 w-6 text-achievement mr-3" />
              Major Achievements
            </h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-full ${
                        achievement.color === 'achievement' ? 'bg-achievement/10' :
                        achievement.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'
                      }`}>
                        <div className={`${
                          achievement.color === 'achievement' ? 'text-achievement' :
                          achievement.color === 'primary' ? 'text-primary' : 'text-accent'
                        }`}>
                          {achievement.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="text-lg font-semibold text-foreground">
                            {achievement.title}
                          </h4>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            achievement.color === 'achievement' ? 'bg-achievement/10 text-achievement' :
                            achievement.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'
                          }`}>
                            {achievement.year}
                          </span>
                        </div>
                        <p className="text-muted-foreground">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Leadership */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center">
              <Users className="h-6 w-6 text-primary mr-3" />
              Leadership Roles
            </h3>
            <div className="space-y-6">
              {leadership.map((role, index) => (
                <Card key={index} className="hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <div className="text-primary">
                          {role.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">
                          {role.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {role.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        {/* Sports Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Sports & Teamwork</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { sport: "🏐", name: "Volleyball", role: "Captain & Best Defender" },
              { sport: "🏏", name: "Cricket", role: "Team Player" },
              { sport: "⚽", name: "Football", role: "Team Player" },
              { sport: "🏆", name: "Leadership", role: "Event Organizer" }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="text-4xl mb-3">{item.sport}</div>
                  <h4 className="font-semibold text-foreground mb-1">{item.name}</h4>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};