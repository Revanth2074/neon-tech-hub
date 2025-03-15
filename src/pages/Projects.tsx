
import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Calendar } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Autonomous Drone Navigation",
      description: "A drone that uses computer vision and deep learning to navigate complex environments without GPS.",
      image: "https://images.unsplash.com/photo-1506947411487-a56738267384?q=80&w=2000&auto=format&fit=crop",
      tech: ["Python", "TensorFlow", "ROS", "Computer Vision"],
      github: "https://github.com/techclub/drone-navigation",
      demo: "https://techclub-demos.vercel.app/drone",
      date: "March 2023",
      status: "Completed"
    },
    {
      id: 2,
      title: "AI Assistant for Medical Diagnosis",
      description: "Machine learning model that assists healthcare professionals by analyzing medical images to detect abnormalities.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2000&auto=format&fit=crop",
      tech: ["Python", "PyTorch", "OpenCV", "React"],
      github: "https://github.com/techclub/medical-ai",
      demo: null,
      date: "January 2023",
      status: "Completed"
    },
    {
      id: 3,
      title: "Smart Traffic Management System",
      description: "IoT-based traffic management system that uses AI to optimize traffic flow and reduce congestion.",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2000&auto=format&fit=crop",
      tech: ["Python", "TensorFlow", "IoT", "Raspberry Pi"],
      github: "https://github.com/techclub/smart-traffic",
      demo: "https://techclub-demos.vercel.app/traffic",
      date: "October 2022",
      status: "Completed"
    },
    {
      id: 4,
      title: "Robotic Arm for Precision Assembly",
      description: "A robotic arm that uses reinforcement learning to perform high-precision assembly tasks in manufacturing.",
      image: "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?q=80&w=2000&auto=format&fit=crop",
      tech: ["Python", "ROS", "PyTorch", "Arduino"],
      github: "https://github.com/techclub/robotic-arm",
      demo: null,
      date: "June 2022",
      status: "Completed"
    },
    {
      id: 5,
      title: "Self-Driving Car Simulator",
      description: "A virtual environment for testing autonomous driving algorithms in various weather and traffic conditions.",
      image: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=2000&auto=format&fit=crop",
      tech: ["Unity", "C#", "Python", "TensorFlow"],
      github: "https://github.com/techclub/car-simulator",
      demo: "https://techclub-demos.vercel.app/simulator",
      date: "April 2022",
      status: "Completed"
    },
    {
      id: 6,
      title: "AI-Powered Accessibility Tool",
      description: "An ongoing project developing tools that help people with disabilities navigate digital interfaces using AI.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop",
      tech: ["JavaScript", "React", "TensorFlow.js", "Web Speech API"],
      github: "https://github.com/techclub/accessibility-ai",
      demo: null,
      date: "January 2023",
      status: "In Progress"
    }
  ];

  return (
    <Layout>
      <section className="py-20 relative">
        <div className="absolute top-0 right-0 w-full h-full bg-tech-muted/5 -skew-y-3 transform-gpu" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-tech-accent-blue via-tech-accent-purple to-tech-accent-teal bg-clip-text text-transparent">
              Our Projects
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore the innovative projects created by our members, showcasing cutting-edge technology and creative problem-solving.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="animate-slide-up opacity-0" 
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <Card className="h-full flex flex-col overflow-hidden bg-tech-muted/10 border-tech-accent-blue/20 hover:border-tech-accent-blue/50 transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute top-0 right-0 m-4">
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${
                        project.status === "Completed" 
                          ? "bg-tech-accent-green/20 text-tech-accent-green" 
                          : "bg-tech-accent-purple/20 text-tech-accent-purple"
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{project.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 hover:text-tech-accent-blue transition-colors">
                      <Link to={`/projects/${project.id}`}>
                        {project.title}
                      </Link>
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 flex-1">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-2 py-1 text-xs rounded bg-tech-muted/30 text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3 mt-auto">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      </Button>
                      
                      {project.demo && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                            <ExternalLink className="w-4 h-4" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
