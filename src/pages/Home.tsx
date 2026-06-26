import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedCounter from "@/components/AnimatedCounter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, Users, Package, Calendar, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import carePackageImage from "@/assets/care-package.jpg";
import volunteersImage from "@/assets/volunteers.jpg";

const Home = () => {
  const stats = [
    { icon: Package, value: 100, suffix: "+", label: "Care Packages Delivered" },
    { icon: Users, value: 50, suffix: "+", label: "Active Volunteers" },
    { icon: Heart, value: 100, suffix: "+", label: "Families Impacted" },
  ];

  const impactAreas = [
    {
      title: "Care Packages",
      description: "Thoughtfully curated packages with lavender items, puzzles, and comfort supplies for Alzheimer's patients.",
      image: carePackageImage,
    },
    {
      title: "Volunteer Programs",
      description: "Join our community of dedicated volunteers making a direct impact in the lives of patients and families.",
      image: volunteersImage,
    },
    {
      title: "Community Events",
      description: "Packaging events, fundraisers, and awareness campaigns that bring our community together.",
      image: heroImage,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        <div className="container mx-auto px-4 z-10 text-center text-white">
          <h1 className="text-5xl md:text-9xl font-heading font-bold mb-6 animate-fade-in">
            All For Alzheimer's
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-95 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            
            Supporting Alzheimer's patients and their families with care packages and compassionate community action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="lg" asChild>
              <Link to="/donate">
                Donate Now <Heart className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
              <Link to="/volunteer">
                Join Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full" />
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 gradient-text">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center p-8 shadow-card hover:shadow-glow transition-all duration-300 animate-slide-up border-none"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <stat.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <div className="text-4xl font-heading font-bold text-primary mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Parallax Section */}
      <section className="py-32 relative parallax" style={{ backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.9), rgba(139, 92, 246, 0.8)), url(${volunteersImage})` }}>
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Our Mission
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            To provide comfort, dignity, and support to individuals living with Alzheimer's disease through thoughtfully curated care packages and community-driven initiatives.
          </p>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 gradient-text">
            How We Make a Difference
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactAreas.map((area, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-glow transition-all duration-300 animate-fade-in border-none"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-heading font-semibold mb-3 text-primary">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Your support helps us bring comfort and hope to Alzheimer's patients and their families. Every contribution matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" asChild className="bg-white text-primary border-white hover:bg-white/90">
              <Link to="/donate">
                Donate Today <Heart className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="lg" asChild className="text-white border-2 border-white hover:bg-white/10">
              <Link to="/volunteer">
                Become a Volunteer <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
