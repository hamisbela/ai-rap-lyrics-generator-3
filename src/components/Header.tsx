import { Link } from 'react-router-dom';
import { Mic2, Coffee } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="border-b border-neutral-200">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-neutral-800">
            <Mic2 className="h-6 w-6" />
            <span>AI Rap Generator</span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link to="/" className="hover:text-neutral-600">Home</Link>
            <Link to="/about" className="hover:text-neutral-600">About</Link>
            <Link to="/contact" className="hover:text-neutral-600">Contact</Link>
            <a
              href="https://roihacks.gumroad.com/coffee"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="sm" className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white">
                <Coffee className="h-4 w-4" />
                <span>Buy us a Coffee</span>
              </Button>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}