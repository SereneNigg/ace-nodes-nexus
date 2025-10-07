import { Server, Clock, Shield, Zap, ExternalLink, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  const features = [
    {
      icon: Server,
      title: "UK-Based Hosting",
      description: "Premium hosting machines currently located in the UK, with expansion planned globally.",
      highlight: "Current Location: UK"
    },
    {
      icon: Clock,
      title: "99.9% Uptime Guarantee",
      description: "Reliable infrastructure ensuring your game servers stay online when you need them most.",
      highlight: "99.9% SLA"
    },
    {
      icon: Shield,
      title: "24/7 Availability",
      description: "Game servers and customer support available around the clock, every day of the year.",
      highlight: "24/7 Support"
    },
    {
      icon: Zap,
      title: "Free Setup",
      description: "Free server setup and configuration for supported games - get started without hidden costs.",
      highlight: "Zero Setup Fees"
    }
  ];

  const quickLinks = [
    {
      title: "Deploy Dashboard",
      description: "Manage your deployments and server configurations",
      url: "https://deploy.acenodes.co.uk",
      variant: "primary" as const
    },
    {
      title: "Control Panel",
      description: "Access your server control panel and monitoring tools",
      url: "https://panel.acenodes.co.uk",
      variant: "secondary" as const
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative section-padding overflow-hidden">
        {/* Refined Background Effects */}
        <div className="absolute inset-0 gradient-subtle opacity-40"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[32rem] h-[32rem] bg-accent/6 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>

        <div className="relative max-w-7xl mx-auto container-padding">
          <div className="text-center space-y-8">
            {/* Brand & Tagline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight">
                <span className="gradient-text">AceNodes</span>
              </h1>
              <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground/90">
                Game Server Hosting
              </p>
            </div>
            
            {/* Value Proposition */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Professional game server hosting with guaranteed uptime, 24/7 support, and enterprise-grade infrastructure built for performance.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              {quickLinks.map((link) => (
                <Button
                  key={link.title}
                  variant={link.variant}
                  size="lg"
                  asChild
                  className={link.variant === "primary" ? "glow-effect hover:scale-105 transition-transform duration-300" : "hover:scale-105 transition-transform duration-300"}
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <span>{link.title}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              ))}
            </div>

            {/* Trust Badge */}
            <div className="pt-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border/50">
                <CheckCircle className="w-4 h-4 text-gaming-green" />
                <span className="text-sm text-muted-foreground">Information Hub & Resources</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding relative bg-card/30">
        <div className="max-w-7xl mx-auto container-padding">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="gradient-text">Why Choose AceNodes?</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Designed for gamers, built for performance, backed by professional support.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="card-elevated hover:card-shadow hover:glow-effect transition-all duration-500 group border-border/50 hover:border-primary/30 hover:scale-105"
              >
                <CardContent className="p-8 text-center space-y-4">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto group-hover:animate-pulse-glow transition-all duration-300 shadow-lg">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {feature.description}
                  </p>
                  
                  {/* Badge */}
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold">
                    {feature.highlight}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="section-padding gradient-subtle">
        <div className="max-w-7xl mx-auto container-padding">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="gradient-text">Quick Access</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Direct links to your AceNodes services and management tools.
            </p>
          </div>

          {/* Quick Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {quickLinks.map((link) => (
              <Card 
                key={link.title} 
                className="card-elevated hover:card-shadow hover:glow-effect transition-all duration-500 group hover:scale-105 border-border/50 hover:border-primary/30"
              >
                <CardContent className="p-8 space-y-6">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="space-y-2 flex-1">
                      <h3 className="text-2xl font-bold text-foreground group-hover:gradient-text transition-all duration-300">
                        {link.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {link.description}
                      </p>
                    </div>
                    <ExternalLink className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300 flex-shrink-0 ml-4" />
                  </div>
                  
                  {/* CTA Button */}
                  <Button 
                    variant={link.variant}
                    size="lg"
                    className="w-full font-semibold"
                    asChild
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      Access {link.title}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Information Hub CTA */}
      <section className="section-padding bg-card/30">
        <div className="max-w-5xl mx-auto container-padding">
          {/* Content Container */}
          <div className="text-center space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                <span className="gradient-text">Need More Information?</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                This information hub contains everything you need to know about AceNodes services, policies, and support resources.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                variant="outline" 
                size="lg" 
                className="hover:border-primary/50 hover:bg-primary/5 transition-all duration-300" 
                asChild
              >
                <a href="/faq" className="font-semibold">Browse FAQ</a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="hover:border-primary/50 hover:bg-primary/5 transition-all duration-300" 
                asChild
              >
                <a href="/terms" className="font-semibold">View Policies</a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="hover:border-primary/50 hover:bg-primary/5 transition-all duration-300" 
                asChild
              >
                <a href="/contact" className="font-semibold">Get Support</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;