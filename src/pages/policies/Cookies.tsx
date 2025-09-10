import { Cookie, Settings, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Link } from "react-router-dom";

const Cookies = () => {
  const cookieTypes = [
    {
      name: "Essential Cookies",
      description: "Required for basic website functionality and security. These cannot be disabled.",
      examples: ["Session management", "Security features", "Load balancing"],
      required: true
    },
    {
      name: "Analytics Cookies",
      description: "Help us understand how visitors interact with our website to improve performance.",
      examples: ["Page views", "User behavior", "Performance metrics"],
      required: false
    },
    {
      name: "Preference Cookies",
      description: "Remember your settings and preferences for a personalized experience.",
      examples: ["Language settings", "Theme preferences", "Dashboard layout"],
      required: false
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/terms" className="hover:text-primary transition-colors">Terms & Policies</Link>
            <span>/</span>
            <span className="text-foreground">Cookie Policy</span>
          </nav>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6 glow-effect">
            <Cookie className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Cookie Policy</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            How we use cookies to enhance your experience
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">What Are Cookies?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better browsing experience by remembering your preferences 
                and improving site functionality.
              </p>
              <Alert className="border-primary/20 bg-primary/5">
                <FileText className="h-4 w-4 text-primary" />
                <AlertDescription className="text-foreground">
                  By using our website, you agree to our cookie usage as described in this policy. 
                  You can manage cookie preferences through your browser settings at any time.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Cookie Types */}
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">Types of Cookies We Use</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {cookieTypes.map((type, index) => (
                  <div key={index} className="p-6 bg-secondary/30 rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-foreground">
                        {type.name}
                      </h3>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        type.required 
                          ? 'bg-gaming-green/10 text-gaming-green' 
                          : 'bg-accent/10 text-accent'
                      }`}>
                        {type.required ? 'Required' : 'Optional'}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {type.description}
                    </p>
                    
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Examples:</h4>
                      <ul className="space-y-1">
                        {type.examples.map((example, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Managing Cookies */}
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">Managing Cookies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Browser Settings</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    You can control and manage cookies through your browser settings. Most browsers 
                    allow you to block or delete cookies, though this may affect website functionality.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-secondary/20 rounded-lg">
                      <h4 className="font-medium text-foreground mb-2">Chrome</h4>
                      <p className="text-sm text-muted-foreground">
                        Settings → Privacy and Security → Cookies and other site data
                      </p>
                    </div>
                    <div className="p-4 bg-secondary/20 rounded-lg">
                      <h4 className="font-medium text-foreground mb-2">Firefox</h4>
                      <p className="text-sm text-muted-foreground">
                        Options → Privacy & Security → Cookies and Site Data
                      </p>
                    </div>
                    <div className="p-4 bg-secondary/20 rounded-lg">
                      <h4 className="font-medium text-foreground mb-2">Safari</h4>
                      <p className="text-sm text-muted-foreground">
                        Preferences → Privacy → Manage Website Data
                      </p>
                    </div>
                    <div className="p-4 bg-secondary/20 rounded-lg">
                      <h4 className="font-medium text-foreground mb-2">Edge</h4>
                      <p className="text-sm text-muted-foreground">
                        Settings → Cookies and site permissions → Cookies
                      </p>
                    </div>
                  </div>
                </div>

                <Alert className="border-warning-orange/20 bg-warning-orange/5">
                  <Settings className="h-4 w-4 text-warning-orange" />
                  <AlertDescription className="text-foreground">
                    <strong>Important:</strong> Disabling certain cookies may affect website functionality, 
                    including login sessions, preferences, and some dashboard features.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>

          {/* Third-Party Cookies */}
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">Third-Party Services</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may use third-party services that set their own cookies to provide functionality 
                such as analytics, support systems, or payment processing. These services have their 
                own cookie policies:
              </p>
              
              <ul className="space-y-2">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-muted-foreground">Analytics providers for website performance tracking</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-muted-foreground">Support and chat systems for customer assistance</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-muted-foreground">Payment processors for secure transaction handling</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="card-shadow bg-gradient-to-r from-accent/5 to-primary/5 border-accent/20">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold gradient-text mb-3">
                Questions About Cookies?
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have questions about our cookie policy or need assistance with cookie settings, 
                please contact our support team through your dashboard.
              </p>
              <a 
                href="https://deploy.acenodes.co.uk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300"
              >
                Contact Support
              </a>
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

export default Cookies;