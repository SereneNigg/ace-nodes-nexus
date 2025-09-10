import { MessageCircle, ChevronDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      category: "Service & Uptime",
      questions: [
        {
          question: "What is your uptime guarantee?",
          answer: "We provide a 99.9% uptime guarantee for all our hosting services. This is backed by our Service Level Agreement (SLA) and robust infrastructure monitoring."
        },
        {
          question: "Where are your servers located?",
          answer: "Our hosting machines are currently located in the UK. We have plans for global expansion to provide better latency for players worldwide."
        },
        {
          question: "What happens if my server goes down?",
          answer: "Our monitoring systems detect issues immediately and our technical team works to resolve problems as quickly as possible. Any downtime that affects our SLA commitment may be eligible for service credits."
        }
      ]
    },
    {
      category: "Billing & Setup",
      questions: [
        {
          question: "Do you charge for server setup?",
          answer: "No, we provide free server setup and configuration for all supported games. There are no hidden setup fees or installation charges."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards, PayPal, and other secure payment methods. Billing details can be managed through your dashboard."
        },
        {
          question: "Can I get a refund if I'm not satisfied?",
          answer: "Yes, we offer refunds in accordance with our refund policy outlined in our Terms & Policies. Contact our support team to discuss your specific situation."
        }
      ]
    },
    {
      category: "Game Server Support",
      questions: [
        {
          question: "Which games do you support?",
          answer: "We support a wide variety of popular games including Minecraft, ARK, Rust, CS2, and many others. Contact our support team if you have questions about a specific game."
        },
        {
          question: "Can I install custom mods or plugins?",
          answer: "Yes, you have full control over your game server and can install mods, plugins, and custom configurations as needed for your specific game."
        },
        {
          question: "How do I access my server files?",
          answer: "You can access your server files through our control panel at panel.acenodes.co.uk, which provides FTP access and a web-based file manager."
        }
      ]
    },
    {
      category: "Support & Contact",
      questions: [
        {
          question: "How can I contact support?",
          answer: "Our support team is available 24/7 through the support system in your dashboard. You can also reach us through our contact page for non-urgent inquiries."
        },
        {
          question: "What is your support response time?",
          answer: "Critical issues receive a response within 1 hour, while non-critical issues are typically addressed within 24 hours. Our team works around the clock to assist you."
        },
        {
          question: "Do you offer Discord support?",
          answer: "Yes, we have a Discord server for community support, announcements, and direct interaction with our team and other users. Join us at discord.acenodes.co.uk for real-time assistance and community discussions."
        }
      ]
    },
    {
      category: "Technical Questions",
      questions: [
        {
          question: "Can I upgrade my server resources?",
          answer: "Yes, you can upgrade your server's CPU, RAM, and storage at any time through your dashboard. Upgrades typically take effect immediately."
        },
        {
          question: "Do you provide DDoS protection?",
          answer: "Yes, all our servers include DDoS protection to keep your game servers online and accessible to your players."
        },
        {
          question: "Can I have multiple game servers?",
          answer: "Absolutely! You can deploy and manage multiple game servers from your dashboard, each with its own configuration and settings."
        }
      ]
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
            <span className="gradient-text">Frequently Asked Questions</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about AceNodes hosting services, billing, support, and technical information.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="card-shadow border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl gradient-text">
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 100 + faqIndex; // Unique index
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <Collapsible key={faqIndex} open={isOpen} onOpenChange={() => toggleItem(globalIndex)}>
                      <CollapsibleTrigger className="w-full">
                        <div className="flex items-center justify-between p-4 bg-secondary/30 hover:bg-secondary/50 rounded-lg transition-all duration-300 text-left">
                          <h3 className="text-lg font-semibold text-foreground">
                            {faq.question}
                          </h3>
                          <ChevronDown 
                            className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                              isOpen ? 'rotate-180' : ''
                            }`} 
                          />
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="px-4 py-4">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </CollapsibleContent>
                    </Collapsible>
                  );
                })}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <Card className="card-shadow mt-12 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 gradient-text">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our 24/7 support team is ready to help with any questions not covered in this FAQ. 
              Get personalized assistance through your dashboard or contact us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://deploy.acenodes.co.uk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300"
              >
                Access Dashboard Support
              </a>
              <a 
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors duration-300"
              >
                Contact Information
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FAQ;