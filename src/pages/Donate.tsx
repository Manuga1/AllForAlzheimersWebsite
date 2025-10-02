import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Heart, Package, Users, Sparkles, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const Donate = () => {
  const [donationType, setDonationType] = useState<"one-time" | "monthly">("one-time");
  const [amount, setAmount] = useState<number | "custom">(50);
  const [customAmount, setCustomAmount] = useState("");

  const donationTiers = [
    {
      amount: 20,
      icon: Package,
      title: "Essential Support",
      description: "Provides 1 care package with comfort items",
      impact: "1 patient receives care",
    },
    {
      amount: 50,
      icon: Heart,
      title: "Compassion Package",
      description: "Provides 3 care packages",
      impact: "3 patients receive support",
    },
    {
      amount: 100,
      icon: Users,
      title: "Community Care",
      description: "Provides 6 care packages",
      impact: "6 patients helped",
    },
    {
      amount: 250,
      icon: Sparkles,
      title: "Impact Supporter",
      description: "Provides 15 care packages",
      impact: "15 families supported",
    },
  ];

  const handleDonate = () => {
    const finalAmount = amount === "custom" ? parseFloat(customAmount) : amount;
    if (isNaN(finalAmount) || finalAmount <= 0) {
      toast.error("Please enter a valid donation amount");
      return;
    }

    // PayPal integration would go here
    toast.success(`Thank you for your ${donationType} donation of $${finalAmount}!`, {
      description: "Redirecting to PayPal...",
    });
    
    // Simulate PayPal redirect
    setTimeout(() => {
      console.log("Redirecting to PayPal for", finalAmount);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 gradient-text animate-fade-in">
            Make a Difference Today
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Your generosity brings comfort, dignity, and hope to Alzheimer's patients and their families.
          </p>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="shadow-glow border-none animate-scale-in">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-heading">Choose Your Impact</CardTitle>
              <CardDescription className="text-base">
                Every dollar makes a meaningful difference in someone's life
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Donation Type */}
              <div className="space-y-4">
                <Label className="text-lg font-semibold">Donation Type</Label>
                <RadioGroup
                  value={donationType}
                  onValueChange={(value) => setDonationType(value as "one-time" | "monthly")}
                  className="grid grid-cols-2 gap-4"
                >
                  <div>
                    <RadioGroupItem value="one-time" id="one-time" className="peer sr-only" />
                    <Label
                      htmlFor="one-time"
                      className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-popover p-6 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 cursor-pointer transition-all"
                    >
                      <span className="text-lg font-semibold">One-Time</span>
                      <span className="text-sm text-muted-foreground">Give once</span>
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="monthly" id="monthly" className="peer sr-only" />
                    <Label
                      htmlFor="monthly"
                      className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-popover p-6 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 cursor-pointer transition-all"
                    >
                      <span className="text-lg font-semibold">Monthly</span>
                      <span className="text-sm text-muted-foreground">Sustaining support</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Donation Tiers */}
              <div className="space-y-4">
                <Label className="text-lg font-semibold">Select Amount</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {donationTiers.map((tier) => (
                    <Card
                      key={tier.amount}
                      className={`cursor-pointer transition-all hover:shadow-md ${
                        amount === tier.amount
                          ? "border-2 border-primary bg-primary/5 shadow-glow"
                          : "border hover:border-primary/50"
                      }`}
                      onClick={() => setAmount(tier.amount)}
                    >
                      <CardContent className="p-6 space-y-3">
                        <div className="flex items-center justify-between">
                          <tier.icon className="h-8 w-8 text-primary" />
                          <span className="text-2xl font-bold text-primary">
                            ${tier.amount}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{tier.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            {tier.description}
                          </p>
                          <div className="flex items-center gap-2 text-sm text-primary font-medium">
                            <CheckCircle2 className="h-4 w-4" />
                            {tier.impact}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Custom Amount */}
              <div className="space-y-4">
                <Label className="text-lg font-semibold">Or Enter Custom Amount</Label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      $
                    </span>
                    <Input
                      type="number"
                      placeholder="Enter amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setAmount("custom");
                      }}
                      className="pl-7"
                      min="1"
                    />
                  </div>
                </div>
              </div>

              {/* Impact Preview */}
              <Card className="bg-gradient-subtle border-none">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    Your Impact
                  </h3>
                  <p className="text-muted-foreground">
                    {amount === "custom" && customAmount
                      ? `Your generous donation of $${customAmount} will provide ${Math.floor(
                          parseFloat(customAmount) / 20
                        )} care packages to Alzheimer's patients.`
                      : amount !== "custom"
                      ? donationTiers.find((t) => t.amount === amount)?.description
                      : "Enter an amount to see your impact"}
                  </p>
                </CardContent>
              </Card>

              {/* Donate Button */}
              <Button
                variant="hero"
                size="lg"
                className="w-full text-lg"
                onClick={handleDonate}
              >
                <Heart className="mr-2 h-5 w-5" />
                Donate {amount === "custom" && customAmount ? `$${customAmount}` : `$${amount}`}
                {donationType === "monthly" && " Monthly"}
              </Button>

              <p className="text-sm text-center text-muted-foreground">
                AllForAlzheimer's is a 501(c)(3) nonprofit. Your donation is tax-deductible.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;
