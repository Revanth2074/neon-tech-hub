
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Calendar, MapPin, Clock, Users, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Events = () => {
  const { toast } = useToast();
  const [registeredEvents, setRegisteredEvents] = useState<number[]>([]);

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
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFja2F0aG9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=80",
    }
  ];

  const registerForEvent = (eventId: number) => {
    if (registeredEvents.includes(eventId)) {
      toast({
        title: "Already Registered",
        description: "You are already registered for this event.",
        variant: "destructive",
      });
      return;
    }

    // In a real application, we would send a request to the server here
    setRegisteredEvents([...registeredEvents, eventId]);
    
    toast({
      title: "Registration Successful!",
      description: "You have been registered for the event.",
    });
  };

  return (
    <Layout>
      <section className="py-20 relative">
        <div className="absolute top-0 right-0 w-full h-full bg-tech-muted/5 -skew-y-3 transform-gpu" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-tech-accent-blue via-tech-accent-purple to-tech-accent-teal bg-clip-text text-transparent">
              Upcoming Events
            </h1>
            <p className="text-xl text-muted-foreground">
              Join us for workshops, competitions, and presentations to learn and connect with fellow tech enthusiasts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-10 mb-16">
            {events.map((event, index) => (
              <div 
                key={index} 
                className="animate-slide-up opacity-0" 
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <Card className="overflow-hidden bg-tech-muted/10 border-tech-accent-blue/20 hover:border-tech-accent-blue/50 transition-all duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-3 h-full">
                    <div className="relative h-60 md:h-full overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-tech-darker via-tech-darker/50 to-transparent opacity-70 md:bg-gradient-to-r"></div>
                      <div className="absolute bottom-4 left-4 bg-tech-accent-blue text-white text-sm font-medium px-2 py-1 rounded flex items-center gap-1.5 md:top-4 md:bottom-auto">
                        <Calendar className="w-3.5 h-3.5" />
                        {event.date}
                      </div>
                    </div>
                    
                    <div className="col-span-2 p-6 flex flex-col">
                      <div>
                        <h3 className="text-2xl font-semibold mb-3 hover:text-tech-accent-blue transition-colors">
                          <Link to={`/events/${event.id}`}>
                            {event.title}
                          </Link>
                        </h3>
                        <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-tech-accent-purple" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-tech-accent-purple" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-tech-accent-purple" />
                            <span>{event.registered} / {event.capacity} registered</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-6">{event.description}</p>
                      </div>
                      
                      <div className="flex flex-wrap gap-3 items-center mt-auto">
                        <Button 
                          onClick={() => registerForEvent(event.id)}
                          disabled={registeredEvents.includes(event.id)}
                          className={`${
                            registeredEvents.includes(event.id) 
                              ? "bg-tech-accent-green hover:bg-tech-accent-green"
                              : "bg-tech-accent-blue hover:bg-tech-accent-purple"
                          }`}
                        >
                          {registeredEvents.includes(event.id) ? "Registered" : "Register Now"}
                        </Button>
                        
                        <Button variant="outline" asChild>
                          <Link to={`/events/${event.id}`} className="flex items-center gap-1">
                            View Details <ChevronRight className="w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
