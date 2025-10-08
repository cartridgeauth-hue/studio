import Link from 'next/link';
import Logo from '@/components/shared/Logo';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border/40">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-muted-foreground text-sm">
              Expert consultations for your financial and legal needs.
            </p>
          </div>
          <div>
            <h3 className="font-headline font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/#services" className="text-muted-foreground hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-accent transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">EPFO Queries</li>
              <li className="text-muted-foreground">ESIC Queries</li>
              <li className="text-muted-foreground">eStamps</li>
              <li className="text-muted-foreground">Income Tax</li>
              <li className="text-muted-foreground">GST Queries</li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-accent transition-colors"><Twitter size={20} /></Link>
              <Link href="#" className="text-muted-foreground hover:text-accent transition-colors"><Facebook size={20} /></Link>
              <Link href="#" className="text-muted-foreground hover:text-accent transition-colors"><Linkedin size={20} /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border/40 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} theledgerco.in. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
