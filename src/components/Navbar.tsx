import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown, LogIn, UserCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleLogout = () => {
    logout();
    closeMenu();
  };

  const handleDashboardClick = () => {
    closeMenu();
    if (user?.role === 'admin') {
      navigate('/admin/dashboard');
    } else if (user?.role === 'coreteam') {
      navigate('/team/dashboard');
    } else {
      navigate('/dashboard');
    }
  };

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
          <img src="Aprameya Logo-White.png" alt="Aprameya Logo" className="w-14 h-14" />
          <span className="text-xl font-display font-semibold tracking-tight group-hover:text-tech-accent-blue transition-colors">
            Aprameya
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
          
          {user ? (
            <div className="relative group">
              <button className="btn-secondary text-sm py-2 px-4 flex items-center gap-2">
                <UserCircle className="w-4 h-4" />
                {user.name.split(' ')[0]}
              </button>
              <div className="absolute top-full right-0 mt-1 w-48 rounded-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-tech-muted border border-border shadow-xl">
                <button
                  onClick={handleDashboardClick}
                  className="block w-full text-left px-4 py-2 hover:bg-white/5 text-sm"
                >
                  Dashboard
                </button>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-white/5 text-sm text-destructive"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="btn-secondary text-sm py-2 px-4 flex items-center gap-2"
              >
                <LogIn className="w-4 h-4" />
                Login
              </Link>
              <Link
                to="/join"
                className="btn-primary text-sm py-2 px-4"
              >
                Join Now
              </Link>
            </>
          )}
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
            {user ? (
              <>
                <button
                  onClick={handleDashboardClick}
                  className="btn-secondary text-center"
                >
                  Dashboard
                </button>
                <button
                  onClick={handleLogout}
                  className="btn-primary text-center bg-destructive hover:bg-destructive/90 border-destructive"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
