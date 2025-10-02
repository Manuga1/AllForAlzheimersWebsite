import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { toast } from "sonner";
import volunteersImage from "@/assets/volunteers.jpg";
import carePackageImage from "@/assets/care-package.jpg";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Care Package Assembly Day",
      date: "March 15, 2025",
      time: "10:00 AM - 2:00 PM",
      location: "Vanderbilt University Commons",
      image: carePackageImage,
      type: "Volunteer",
      spots: 25,
      description: "Join us for a hands-on packaging event where we'll assemble 100+ care packages for local Alzheimer's patients.",
    },
    {
      title: "Spring Fundraising Gala",
      date: "April 5, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "Nashville Convention Center",
      image: volunteersImage,
      type: "Fundraiser",
      spots: 150,
      description: "Our annual gala featuring dinner, silent auction, and inspiring stories from our community.",
    },
    {
      title: "Community Awareness Walk",
      date: "May 20, 2025",
      time: "9:00 AM - 12:00 PM",
      location: "Centennial Park",
      image: volunteersImage,
      type: "Community",
      spots: 200,
      description: "Walk with us to raise awareness and funds for Alzheimer's support. Family-friendly event with activities.",
    },
  ];

  const pastEvents = [
    {
      title: "Winter Packaging Event",
      date: "January 10, 2025",
      attendees: 42,
      packagesCreated: 150,
    },
    {
      title: "Holiday Fundraiser",
      date: "December 15, 2024",
      attendees: 120,
      fundsRaised: "$15,000",
    },
    {
      title: "Fall Volunteer Day",
      date: "October 5, 2024",
      attendees: 35,
      packagesCreated: 120,
    },
  ];

  const handleRSVP = (eventTitle: string) => {
    toast.success(`RSVP successful for ${eventTitle}!`, {
      description: "You'll receive a confirmation email shortly.",
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 gradient-text animate-fade-in">
            Events & Activities
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Join us for packaging events, fundraisers, and community gatherings that make a real difference
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 gradient-text">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-glow transition-all duration-300 animate-fade-in border-none"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm">
                    {event.type}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-heading">{event.title}</CardTitle>
                  <CardDescription className="text-base">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4 text-primary" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4 text-primary" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4 text-primary" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="h-4 w-4 text-primary" />
                      {event.spots} spots available
                    </div>
                  </div>
                  <Button
                    variant="hero"
                    className="w-full"
                    onClick={() => handleRSVP(event.title)}
                  >
                    RSVP Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 gradient-text">
            Past Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pastEvents.map((event, index) => (
              <Card
                key={index}
                className="hover:shadow-glow transition-all duration-300 animate-slide-up border-none"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-semibold mb-2 text-primary">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{event.date}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Attendees:</span>
                      <span className="font-semibold">{event.attendees}</span>
                    </div>
                    {event.packagesCreated && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Packages Created:</span>
                        <span className="font-semibold">{event.packagesCreated}</span>
                      </div>
                    )}
                    {event.fundsRaised && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Funds Raised:</span>
                        <span className="font-semibold text-primary">
                          {event.fundsRaised}
                        </span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <Card className="max-w-3xl mx-auto shadow-glow border-none bg-gradient-primary text-white">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Want to Host an Event?
              </h2>
              <p className="text-lg mb-8 opacity-95">
                Partner with us to organize a packaging event, fundraiser, or awareness campaign in your community.
              </p>
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-primary border-white hover:bg-white/90"
                asChild
              >
                <a href="/contact">Contact Us</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
