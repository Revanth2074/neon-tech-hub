
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-12 py-4",
        scrolled
          ? "bg-tech-darker/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-tech-accent-blue to-tech-accent-purple flex items-center justify-center animate-pulse-glow">
            <div className="w-8 h-8 rounded-full bg-tech-darker flex items-center justify-center text-white font-display font-bold">
              TC
            </div>
          </div>
          <span className="text-xl font-display font-semibold tracking-tight group-hover:text-tech-accent-blue transition-colors">
            TechClub
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-sm font-medium hover:text-tech-accent-blue transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-sm font-medium hover:text-tech-accent-blue transition-colors"
          >
            About
          </Link>
          <Link
            to="/events"
            className="text-sm font-medium hover:text-tech-accent-blue transition-colors"
          >
            Events
          </Link>
          <Link
            to="/projects"
            className="text-sm font-medium hover:text-tech-accent-blue transition-colors"
          >
            Projects
          </Link>
          <Link
            to="/blog"
            className="text-sm font-medium hover:text-tech-accent-blue transition-colors"
          >
            Blog
          </Link>
          <div className="relative group">
            <button className="text-sm font-medium hover:text-tech-accent-blue transition-colors flex items-center gap-1">
              Refer & Earn <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 mt-1 w-48 rounded-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-tech-muted border border-border shadow-xl">
              <Link
                to="/refer"
                className="block px-4 py-2 hover:bg-white/5 text-sm"
              >
                Invite Friends
              </Link>
              <Link
                to="/rewards"
                className="block px-4 py-2 hover:bg-white/5 text-sm"
              >
                Redeem Points
              </Link>
              <Link
                to="/leaderboard"
                className="block px-4 py-2 hover:bg-white/5 text-sm"
              >
                Leaderboard
              </Link>
            </div>
          </div>
          <Link
            to="/login"
            className="btn-secondary text-sm py-2 px-4"
          >
            Login
          </Link>
          <Link
            to="/join"
            className="btn-primary text-sm py-2 px-4"
          >
            Join Now
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-tech-darker/95 backdrop-blur-lg z-50 transition-all duration-300 flex flex-col md:hidden",
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <div className="flex justify-end p-6">
          <button onClick={closeMenu} aria-label="Close menu">
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center gap-6 flex-1">
          <Link
            to="/"
            className="text-xl font-medium hover:text-tech-accent-blue transition-colors"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-xl font-medium hover:text-tech-accent-blue transition-colors"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="/events"
            className="text-xl font-medium hover:text-tech-accent-blue transition-colors"
            onClick={closeMenu}
          >
            Events
          </Link>
          <Link
            to="/projects"
            className="text-xl font-medium hover:text-tech-accent-blue transition-colors"
            onClick={closeMenu}
          >
            Projects
          </Link>
          <Link
            to="/blog"
            className="text-xl font-medium hover:text-tech-accent-blue transition-colors"
            onClick={closeMenu}
          >
            Blog
          </Link>
          <Link
            to="/refer"
            className="text-xl font-medium hover:text-tech-accent-blue transition-colors"
            onClick={closeMenu}
          >
            Refer & Earn
          </Link>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link
              to="/login"
              className="btn-secondary text-center"
              onClick={closeMenu}
            >
              Login
            </Link>
            <Link
              to="/join"
              className="btn-primary text-center"
              onClick={closeMenu}
            >
              Join Now
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
