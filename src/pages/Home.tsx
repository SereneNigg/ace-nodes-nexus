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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-accent opacity-5"></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">AceNodes</span>
              <br />
              <span className="text-foreground">Game Server Hosting</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional game server hosting with guaranteed uptime, 24/7 support, and enterprise-grade infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              {quickLinks.map((link) => (
                <Button
                  key={link.title}
                  variant={link.variant}
                  size="lg"
                  asChild
                  className={link.variant === "primary" ? "glow-effect hover:accent-glow" : ""}
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                    <span>{link.title}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              ))}
            </div>

            <div className="text-sm text-muted-foreground">
              <span className="inline-flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-gaming-green" />
                <span>Misc Information Hub</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Why Choose AceNodes?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Designed for gamers, built for performance, backed by professional support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="card-shadow hover:glow-effect transition-all duration-500 group border-border/50 hover:border-primary/50"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {feature.highlight}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Quick Access</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Direct links to your AceNodes services and information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {quickLinks.map((link) => (
              <Card key={link.title} className="card-shadow hover:glow-effect transition-all duration-500 group">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2 text-foreground group-hover:gradient-text transition-all duration-300">
                        {link.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {link.description}
                      </p>
                    </div>
                    <ExternalLink className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </div>
                  
                  <Button 
                    variant={link.variant}
                    className="w-full mt-4"
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
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Need More Information?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            This miscellaneous information hub contains everything you need to know about AceNodes services, policies, and support.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" asChild>
              <a href="/faq">Browse FAQ</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/terms">View Policies</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/contact">Get Support</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;