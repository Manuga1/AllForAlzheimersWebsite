import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-image.jpg";
import carePackageImage from "@/assets/care-package.jpg";
import volunteersImage from "@/assets/volunteers.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; category: string } | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const categories = ["all", "events", "care-packages", "community", "stories"];

  const galleryImages = [
    {
      src: volunteersImage,
      title: "Volunteer Packaging Event",
      category: "events",
      description: "Our amazing volunteers assembling care packages",
    },
    {
      src: carePackageImage,
      title: "Care Package Contents",
      category: "care-packages",
      description: "Thoughtfully curated items for comfort and joy",
    },
    {
      src: heroImage,
      title: "Patient Support",
      category: "stories",
      description: "Bringing comfort to those we serve",
    },
    {
      src: volunteersImage,
      title: "Community Gathering",
      category: "community",
      description: "Coming together for a common cause",
    },
    {
      src: carePackageImage,
      title: "Lavender Care Items",
      category: "care-packages",
      description: "Soothing lavender products for relaxation",
    },
    {
      src: heroImage,
      title: "Making Connections",
      category: "stories",
      description: "Meaningful moments with patients",
    },
    {
      src: volunteersImage,
      title: "Fundraising Event",
      category: "events",
      description: "Successful fundraiser with community support",
    },
    {
      src: carePackageImage,
      title: "Puzzle Collection",
      category: "care-packages",
      description: "Engaging activities for cognitive stimulation",
    },
  ];

  const filteredImages = filter === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 gradient-text animate-fade-in">
            Our Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Capturing moments of compassion, community, and care
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={filter === category ? "default" : "outline"}
                className={`cursor-pointer px-6 py-2 text-sm transition-all hover:shadow-md ${
                  filter === category ? "shadow-glow" : ""
                }`}
                onClick={() => setFilter(category)}
              >
                {category.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <Card
                key={index}
                className="group overflow-hidden cursor-pointer hover:shadow-glow transition-all duration-300 animate-scale-in border-none"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-heading font-semibold mb-2">
                        {image.title}
                      </h3>
                      <p className="text-sm opacity-90">{image.description}</p>
                    </div>
                  </div>
                  <Badge className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm">
                    {image.category.replace("-", " ")}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0">
          {selectedImage && (
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto"
              />
              <div className="p-6 bg-background">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-heading font-semibold mb-2">
                      {selectedImage.title}
                    </h2>
                    <Badge className="mb-3">
                      {selectedImage.category.replace("-", " ")}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Gallery;
