import { Database, Clock, Trash2, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Link } from "react-router-dom";

const DataRetention = () => {
  const retentionPeriods = [
    {
      type: "Active Account Data",
      period: "During active subscription",
      description: "Customer data, server configurations, and files are retained while your account remains active.",
      icon: Database
    },
    {
      type: "Account Termination",
      period: "30 days",
      description: "After account closure, data is securely deleted within 30 days unless legally required to retain.",
      icon: Trash2
    },
    {
      type: "Backup Retention",
      period: "14 days",
      description: "Backups are maintained for up to 14 days and then permanently erased from all systems.",
      icon: Clock
    },
    {
      type: "Legal Compliance",
      period: "As required by law",
      description: "Some data may be retained longer if required by legal obligations or ongoing investigations.",
      icon: Shield
    }
  ];

  const deletionProcess = [
    "Account closure request received and verified",
    "Data marked for deletion in our systems",
    "Secure deletion from primary storage within 7 days",
    "Backup systems purged within 30 days",
    "Confirmation of complete data removal"
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/terms" className="hover:text-primary transition-colors">Terms & Policies</Link>
            <span>/</span>
            <span className="text-foreground">Data Retention & Deletion Policy</span>
          </nav>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6 glow-effect">
            <Database className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Data Retention & Deletion Policy</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            How we handle, retain, and delete customer data and backups
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Overview */}
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This policy explains how AceNodes handles the retention and deletion of customer data. 
                We are committed to protecting your privacy and ensuring that your data is handled 
                responsibly throughout its lifecycle.
              </p>
              <Alert className="border-primary/20 bg-primary/5">
                <Database className="h-4 w-4 text-primary" />
                <AlertDescription className="text-foreground">
                  We retain customer data only as long as necessary to provide our services and comply 
                  with legal obligations. Data deletion is performed securely and completely.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Retention Periods */}
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">Data Retention Periods</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {retentionPeriods.map((item, index) => (
                  <div key={index} className="p-6 bg-secondary/30 rounded-lg">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{item.type}</h3>
                        <div className="text-sm text-primary font-medium">{item.period}</div>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Deletion Process */}
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">Data Deletion Process</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-6">
                When you close your account or request data deletion, we follow a comprehensive 
                process to ensure your data is completely and securely removed from our systems:
              </p>
              
              <div className="space-y-4">
                {deletionProcess.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-foreground text-sm font-medium">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-muted-foreground">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Backup Policy */}
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">Backup Data Handling</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Backup Creation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We create regular backups of customer data to ensure service reliability and 
                    disaster recovery capabilities. These backups are encrypted and stored securely.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Backup Retention</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Backups are automatically deleted after 14 days. This ensures we can recover 
                    from recent issues while minimizing long-term data storage.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Backup Deletion</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    When data deletion is requested, backups containing your data are identified 
                    and securely purged from all backup systems within our retention timeline.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Legal Requirements */}
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">Legal and Compliance Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <Alert className="mb-6 border-warning-orange/20 bg-warning-orange/5">
                <Shield className="h-4 w-4 text-warning-orange" />
                <AlertDescription className="text-foreground">
                  <strong>Legal Obligations:</strong> In some cases, we may be required by law to retain 
                  certain data for longer periods, such as for tax purposes, legal proceedings, or 
                  regulatory compliance.
                </AlertDescription>
              </Alert>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">When Extended Retention May Apply:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Active legal proceedings or investigations</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Regulatory compliance requirements</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Tax and financial record obligations</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Security incident investigations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Access Requests */}
          <Card className="card-shadow bg-gradient-to-r from-accent/5 to-primary/5 border-accent/20">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold gradient-text mb-3">
                Data Access and Deletion Requests
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have the right to request access to your data or request its deletion. 
                Contact our support team through your dashboard to initiate these requests.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://deploy.acenodes.co.uk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300"
                >
                  Access Dashboard
                </a>
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors duration-300"
                >
                  Contact Support
                </Link>
              </div>
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

export default DataRetention;