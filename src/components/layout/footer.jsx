// src/components/layout/footer.jsx
import Link from 'next/link';
import { Instagram, Facebook, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-50 border-t">
      

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">ArtsyDeepika</h4>
            <p className="text-neutral-600 text-sm">
              Handcrafted scented candles inspired by tradition and culture. 
              Each piece is uniquely designed to bring warmth and elegance to your space.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-neutral-600 hover:text-neutral-900 text-sm">
                  Our Candles
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-600 hover:text-neutral-900 text-sm">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-neutral-600 text-sm">
                <Mail className="h-4 w-4 mr-2" />
                artsydeepikacandles@gmail.com
              </li>
              <li className="flex items-center text-neutral-600 text-sm">
                <MapPin className="h-4 w-4 mr-2" />
                Hyderabad, India
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/artsydeepika/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-neutral-900 text-neutral-600"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.facebook.com/MyThinkingWindow" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-neutral-900 text-neutral-600"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-neutral-600">
              Follow us for updates and behind-the-scenes content
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      {/* <div className="border-t">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-600">
              © {currentYear}ArtsyDeepika. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-sm text-neutral-600 hover:text-neutral-900">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-neutral-600 hover:text-neutral-900">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;