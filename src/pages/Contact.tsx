import { MessageCircle, Clock, Shield, ExternalLink, Mail, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Contact = () => {
  const supportChannels = [
    {
      title: "Dashboard Support System",
      description: "Access our ticketing system and live chat directly through your account dashboard.",
      icon: Shield,
      href: "https://deploy.acenodes.co.uk",
      availability: "24/7 Available",
      recommended: true,
      details: "Best for account-specific issues, billing questions, and technical support."
    },
    {
      title: "Control Panel Support",
      description: "Technical support and assistance available through the server control panel.",
      icon: MessageCircle,
      href: "https://panel.acenodes.co.uk",
      availability: "24/7 Available",
      recommended: false,
      details: "Ideal for server management questions and technical configurations."
    },
    {
      title: "Discord Support",
      description: "Join our Discord community for real-time support and to connect with other users.",
      icon: MessageCircle,
      href: "https://discord.acenodes.co.uk",
      availability: "Community-Based",
      recommended: false,
      details: "Perfect for quick questions, community help, and staying updated with announcements."
    }
  ];

  const responseInfo = [
    {
      type: "Critical Issues",
      time: "< 1 Hour Response",
      description: "Server outages, security incidents, or service-affecting problems",
      icon: AlertCircle,
      color: "text-red-400"
    },
    {
      type: "General Support",
      time: "< 24 Hours Response",
      description: "Account questions, billing inquiries, and general assistance",
      icon: Clock,
      color: "text-blue-400"
    },
    {
      type: "Non-Critical",
      time: "< 48 Hours Response",
      description: "Feature requests, general questions, and informational inquiries",
      icon: Mail,
      color: "text-green-400"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6 glow-effect">
            <MessageCircle className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Contact Support</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our support team is available 24/7 to help with any questions or issues you may have. 
            Choose the best contact method for your needs.
          </p>
        </div>

        {/* Alert */}
        <Alert className="mb-8 border-primary/20 bg-primary/5">
          <Shield className="h-4 w-4 text-primary" />
          <AlertDescription className="text-foreground">
            <strong>24/7 Support Guarantee:</strong> Our support team is available around the clock, 
            every day of the year. Critical issues receive priority response within 1 hour.
          </AlertDescription>
        </Alert>

        {/* Support Channels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {supportChannels.map((channel, index) => (
            <Card 
              key={index} 
              className={`card-shadow hover:glow-effect transition-all duration-500 group border-border/50 hover:border-primary/50 ${
                channel.recommended ? 'ring-2 ring-primary/20' : ''
              }`}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300">
                    <channel.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  {channel.recommended && (
                    <div className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full">
                      Recommended
                    </div>
                  )}
                </div>
                <CardTitle className="text-xl group-hover:gradient-text transition-all duration-300">
                  {channel.title}
                </CardTitle>
                <div className="text-sm text-gaming-green font-medium">
                  {channel.availability}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {channel.description}
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  {channel.details}
                </p>
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300"
                >
                  <span>Access {channel.title.split(' ')[0]}</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Response Times */}
        <Card className="card-shadow mb-8">
          <CardHeader>
            <CardTitle className="text-2xl gradient-text text-center">
              Support Response Times
            </CardTitle>
            <p className="text-center text-muted-foreground">
              Our commitment to timely support based on issue priority
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {responseInfo.map((info, index) => (
                <div key={index} className="text-center p-6 bg-secondary/30 rounded-lg">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <info.icon className={`w-6 h-6 ${info.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {info.type}
                  </h3>
                  <div className="text-primary font-medium mb-2">
                    {info.time}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {info.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* FAQ CTA */}
        <Card className="card-shadow bg-gradient-to-r from-accent/5 to-primary/5 border-accent/20">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 gradient-text">
              Check Our FAQ First
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Many common questions are answered in our comprehensive FAQ section. 
              You might find the information you need without waiting for a support response.
            </p>
            <a 
              href="/faq"
              className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors duration-300"
            >
              Browse FAQ
            </a>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="text-center mt-8 text-sm text-muted-foreground">
          <p>
            Support is provided in English. Response times may vary during high traffic periods, 
            but we always strive to exceed our commitments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;