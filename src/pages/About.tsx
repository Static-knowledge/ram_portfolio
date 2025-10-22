import { ParticleBackground } from "@/components/ParticleBackground";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  User, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Heart,
  Coffee,
  Code2,
  Target
} from "lucide-react";
import { Link } from "react-router-dom";


export const About = () => {
  const timeline = [
    {
      year: "2023",
      type: "education",
      title: "Bachelor's in Computer Science",
      organization: "University of Technology",
      description: "Graduated with honors, specializing in Full-Stack Development and Software Engineering.",
      icon: <GraduationCap className="w-4 h-4" />
    },
    {
      year: "2023",
      type: "internship",
      title: "Full-Stack Developer Intern",
      organization: "TechCorp Solutions",
      description: "Developed responsive web applications using MERN stack, collaborated with senior developers on enterprise-level projects.",
      icon: <Briefcase className="w-4 h-4" />
    },
    {
      year: "2022",
      type: "internship",
      title: "Frontend Developer Intern",
      organization: "Digital Innovations Ltd",
      description: "Created interactive user interfaces with React.js, implemented responsive designs and improved user experience metrics by 30%.",
      icon: <Briefcase className="w-4 h-4" />
    },
    {
      year: "2021",
      type: "certification",
      title: "MongoDB Developer Certification",
      organization: "MongoDB University",
      description: "Completed comprehensive training in NoSQL database design, optimization, and best practices.",
      icon: <Award className="w-4 h-4" />
    }
  ];

  const values = [
    {
      title: "Clean Code",
      description: "Writing maintainable, readable code that stands the test of time",
      icon: <Code2 className="w-6 h-6" />
    },
    {
      title: "User-Centric Design",
      description: "Creating experiences that delight users and solve real problems",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Continuous Learning",
      description: "Staying current with emerging technologies and industry trends",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Collaboration",
      description: "Working effectively in teams to achieve shared goals",
      icon: <Coffee className="w-6 h-6" />
    }
  ];

  const personalStats = [
    { label: "Projects Completed", value: "5+" },
    { label: "Technologies Mastered", value: "10+" },
    { label: "Lines of Code", value: "100K+" },
    { label: "Coffee Consumed", value: "∞" }
  ];

  return (
    <div className="min-h-screen relative pt-20">
      <ParticleBackground />
      
      <div className="relative z-10 py-12">
        <div className="container mx-auto px-4">
          
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-5xl font-bold gradient-text mb-6">About Me</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate developer with a mission to turn innovative ideas into interactive 
              digital realities. Here's my journey, values, and what drives me every day.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            
            {/* Profile & Quote */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="glass-effect border-primary/20 animate-slide-up">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-20 h-20 rounded-full hero-gradient flex items-center justify-center text-primary-foreground">
                      <User className="w-10 h-10" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold gradient-text mb-2">Ram Prakash S</h2>
                      <p className="text-primary font-medium mb-4">Full-Stack Web Developer</p>
                      <p className="text-muted-foreground leading-relaxed">
                        I'm a passionate full-stack developer who thrives on creating digital 
                        experiences that make a difference. With expertise in the MERN stack 
                        and a love for modern web technologies, I build applications that are 
                        not just functional, but truly engaging.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-muted/20 rounded-lg p-6 border-l-4 border-primary">
                    <blockquote className="text-lg italic text-foreground mb-2">
                      "I turn ideas into interactive realities—one line of code at a time."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">- My Development Philosophy</cite>
                  </div>
                </CardContent>
              </Card>

              {/* Core Values */}
              <Card className="glass-effect border-primary/20 animate-slide-up">
                <CardHeader>
                  <CardTitle className="gradient-text">Core Values & Principles</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {values.map((value, index) => (
                      <div key={value.title} className="flex items-start gap-4">
                        <div className="p-2 rounded-lg hero-gradient text-primary-foreground flex-shrink-0">
                          {value.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Stats & Quick Info */}
            <div className="space-y-8">
              
              {/* Personal Stats */}
              <Card className="glass-effect border-primary/20 animate-slide-up">
                <CardHeader>
                  <CardTitle className="gradient-text text-center">By the Numbers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {personalStats.map((stat, index) => (
                      <div key={stat.label} className="text-center p-4 rounded-lg bg-muted/10">
                        <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Current Status */}
              <Card className="glass-effect border-primary/20 animate-slide-up">
                <CardHeader>
                  <CardTitle className="gradient-text">Currently</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-sm">Available for new projects</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <span className="text-sm">Learning WebGL & Three.js</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-yellow-500" />
                      <span className="text-sm">Building AI-powered apps</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-muted/20">
                    <Link to="/contact">
                      <Button className="w-full hero-gradient text-primary-foreground hover:shadow-glow">
                        Let's Work Together
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Educational & Professional Timeline */}
          <Card className="glass-effect border-primary/20 animate-slide-up">
            <CardHeader>
              <CardTitle className="gradient-text text-center text-2xl">Educational & Professional Journey</CardTitle>
              <p className="text-center text-muted-foreground">
                Key milestones that shaped my development career
              </p>
            </CardHeader>
            <CardContent>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-transparent" />
                
                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <div key={index} className="relative flex items-start gap-6 pl-4">
                      {/* Timeline Marker */}
                      <div className="relative z-10 w-16 h-16 rounded-full hero-gradient flex items-center justify-center text-primary-foreground shadow-glow">
                        {item.icon}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 pb-8">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge className="hero-gradient text-primary-foreground border-0">
                            {item.year}
                          </Badge>
                          <Badge variant="outline" className="border-primary/30 text-primary">
                            {item.type}
                          </Badge>
                        </div>
                        
                        <h3 className="text-lg font-semibold text-foreground mb-1">
                          {item.title}
                        </h3>
                        <p className="text-primary font-medium mb-3">
                          {item.organization}
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-slide-up">
            <Card className="glass-effect border-primary/20 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold gradient-text mb-4">
                  Ready to Create Something Amazing?
                </h3>
                <p className="text-muted-foreground mb-6">
                  I'm always excited to discuss new projects, share ideas, or explore 
                  opportunities for collaboration. Let's connect and build something incredible together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button className="hero-gradient text-primary-foreground hover:shadow-glow">
                      Get In Touch
                    </Button>
                  </Link>
                  <Link to="/projects">
                    <Button variant="outline" className="glass-effect border-primary/30 hover:bg-primary/10">
                      View My Work
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};