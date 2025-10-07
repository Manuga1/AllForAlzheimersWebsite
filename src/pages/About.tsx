import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Eye, Award } from "lucide-react";
import volunteersImage from "@/assets/volunteers.jpg";

const About = () => {
  const milestones = [
    { year: "2015", event: "Conception", description: "Started at age 9 with volunteer work" },
    { year: "2018", event: "First Event", description: "Organized first care package assembly" },
    { year: "2023", event: "Nonprofit Status", description: "Achieved 501(c)(3) status" },
    { year: "2024", event: "5000+ Packages", description: "Milestone achievement in care delivery" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We lead with empathy and genuine care for every individual we serve.",
    },
    {
      icon: Target,
      title: "Impact",
      description: "Every action is driven by measurable positive outcomes for patients and families.",
    },
    {
      icon: Eye,
      title: "Dignity",
      description: "We honor the humanity and worth of every person affected by Alzheimer's.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 gradient-text animate-fade-in">
            Our Story
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            From a young volunteer's compassion to a movement of hope and dignity for Alzheimer's patients
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="animate-fade-in">
              <img
                src={volunteersImage}
                alt="Our mission in action"
                className="rounded-lg shadow-glow w-full"
              />
            </div>
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-4xl font-heading font-bold gradient-text">
                A Journey of Compassion
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  AllForAlzheimer's began with a simple act of kindness. At just nine years old, our founder started volunteering at local care facilities, witnessing firsthand the challenges faced by Alzheimer's patients and their families.
                </p>
                <p>
                  What started as weekend volunteer work evolved into a passionate mission. Recognizing the need for consistent, thoughtful support, the idea of curated care packages was born—combining comfort items like lavender products with engaging activities like puzzles.
                </p>
                <p>
                  Today, as a 501(c)(3) nonprofit relaunched at Vanderbilt University, we've grown into a community-driven organization that has delivered over 5,000 care packages and mobilized hundreds of volunteers. But our core mission remains unchanged: bringing comfort, dignity, and hope to those affected by Alzheimer's.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-primary text-primary-foreground" id="mission">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-xl leading-relaxed opacity-95">
                To provide comfort, dignity, and support to individuals living with Alzheimer's disease through thoughtfully curated care packages and community-driven initiatives that bring hope to patients and their families.
              </p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Our Vision
              </h2>
              <p className="text-xl leading-relaxed opacity-95">
                A world where every person affected by Alzheimer's disease receives the compassionate care, support, and dignity they deserve, surrounded by a community that understands and uplifts them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 gradient-text">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-glow transition-all duration-300 animate-slide-up border-none"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <value.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-heading font-semibold mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 gradient-text">
            Our Journey
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30" />
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className="relative pl-20 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-6 top-2 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-glow" />
                    
                    <Card className="hover:shadow-glow transition-all duration-300 border-none">
                      <CardContent className="p-6">
                        <div className="flex items-baseline gap-4 mb-2">
                          <span className="text-2xl font-heading font-bold text-primary">
                            {milestone.year}
                          </span>
                          <h3 className="text-xl font-semibold">
                            {milestone.event}
                          </h3>
                        </div>
                        <p className="text-muted-foreground">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
