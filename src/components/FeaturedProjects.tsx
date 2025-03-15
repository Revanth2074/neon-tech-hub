
import { useState } from "react";
import AnimatedCard from "./ui/AnimatedCard";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Vision Assistant",
    category: "AI",
    description: "An AI-powered assistant that can identify objects in images and videos.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWklMjBhYnN0cmFjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=80",
    githubUrl: "#",
    demoUrl: "#",
    tags: ["Computer Vision", "Python", "TensorFlow"]
  },
  {
    title: "RoboArm",
    category: "Robotics",
    description: "A robotic arm that can be controlled using gestures and voice commands.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22731c9c78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJvYm90aWNzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=80",
    githubUrl: "#",
    demoUrl: "#",
    tags: ["Arduino", "Computer Vision", "3D Printing"]
  },
  {
    title: "AutoDrive Simulator",
    category: "Autonomous Vehicles",
    description: "A simulator for testing and improving autonomous driving algorithms.",
    image: "https://images.unsplash.com/photo-1635334368350-a564864f1d63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNlbGYlMjBkcml2aW5nJTIwY2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=80",
    githubUrl: "#",
    demoUrl: "#",
    tags: ["Unity", "C#", "Machine Learning"]
  },
  {
    title: "Smart Home Hub",
    category: "IoT",
    description: "A central hub to control smart home devices with voice commands and automation.",
    image: "https://images.unsplash.com/photo-1558002038-1055886d4783?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNtYXJ0JTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=80",
    githubUrl: "#",
    demoUrl: "#",
    tags: ["Raspberry Pi", "Node.js", "MQTT"]
  }
];

const FeaturedProjects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <h2 className="section-heading">Featured Projects</h2>
            <p className="text-muted-foreground">
              Check out some of our innovative projects spanning AI, robotics, and autonomous systems.
            </p>
          </div>
          <Link
            to="/projects"
            className="group inline-flex items-center text-tech-accent-blue hover:text-tech-accent-purple transition-colors"
          >
            View all projects
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="animate-slide-up opacity-0" 
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatedCard 
                className="h-full flex flex-col overflow-hidden group"
                glowBorder={hoveredIndex === index}
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-tech-accent-blue/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-block bg-tech-dark/80 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-t from-tech-darker via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 z-10"
                  )}>
                    <div className="flex gap-3">
                      <a 
                        href={project.githubUrl} 
                        className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm hover:bg-tech-accent-blue/30 transition-colors"
                        aria-label="GitHub repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a 
                        href={project.demoUrl} 
                        className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm hover:bg-tech-accent-blue/30 transition-colors"
                        aria-label="Live demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-tech-accent-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs bg-tech-muted px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
