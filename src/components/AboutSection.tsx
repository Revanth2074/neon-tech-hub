
import AnimatedCard from "./ui/AnimatedCard";
import { ArrowRight, Code, Cpu, Robot, Car } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const focusAreas = [
    {
      icon: <Cpu className="w-10 h-10 text-tech-accent-blue" />,
      title: "Artificial Intelligence",
      description:
        "Deep learning, computer vision, natural language processing, and AI applications."
    },
    {
      icon: <Robot className="w-10 h-10 text-tech-accent-purple" />,
      title: "Robotics",
      description:
        "Design, construction, and programming of robots for various applications."
    },
    {
      icon: <Car className="w-10 h-10 text-tech-accent-teal" />,
      title: "Autonomous Vehicles",
      description:
        "Self-driving technology, navigation systems, and sensor fusion."
    },
    {
      icon: <Code className="w-10 h-10 text-tech-accent-green" />,
      title: "Software Development",
      description:
        "Programming, software architecture, and application development."
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute top-0 right-0 w-full h-full bg-tech-muted/5 -skew-y-3 transform-gpu" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="section-heading mx-auto">About TechClub</h2>
          <p className="text-muted-foreground mt-4">
            We're a community of tech enthusiasts dedicated to exploring the frontiers of technology and innovation. Our club brings together people with diverse skills and backgrounds to collaborate on exciting projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="animate-slide-up opacity-0" style={{ animationDelay: '0.1s' }}>
            <AnimatedCard className="p-8 h-full flex flex-col" glassEffect>
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-muted-foreground mb-6 flex-1">
                To create a collaborative environment where members can learn, experiment, and build cutting-edge technology solutions while developing professional skills and relationships.
              </p>
              <div className="pt-4 border-t border-white/10">
                <Link to="/about" className="group inline-flex items-center text-tech-accent-blue hover:text-tech-accent-purple transition-colors">
                  Learn more about us
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </AnimatedCard>
          </div>
          
          <div className="animate-slide-up opacity-0" style={{ animationDelay: '0.2s' }}>
            <AnimatedCard className="p-8 h-full flex flex-col" glassEffect>
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-muted-foreground mb-6 flex-1">
                To become a leading tech community that fosters innovation and helps shape the future of technology through collaborative projects, knowledge sharing, and community engagement.
              </p>
              <div className="pt-4 border-t border-white/10">
                <Link to="/projects" className="group inline-flex items-center text-tech-accent-blue hover:text-tech-accent-purple transition-colors">
                  Explore our projects
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </AnimatedCard>
          </div>
        </div>
        
        <h3 className="text-2xl font-semibold text-center mb-10">Our Focus Areas</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {focusAreas.map((area, index) => (
            <div 
              key={index} 
              className="animate-slide-up opacity-0" 
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <AnimatedCard className="p-6 h-full" glowBorder>
                <div className="mb-4">{area.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{area.title}</h4>
                <p className="text-muted-foreground text-sm">{area.description}</p>
              </AnimatedCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
