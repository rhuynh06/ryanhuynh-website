import { Card, CardContent } from "../components/ui/card";
import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "../components/ui/button";

export function ContactInfo() {
  return (
    <Card className="max-w-md mx-auto">
      <CardContent className="p-6 space-y-4">
        <h2 className="text-xl font-semibold text-center">Get in Touch</h2>

        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-muted-foreground" />
          <a href="mailto:ryanhuynh200604@gmail.com" className="text-sm underline hover:text-primary">
            ryanhuynh200604@gmail.com
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Github className="w-5 h-5 text-muted-foreground" />
          <a href="https://github.com/rhuynh06" target="_blank" className="text-sm underline hover:text-primary">
            @rhuynh06
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Linkedin className="w-5 h-5 text-muted-foreground" />
          <a href="https://www.linkedin.com/in/ryan-huynh-937916248/" target="_blank" className="text-sm underline hover:text-primary">
            https://www.linkedin.com/in/ryan-huynh-937916248/
          </a>
        </div>

        <div className="pt-4">
          <Button variant="outline" className="w-full" asChild>
            <a href="mailto:ryanhuynh200604@gmail.com">Email Me</a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
