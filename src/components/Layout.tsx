import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Server, Shield, FileText, MessageCircle, Home, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "FAQ", href: "/faq", icon: MessageCircle },
    { name: "Terms & Policies", href: "/terms", icon: FileText },
    { name: "Contact", href: "/contact", icon: Shield },
  ];

  const externalLinks = [
    { name: "Dashboard", href: "https://deploy.acenodes.co.uk", icon: Server },
    { name: "Control Panel", href: "https://panel.acenodes.co.uk", icon: Shield },
  ];

  const isActivePage = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Navigation Header */}
      <nav className="bg-card/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2 group">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <img src="/acenodes-logo.png" alt="AceNodes" className="w-8 h-8 object-contain" />
                </div>
                <span className="text-xl font-bold gradient-text">AceNodes</span>
                <span className="text-sm text-muted-foreground hidden sm:block">misc</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300",
                    isActivePage(item.href)
                      ? "text-primary bg-primary/10 glow-effect"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  )}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
              
              {/* External Links */}
              <div className="flex items-center space-x-2 border-l border-border pl-6">
                {externalLinks.map((link) => (
                  <Button
                    key={link.name}
                    variant="outline"
                    size="sm"
                    asChild
                    className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                      <link.icon className="w-4 h-4" />
                      <span>{link.name}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-muted-foreground hover:text-foreground"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card/95 backdrop-blur-md border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-all duration-300",
                    isActivePage(item.href)
                      ? "text-primary bg-primary/10 glow-effect"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  )}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
              
              <div className="border-t border-border pt-4 mt-4">
                {externalLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <link.icon className="w-4 h-4" />
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-1">
              <Link to="/" className="flex items-center space-x-2 group">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <img src="/acenodes-logo.png" alt="AceNodes" className="w-8 h-8 object-contain" />
                </div>
                <span className="text-xl font-bold gradient-text">AceNodes</span>
              </Link>
              <p className="mt-4 text-sm text-muted-foreground">
                Professional game server hosting with 99.9% uptime guarantee and 24/7 support.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                Information
              </h3>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                Services
              </h3>
              <ul className="space-y-2">
                {externalLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center space-x-1"
                    >
                      <span>{link.name}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                Support
              </h3>
              <p className="text-sm text-muted-foreground">
                24/7 Customer Support
              </p>
              <p className="text-sm text-primary mt-2">
                Available via Dashboard
              </p>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8">
            <p className="text-sm text-muted-foreground text-center">
              © 2024 AceNodes. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;