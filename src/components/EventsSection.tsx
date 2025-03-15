
import AnimatedCard from "./ui/AnimatedCard";
import { Calendar, ArrowRight, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const events = [
  {
    title: "AI Workshop: Neural Networks",
    date: "June 15, 2023",
    time: "2:00 PM - 4:00 PM",
    location: "Tech Hub, Room 204",
    image: "https://images.unsplash.com/photo-1558402529-e89a39cea782?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFpJTIwd29ya3Nob3B8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Robotics Competition",
    date: "July 8, 2023",
    time: "10:00 AM - 5:00 PM",
    location: "University Main Hall",
    image: "https://images.unsplash.com/photo-1561144257-e32e8602e0b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJvYm90aWNzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Self-Driving Car Symposium",
    date: "August 20, 2023",
    time: "1:00 PM - 6:00 PM",
    location: "Virtual Event",
    image: "https://images.unsplash.com/photo-1617704548623-340376564e68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2VsZiUyMGRyaXZpbmclMjBjYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=80",
  }
];

const EventsSection = () => {
  return (
    <section className="py-20 relative bg-tech-muted/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <h2 className="section-heading">Upcoming Events</h2>
            <p className="text-muted-foreground">
              Join us for workshops, competitions, and presentations to learn and connect with fellow tech enthusiasts.
            </p>
          </div>
          <Link
            to="/events"
            className="group inline-flex items-center text-tech-accent-blue hover:text-tech-accent-purple transition-colors"
          >
            View all events
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div 
              key={index} 
              className="animate-slide-up opacity-0" 
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <AnimatedCard className="h-full flex flex-col overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-tech-darker via-tech-darker/50 to-transparent opacity-70"></div>
                  <div className="absolute bottom-4 left-4 bg-tech-accent-blue text-white text-sm font-medium px-2 py-1 rounded flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {event.date}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold mb-3 hover:text-tech-accent-blue transition-colors">
                    <Link to={`/events/${index}`}>
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
                  </div>
                  <div className="mt-auto pt-4">
                    <Link 
                      to={`/events/${index}`}
                      className="inline-block px-4 py-2 bg-tech-muted hover:bg-tech-muted/80 rounded-lg text-sm font-medium transition-colors"
                    >
                      RSVP
                    </Link>
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

export default EventsSection;
