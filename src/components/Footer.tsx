import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    { name: "About", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Projects", href: "projects" },
    { name: "Experience", href: "experience" },
    { name: "Contact", href: "contact" }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/iamdokoye"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/dokoye"
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:iamdokoye@gmail.com"
    }
  ];

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Branding */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gradient-primary">
              Daniel Okoye
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              DevSecOps Engineer & Backend Developer passionate about building secure, 
              automated, and scalable systems that power the future of technology.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <Badge variant="secondary" className="text-xs">
                Available for opportunities
              </Badge>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Navigation</h4>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left text-sm"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Connect With Me</h4>
            <div className="flex flex-col space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                >
                  <social.icon className="h-4 w-4" />
                  {social.name}
                </a>
              ))}
            </div>
            <div className="pt-4">
              <p className="text-xs text-muted-foreground">
                iamdokoye@gmail.com
              </p>
              <p className="text-xs text-muted-foreground">
                +234(0)9152906499
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="border-t border-border/50 pt-8 mb-8">
          <Card className="shadow-medium border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Looking for a DevSecOps Engineer to secure and scale your systems?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I specialize in building secure, scalable infrastructure with automated security 
                practices that protect your applications while enabling rapid development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="flex items-center gap-2"
                  onClick={() => scrollToSection('contact')}
                >
                  <Mail className="h-4 w-4" />
                  Let's Talk
                </Button>
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => scrollToSection('projects')}
                >
                  View My Work
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Daniel Okoye. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground">
              Built with React, TypeScript & Tailwind CSS
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-primary"
            >
              <ArrowUp className="h-4 w-4" />
              Back to top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;