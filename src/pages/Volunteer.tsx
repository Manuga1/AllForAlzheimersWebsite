import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Users, Calendar, Package, Heart } from "lucide-react";
import { toast } from "sonner";
import volunteersImage from "@/assets/volunteers.jpg";

const Volunteer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interests: [] as string[],
    availability: "",
    message: "",
  });

  const opportunities = [
    {
      icon: Package,
      title: "Packaging Events",
      description: "Help assemble care packages for Alzheimer's patients",
      commitment: "4-6 hours per event",
    },
    {
      icon: Calendar,
      title: "Event Coordination",
      description: "Assist with planning and running fundraising events",
      commitment: "Flexible schedule",
    },
    {
      icon: Users,
      title: "Community Outreach",
      description: "Spread awareness and engage with the community",
      commitment: "2-4 hours per week",
    },
    {
      icon: Heart,
      title: "Patient Support",
      description: "Provide companionship and support to patients",
      commitment: "Weekly visits",
    },
  ];

  const interests = [
    "Packaging Events",
    "Event Coordination",
    "Community Outreach",
    "Patient Support",
    "Social Media",
    "Fundraising",
  ];

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || formData.interests.length === 0) {
      toast.error("Please fill in all required fields");
      return;
    }

    toast.success("Thank you for signing up!", {
      description: "We'll be in touch soon with volunteer opportunities.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      interests: [],
      availability: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section
        className="pt-32 pb-20 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.9), rgba(139, 92, 246, 0.8)), url(${volunteersImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 animate-fade-in">
            Join Our Volunteer Team
          </h1>
          <p className="text-xl max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Make a meaningful impact in the lives of Alzheimer's patients and their families.
          </p>
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 gradient-text">
            Volunteer Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {opportunities.map((opportunity, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-glow transition-all duration-300 animate-slide-up border-none"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <opportunity.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-heading font-semibold mb-2">
                    {opportunity.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {opportunity.description}
                  </p>
                  <p className="text-xs font-medium text-primary">
                    {opportunity.commitment}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sign Up Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card className="shadow-glow border-none animate-scale-in">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-heading">Volunteer Sign Up</CardTitle>
              <CardDescription className="text-base">
                Fill out the form below and we'll match you with opportunities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">
                    Full Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(123) 456-7890"
                  />
                </div>

                {/* Interests */}
                <div className="space-y-3">
                  <Label>
                    Areas of Interest <span className="text-destructive">*</span>
                  </Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {interests.map((interest) => (
                      <div key={interest} className="flex items-center space-x-2">
                        <Checkbox
                          id={interest}
                          checked={formData.interests.includes(interest)}
                          onCheckedChange={() => handleInterestToggle(interest)}
                        />
                        <Label
                          htmlFor={interest}
                          className="text-sm font-normal cursor-pointer"
                        >
                          {interest}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div className="space-y-2">
                  <Label htmlFor="availability">Availability</Label>
                  <Input
                    id="availability"
                    value={formData.availability}
                    onChange={(e) =>
                      setFormData({ ...formData, availability: e.target.value })
                    }
                    placeholder="e.g., Weekends, evenings"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Tell Us About Yourself</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Why do you want to volunteer with us?"
                    rows={4}
                  />
                </div>

                {/* Submit Button */}
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Heart className="mr-2 h-5 w-5" />
                  Sign Up to Volunteer
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Volunteer;
