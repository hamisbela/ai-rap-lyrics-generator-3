import { Link } from 'react-router-dom';
import { Coffee } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block hover:text-neutral-300">Home</Link>
              <Link to="/about" className="block hover:text-neutral-300">About</Link>
              <Link to="/contact" className="block hover:text-neutral-300">Contact</Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Connect</h3>
            <p className="text-sm text-neutral-300">
              Stay updated with our latest AI rap generation tools and features.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Support Us</h3>
            <p className="text-sm text-neutral-300 mb-3">
              Help us keep our AI rap tools free and accessible.
            </p>
            <a
              href="https://roihacks.gumroad.com/coffee"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white border-0"
              >
                <Coffee className="h-4 w-4" />
                <span>Buy us a Coffee</span>
              </Button>
            </a>
          </div>
          <div>
            <h3 className="font-semibold mb-3">About</h3>
            <p className="text-sm text-neutral-300">
              AI-powered rap lyrics generation to help you create professional rap verses and hooks.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-neutral-700 text-center text-sm text-neutral-400">
          © {new Date().getFullYear()} AI Rap Generator. All rights reserved.
        </div>
      </div>
    </footer>
  );
}