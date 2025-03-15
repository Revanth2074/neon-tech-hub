
import { Layout } from "@/components/Layout";
import { Mail, Phone, Github, Linkedin, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  const coreTeam = [
    {
      name: "Alex Chen",
      role: "Club President",
      bio: "AI researcher with focus on deep learning architectures. Leading the club's strategic direction and partnerships.",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=300&h=300&auto=format&fit=crop",
      socials: {
        linkedin: "https://linkedin.com/in/alexchen",
        github: "https://github.com/alexchen",
      },
    },
    {
      name: "Sophia Rodriguez",
      role: "Technical Lead",
      bio: "Robotics engineer specialized in sensor fusion and autonomous systems. Oversees all technical projects and workshops.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&h=300&auto=format&fit=crop",
      socials: {
        linkedin: "https://linkedin.com/in/sophiarodriguez",
        github: "https://github.com/sophiarodriguez",
      },
    },
    {
      name: "Marcus Johnson",
      role: "Events Coordinator",
      bio: "Computer vision specialist with experience in organizing tech conferences. Manages all club events and workshops.",
      image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=300&h=300&auto=format&fit=crop",
      socials: {
        linkedin: "https://linkedin.com/in/marcusjohnson",
        github: "https://github.com/marcusjohnson",
      },
    },
    {
      name: "Aisha Patel",
      role: "Content Lead",
      bio: "AI ethics researcher and tech writer. Manages all club content, blog posts, and social media presence.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&h=300&auto=format&fit=crop",
      socials: {
        linkedin: "https://linkedin.com/in/aishapatel",
        github: "https://github.com/aishapatel",
      },
    },
  ];

  return (
    <Layout>
      <section className="py-20 relative">
        <div className="absolute top-0 right-0 w-full h-full bg-tech-muted/5 -skew-y-3 transform-gpu" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-tech-accent-blue via-tech-accent-purple to-tech-accent-teal bg-clip-text text-transparent">
              About Aprameya
            </h1>
            <p className="text-xl text-muted-foreground">
              We're a community of tech enthusiasts dedicated to exploring the frontiers of technology and innovation. Our club brings together people with diverse skills and backgrounds to collaborate on exciting projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
            <div className="animate-slide-up opacity-0" style={{ animationDelay: '0.1s' }}>
              <Card className="h-full bg-tech-muted/20 border-tech-accent-blue/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                  <p className="text-muted-foreground mb-4">
                    To create a collaborative environment where members can learn, experiment, and build cutting-edge technology solutions while developing professional skills and relationships.
                  </p>
                  <p className="text-muted-foreground">
                    We believe in the power of community-driven innovation and education. By bringing together passionate individuals from diverse backgrounds, we create a dynamic environment where ideas flourish and groundbreaking projects come to life.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="animate-slide-up opacity-0" style={{ animationDelay: '0.2s' }}>
              <Card className="h-full bg-tech-muted/20 border-tech-accent-purple/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                  <p className="text-muted-foreground mb-4">
                    To become a leading tech community that fosters innovation and helps shape the future of technology through collaborative projects, knowledge sharing, and community engagement.
                  </p>
                  <p className="text-muted-foreground">
                    We envision a future where our members lead technological advancements across industries, creating solutions that positively impact society while building a supportive network of tech professionals that lasts throughout their careers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-tech-accent-blue to-tech-accent-purple bg-clip-text text-transparent">
            Meet Our Core Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {coreTeam.map((member, index) => (
              <div 
                key={index} 
                className="animate-slide-up opacity-0" 
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <Card className="overflow-hidden bg-tech-muted/20 border-tech-accent-blue/20 hover:border-tech-accent-blue/50 transition-all duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-tech-accent-purple mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" asChild className="rounded-full">
                        <a href={member.socials.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="outline" size="icon" asChild className="rounded-full">
                        <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-tech-accent-purple to-tech-accent-teal bg-clip-text text-transparent">
              Contact Us
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-tech-muted/20 border-tech-accent-teal/20">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-tech-accent-teal" />
                      <a href="mailto:info@Aprameya.org" className="hover:text-tech-accent-teal transition-colors">
                        info@Aprameya.org
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-tech-accent-teal" />
                      <a href="tel:+1234567890" className="hover:text-tech-accent-teal transition-colors">
                        (123) 456-7890
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-tech-accent-teal shrink-0 mt-1" />
                      <address className="not-italic text-muted-foreground">
                        Tech Innovation Center<br />
                        123 AI Boulevard<br />
                        San Francisco, CA 94107
                      </address>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-tech-muted/20 border-tech-accent-blue/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">Get Involved</h3>
                  <p className="text-muted-foreground mb-4">
                    Interested in joining our community? We welcome tech enthusiasts of all levels. Attend our next event or reach out directly to learn more about membership opportunities.
                  </p>
                  <Button className="w-full bg-tech-accent-blue hover:bg-tech-accent-purple">
                    Join Aprameya
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
