import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Mic2, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text">
            Contact Our Team 🎤
          </h1>
          <p className="text-xl text-gray-600">
            Questions about our AI rap generator? We're here to help your creative process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="gradient-border">
              <Card className="p-8 space-y-4">
                <Mail className="h-8 w-8 text-blue-500" />
                <h3 className="text-xl font-semibold">Email Us 📧</h3>
                <p className="text-gray-600">lyrics@airapgenerator.com</p>
                <p className="text-sm text-gray-500">We typically respond within 24 hours</p>
              </Card>
            </div>

            <div className="gradient-border">
              <Card className="p-8 space-y-4">
                <Mic2 className="h-8 w-8 text-blue-500" />
                <h3 className="text-xl font-semibold">Artist Support 🎤</h3>
                <p className="text-gray-600">Get help with lyrics generation and rap styles</p>
                <p className="text-sm text-gray-500">Our hip-hop experts are ready to assist</p>
              </Card>
            </div>

            <div className="gradient-border">
              <Card className="p-8 space-y-4">
                <MessageSquare className="h-8 w-8 text-blue-500" />
                <h3 className="text-xl font-semibold">Feedback Welcome 💭</h3>
                <p className="text-gray-600">Share your experience with our rap generator</p>
                <p className="text-sm text-gray-500">Help us improve our AI tools</p>
              </Card>
            </div>
          </div>

          <div className="gradient-border">
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name 🎤
                  </label>
                  <Input 
                    id="name" 
                    required 
                    placeholder="Enter your name"
                    className="h-12 border-2 focus:border-blue-400" 
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address 📧
                  </label>
                  <Input 
                    type="email" 
                    id="email" 
                    required 
                    placeholder="your@email.com"
                    className="h-12 border-2 focus:border-blue-400" 
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject 🎵
                  </label>
                  <Input 
                    id="subject" 
                    required 
                    placeholder="What's your message about?"
                    className="h-12 border-2 focus:border-blue-400" 
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message 🎤
                  </label>
                  <Textarea 
                    id="message" 
                    required 
                    className="min-h-[150px] border-2 focus:border-blue-400"
                    placeholder="Share your thoughts, questions, or feedback about our AI rap generator..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 text-lg bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message 🎤
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}