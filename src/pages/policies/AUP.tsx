import { Shield, AlertTriangle, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Link } from "react-router-dom";

const AUP = () => {
  const prohibitedActivities = [
    "Unauthorized access attempts to any system or network",
    "Hosting, distributing, or transmitting malware, viruses, or harmful software",
    "Hosting phishing websites or content designed to steal personal information",
    "Sending unsolicited bulk emails (spam) or promotional material",
    "Any activity that violates applicable local, national, or international laws",
    "Content that infringes on intellectual property rights",
    "Hosting illegal file sharing or piracy content",
    "Any activity that degrades network performance for other users"
  ];

  const enforcementActions = [
    "Warning and request for immediate compliance",
    "Temporary suspension of service",
    "Permanent termination of service",
    "Legal action if required by law or regulation"
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/terms" className="hover:text-primary transition-colors">Terms & Policies</Link>
            <span>/</span>
            <span className="text-foreground">Acceptable Use Policy</span>
          </nav>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6 glow-effect">
            <Shield className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Acceptable Use Policy</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Guidelines for appropriate use of AceNodes services
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Purpose */}
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">Purpose</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                This Acceptable Use Policy (AUP) outlines the acceptable use of AceNodes hosting services. 
                All customers must comply with this policy to ensure the security, reliability, and legal 
                compliance of our services. Customers must not use our services to host, distribute, or 
                engage in any illegal content, spam, or harmful activities.
              </p>
            </CardContent>
          </Card>

          {/* Prohibited Activities */}
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">Prohibited Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <Alert className="mb-6 border-destructive/20 bg-destructive/5">
                <AlertTriangle className="h-4 w-4 text-destructive" />
                <AlertDescription className="text-foreground">
                  The following activities are strictly prohibited when using AceNodes services:
                </AlertDescription>
              </Alert>
              
              <ul className="space-y-3">
                {prohibitedActivities.map((activity, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{activity}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Enforcement */}
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">Enforcement</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Violations of this Acceptable Use Policy may result in immediate action to protect 
                our infrastructure and other customers. Enforcement actions may include:
              </p>
              
              <ul className="space-y-3 mb-6">
                {enforcementActions.map((action, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary text-sm font-medium">{index + 1}</span>
                    </div>
                    <span className="text-muted-foreground">{action}</span>
                  </li>
                ))}
              </ul>

              <Alert className="border-primary/20 bg-primary/5">
                <FileText className="h-4 w-4 text-primary" />
                <AlertDescription className="text-foreground">
                  <strong>Investigation Process:</strong> All reported violations are investigated thoroughly. 
                  Customers will be contacted during the investigation process and given an opportunity 
                  to respond to allegations before final action is taken.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Reporting */}
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">Reporting Violations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                If you believe someone is violating this Acceptable Use Policy, please report it 
                immediately through our abuse reporting system. Include as much detail as possible 
                to help us investigate quickly and effectively.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://deploy.acenodes.co.uk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300"
                >
                  Report Through Dashboard
                </a>
                <Link 
                  to="/terms/dmca"
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors duration-300"
                >
                  DMCA & Abuse Policy
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Policy Updates */}
          <Card className="card-shadow bg-gradient-to-r from-accent/5 to-primary/5 border-accent/20">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold gradient-text mb-3">
                Policy Updates
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                This Acceptable Use Policy may be updated from time to time to reflect changes in 
                our services, legal requirements, or industry standards. Customers will be notified 
                of significant changes through their dashboard or email.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-border">
          <Link 
            to="/terms"
            className="text-primary hover:text-primary/80 transition-colors duration-300"
          >
            ← Back to Terms & Policies
          </Link>
          <div className="text-sm text-muted-foreground">
            Last updated: December 2024
          </div>
        </div>
      </div>
    </div>
  );
};

export default AUP;