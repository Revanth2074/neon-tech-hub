
import { useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Calendar, MapPin, Clock, Users, Share2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { useState } from "react";

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [isRegistered, setIsRegistered] = useState(false);
  
  // Mock event data - in a real app, this would come from an API
  const events = [
    {
      id: 1,
      title: "AI Workshop: Neural Networks",
      date: "June 15, 2023",
      time: "2:00 PM - 4:00 PM",
      location: "Tech Hub, Room 204",
      capacity: 30,
      registered: 18,
      description: "Join us for an immersive workshop on neural networks. We'll cover the basics of deep learning and implement a simple neural network together.",
      longDescription: "This workshop is designed for beginners and intermediate programmers interested in the field of artificial intelligence. We'll start with the fundamentals of neural networks, exploring how they mimic the human brain to solve complex problems. Throughout the session, participants will build their own simple neural network using Python and popular libraries like TensorFlow and PyTorch. By the end of the workshop, you'll have a working model that can recognize basic patterns and understand the core principles that power modern AI systems.",
      prerequisites: ["Basic Python knowledge", "Laptop with Python installed", "Interest in AI and machine learning"],
      instructors: ["Alex Chen", "Sophia Rodriguez"],
      image: "https://images.unsplash.com/photo-1558402529-e89a39cea782?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFpJTIwd29ya3Nob3B8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Robotics Competition",
      date: "July 8, 2023",
      time: "10:00 AM - 5:00 PM",
      location: "University Main Hall",
      capacity: 50,
      registered: 42,
      description: "Participate in our annual robotics competition. Teams will showcase their robots in navigation, object manipulation, and obstacle courses.",
      longDescription: "Our annual robotics competition brings together enthusiasts, students, and professionals to showcase their engineering prowess. Teams of up to 4 members will compete in three challenging categories: autonomous navigation through a complex maze, precise object manipulation and sorting, and traversing a dynamic obstacle course. Each team will have access to a preparation area and technical support. Spectators are welcome to witness cutting-edge robotics in action and vote for the audience favorite award. Whether you're competing or watching, this event promises to be an exciting demonstration of robotics innovation.",
      prerequisites: ["Pre-built robot meeting competition specifications", "Team registration completed by June 15"],
      instructors: ["Marcus Johnson", "Aisha Patel"],
      image: "https://images.unsplash.com/photo-1561144257-e32e8602e0b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJvYm90aWNzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Self-Driving Car Symposium",
      date: "August 20, 2023",
      time: "1:00 PM - 6:00 PM",
      location: "Virtual Event",
      capacity: 100,
      registered: 65,
      description: "Learn about the latest advancements in autonomous vehicle technology. Industry experts will discuss sensor fusion, decision making algorithms, and regulatory challenges.",
      longDescription: "The Self-Driving Car Symposium brings together industry leaders, researchers, and policy makers for an in-depth exploration of autonomous vehicle technology. The virtual format allows participants from around the globe to engage with cutting-edge presentations and panel discussions. Topics include advanced sensor fusion techniques, real-time decision making algorithms, ethical considerations in autonomous systems, and navigating the complex regulatory landscape. The symposium will feature keynote speeches from prominent figures in the field, interactive Q&A sessions, and virtual networking opportunities. Attendees will gain valuable insights into the current state and future direction of self-driving technology.",
      prerequisites: ["Registration required", "Basic understanding of autonomous systems recommended"],
      instructors: ["Dr. James Wilson (Tesla)", "Sarah Kim (Waymo)", "Prof. Michael Brown (MIT)"],
      image: "https://images.unsplash.com/photo-1617704548623-340376564e68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2VsZiUyMGRyaXZpbmclMjBjYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Coding Hackathon: AI Applications",
      date: "September 5, 2023",
      time: "9:00 AM - 9:00 PM",
      location: "Tech Incubator Space",
      capacity: 40,
      registered: 22,
      description: "A 12-hour hackathon focusing on developing innovative AI applications. Form teams and compete for prizes while building something amazing!",
      longDescription: "This intensive 12-hour hackathon challenges participants to conceive, design, and develop AI-powered applications that address real-world problems. Teams of 2-5 members will work collaboratively to create functional prototypes. The event begins with a brief overview of available APIs and resources, followed by team formation for those who haven't already organized groups. Throughout the day, mentors will circulate to provide guidance and support. Meals and refreshments will be provided to keep energy levels high. The day concludes with project presentations and judging, with prizes awarded for innovation, technical achievement, and practical impact. This hackathon is perfect for programmers, designers, and creative thinkers looking to push the boundaries of AI application.",
      prerequisites: ["Laptop and charger", "Development environment set up", "Basic programming knowledge", "GitHub account"],
      instructors: ["Sophia Rodriguez", "Alex Chen", "Industry mentors"],
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFja2F0aG9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=80",
    }
  ];

  const event = events.find(e => e.id === Number(id));
  
  if (!event) {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Event Not Found</h1>
            <p className="text-muted-foreground mb-6">The event you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/events">Back to Events</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  const handleRegister = () => {
    // In a real app, we would send a request to the server
    setIsRegistered(true);
    
    toast({
      title: "Registration Successful!",
      description: "You have been registered for this event.",
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: event.title,
        text: event.description,
        url: window.location.href,
      })
      .catch((error) => console.log('Error sharing', error));
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link Copied!",
        description: "Event link copied to clipboard.",
      });
    }
  };

  return (
    <Layout>
      <section className="py-10 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-6 -ml-2">
              <Link to="/events" className="flex items-center gap-1">
                <ArrowLeft className="w-4 h-4" />
                Back to all events
              </Link>
            </Button>
            
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tech-darker via-tech-darker/30 to-transparent"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2">
                <h1 className="text-3xl md:text-4xl font-bold mb-6">{event.title}</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-tech-accent-blue" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-tech-accent-blue" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-tech-accent-blue" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-tech-accent-blue" />
                    <span>{event.registered} / {event.capacity} registered</span>
                  </div>
                </div>
                
                <div className="prose prose-invert max-w-none mb-12">
                  <p className="text-lg mb-4">{event.description}</p>
                  <p>{event.longDescription}</p>
                  
                  <h3 className="text-xl font-semibold mt-8 mb-4">What You'll Need</h3>
                  <ul>
                    {event.prerequisites.map((prereq, index) => (
                      <li key={index}>{prereq}</li>
                    ))}
                  </ul>
                  
                  <h3 className="text-xl font-semibold mt-8 mb-4">Instructors</h3>
                  <ul>
                    {event.instructors.map((instructor, index) => (
                      <li key={index}>{instructor}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-tech-muted/10 border border-tech-accent-blue/20 rounded-xl p-6 sticky top-24">
                  <h3 className="text-xl font-semibold mb-4">Registration</h3>
                  
                  <div className="mb-6">
                    <p className="text-muted-foreground mb-2">
                      Spaces remaining: <span className="font-medium">{event.capacity - event.registered}</span>
                    </p>
                    <div className="w-full bg-tech-muted/30 rounded-full h-2 mb-1">
                      <div 
                        className="bg-tech-accent-blue h-2 rounded-full" 
                        style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {Math.round((event.registered / event.capacity) * 100)}% full
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <Button 
                      onClick={handleRegister}
                      disabled={isRegistered}
                      className={`${
                        isRegistered 
                          ? "bg-tech-accent-green hover:bg-tech-accent-green"
                          : "bg-tech-accent-blue hover:bg-tech-accent-purple"
                      }`}
                    >
                      {isRegistered ? "You're Registered!" : "Register Now"}
                    </Button>
                    
                    <Button variant="outline" onClick={handleShare}>
                      <Share2 className="w-4 h-4 mr-2" />
                      Share Event
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EventDetail;
