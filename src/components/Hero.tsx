
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden">
      {/* Animated background decorations */}
      <div className="absolute top-[20%] right-[10%] w-72 h-72 rounded-full bg-tech-accent-blue/10 blur-[80px] animate-fade-in-slow" />
      <div className="absolute bottom-[20%] left-[15%] w-96 h-96 rounded-full bg-tech-accent-purple/10 blur-[100px] animate-fade-in-slow" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-8 max-w-2xl animate-fade-in">
            <div>
              <div className="inline-block rounded-full px-3 py-1 text-xs font-medium bg-tech-accent-blue/10 border border-tech-accent-blue/30 text-tech-accent-blue mb-6">
                Innovate. Create. Transform.
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-balance">
                Pushing Boundaries of{" "}
                <span className="text-tech-accent-blue text-glow">AI</span>,{" "}
                <span className="text-tech-accent-purple text-glow">Robotics</span> &{" "}
                <span className="text-tech-accent-teal text-glow">Autonomous Systems</span>
              </h1>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Join a community of innovators, developers, and tech enthusiasts working on cutting-edge projects. 
              Learn, collaborate, and build the future together at TechClub.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/join" className="btn-primary text-center">
                Join the Club
              </Link>
              <Link to="/projects" className="btn-secondary text-center flex items-center justify-center gap-2 group">
                Explore Projects
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            
            <div className="flex items-center gap-4 pt-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-tech-dark overflow-hidden">
                    <div className={`w-full h-full bg-gradient-to-br from-tech-accent-blue to-tech-accent-purple`}></div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-white">120+ members</span> have already joined our community
              </p>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="aspect-square max-w-[500px] mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-tech-accent-blue/20 via-tech-accent-purple/20 to-tech-accent-teal/20 rounded-full blur-3xl opacity-70"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[80%] h-[80%] rounded-full border border-white/10 backdrop-blur-sm bg-tech-darker/60 shadow-lg flex items-center justify-center">
                  <div className="w-[90%] h-[90%] rounded-full border border-tech-accent-blue/30 flex items-center justify-center">
                    <div className="w-[85%] h-[85%] rounded-full bg-gradient-to-br from-tech-accent-blue/20 via-tech-accent-purple/20 to-tech-accent-teal/20 animate-pulse-glow flex items-center justify-center">
                      <div className="w-[80%] h-[80%] rounded-full bg-tech-darker/80 border border-white/10 flex items-center justify-center">
                        <div className="absolute w-full h-full rounded-full">
                          {/* Decorative orbiting elements */}
                          {[1, 2, 3].map((i) => (
                            <div 
                              key={i}
                              className="absolute w-8 h-8 rounded-full bg-gradient-to-r animate-pulse-glow"
                              style={{
                                top: `${25 + i * 20}%`,
                                left: `${15 + i * 25}%`,
                                background: i === 1 
                                  ? 'linear-gradient(to right, #00BFFF, #00BFFF90)'
                                  : i === 2 
                                    ? 'linear-gradient(to right, #8A2BE2, #8A2BE290)'
                                    : 'linear-gradient(to right, #00CED1, #00CED190)'
                              }}
                            ></div>
                          ))}
                        </div>
                        <div className="relative z-10 text-center p-6">
                          <h3 className="text-lg font-semibold mb-2">TechClub</h3>
                          <p className="text-sm text-muted-foreground">Future-focused innovation hub</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-10 md:gap-20 mt-20 animate-slide-up opacity-0" style={{ animationDelay: '0.6s' }}>
          <div className="text-center">
            <h4 className="text-3xl font-bold text-tech-accent-blue">15+</h4>
            <p className="text-sm text-muted-foreground mt-1">Active Projects</p>
          </div>
          <div className="text-center">
            <h4 className="text-3xl font-bold text-tech-accent-purple">30+</h4>
            <p className="text-sm text-muted-foreground mt-1">Events Hosted</p>
          </div>
          <div className="text-center">
            <h4 className="text-3xl font-bold text-tech-accent-teal">120+</h4>
            <p className="text-sm text-muted-foreground mt-1">Club Members</p>
          </div>
          <div className="text-center">
            <h4 className="text-3xl font-bold text-tech-accent-green">8+</h4>
            <p className="text-sm text-muted-foreground mt-1">Partner Organizations</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
