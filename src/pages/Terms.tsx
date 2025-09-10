import { FileText, ExternalLink, Shield, Cookie, Database, AlertTriangle, Lock, FileCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Terms = () => {
  const policies = [
    {
      title: "Acceptable Use Policy",
      description: "Guidelines for appropriate use of AceNodes services and prohibited activities.",
      icon: Shield,
      href: "/terms/aup",
      color: "text-blue-400"
    },
    {
      title: "Cookie Policy",
      description: "Information about cookies used on our website and how to manage them.",
      icon: Cookie,
      href: "/terms/cookies",
      color: "text-green-400"
    },
    {
      title: "Data Retention & Deletion Policy",
      description: "How we handle, retain, and delete customer data and backups.",
      icon: Database,
      href: "/terms/data-retention",
      color: "text-purple-400"
    },
    {
      title: "DMCA & Abuse Reporting Policy",
      description: "Procedures for reporting copyright infringement and abuse complaints.",
      icon: AlertTriangle,
      href: "/terms/dmca",
      color: "text-orange-400"
    },
    {
      title: "Security Policy",
      description: "Technical and organizational measures we maintain to protect data.",
      icon: Lock,
      href: "/terms/security",
      color: "text-red-400"
    },
    {
      title: "Service Level Agreement (SLA)",
      description: "Our uptime guarantees, support response times, and service commitments.",
      icon: FileCheck,
      href: "/terms/sla",
      color: "text-cyan-400"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6 glow-effect">
            <FileText className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Terms & Policies</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Welcome to AceNodes' Terms & Policies hub. Below you will find all the documents outlining our rules, 
            policies, and commitments regarding our hosting services.
          </p>
        </div>

        {/* Policies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {policies.map((policy, index) => (
            <Card 
              key={index} 
              className="card-shadow hover:glow-effect transition-all duration-500 group border-border/50 hover:border-primary/50"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                  <policy.icon className={`w-6 h-6 ${policy.color} group-hover:text-primary transition-colors duration-300`} />
                </div>
                <CardTitle className="text-xl group-hover:gradient-text transition-all duration-300">
                  {policy.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {policy.description}
                </p>
                <Link
                  to={policy.href}
                  className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 font-medium transition-colors duration-300"
                >
                  <span>Read Policy</span>
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Important Notice */}
        <Card className="card-shadow bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <CardContent className="p-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 gradient-text">
                  Important Notice
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    By using AceNodes services, you agree to comply with all applicable policies and terms outlined in this section. 
                    These documents are regularly updated to reflect changes in our services and legal requirements.
                  </p>
                  <p>
                    We recommend reviewing these policies periodically, especially when significant updates are made to our services. 
                    You will be notified of major policy changes through your dashboard or email.
                  </p>
                  <p>
                    If you have questions about any of these policies or need clarification on specific terms, 
                    please contact our support team through your dashboard.
                  </p>
                </div>
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://deploy.acenodes.co.uk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300"
                  >
                    <span>Access Dashboard</span>
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                  <Link 
                    to="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors duration-300"
                  >
                    Contact Support
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Last Updated */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Policies last updated: December 2024 • 
            <Link to="/contact" className="text-primary hover:text-primary/80 ml-1">
              Contact us for questions
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;