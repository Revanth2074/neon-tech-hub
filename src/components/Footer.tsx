
import { Link } from "react-router-dom";
import { Mail, Github, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="pt-16 pb-8 bg-tech-darker relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-tech-accent-blue to-tech-accent-purple flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-tech-darker flex items-center justify-center text-white font-display font-bold">
                  TC
                </div>
              </div>
              <span className="text-xl font-display font-semibold tracking-tight group-hover:text-tech-accent-blue transition-colors">
                TechClub
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6">
              A community of innovators and tech enthusiasts working on cutting-edge projects in AI, robotics, and autonomous systems.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-tech-accent-blue transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-tech-accent-blue transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-tech-accent-blue transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-tech-accent-blue transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-tech-accent-blue transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-tech-accent-blue transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-muted-foreground hover:text-tech-accent-blue transition-colors text-sm">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-muted-foreground hover:text-tech-accent-blue transition-colors text-sm">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-tech-accent-blue transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-tech-accent-blue transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Join & Participate</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/join" className="text-muted-foreground hover:text-tech-accent-blue transition-colors text-sm">
                  Become a Member
                </Link>
              </li>
              <li>
                <Link to="/refer" className="text-muted-foreground hover:text-tech-accent-blue transition-colors text-sm">
                  Refer a Friend
                </Link>
              </li>
              <li>
                <Link to="/rewards" className="text-muted-foreground hover:text-tech-accent-blue transition-colors text-sm">
                  Rewards Program
                </Link>
              </li>
              <li>
                <Link to="/leaderboard" className="text-muted-foreground hover:text-tech-accent-blue transition-colors text-sm">
                  Referral Leaderboard
                </Link>
              </li>
              <li>
                <Link to="/volunteer" className="text-muted-foreground hover:text-tech-accent-blue transition-colors text-sm">
                  Volunteer
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Have questions or want to learn more about our club? Get in touch!
            </p>
            <div className="flex items-center gap-2 text-muted-foreground mb-2 text-sm">
              <Mail className="w-4 h-4 text-tech-accent-blue" />
              <a href="mailto:info@techclub.com" className="hover:text-tech-accent-blue transition-colors">
                info@techclub.com
              </a>
            </div>
            <Link 
              to="/contact" 
              className="inline-block mt-4 text-tech-accent-blue hover:text-tech-accent-purple transition-colors text-sm"
            >
              Send us a message →
            </Link>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {currentYear} TechClub. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-muted-foreground hover:text-tech-accent-blue transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-tech-accent-blue transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
