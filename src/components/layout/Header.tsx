'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Logo from '@/components/shared/Logo';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();

  const renderNavLinks = (isMobile = false) =>
    navLinks.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className={cn(
          'transition-colors hover:text-accent',
          pathname === link.href ? 'text-accent' : 'text-foreground/80',
          isMobile && 'block py-2 text-lg'
        )}
      >
        {link.label}
      </Link>
    ));

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-12 lg:px-52">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center text-sm font-medium">
          {renderNavLinks()}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" asChild>
            <Link href="/login">Author Login</Link>
          </Button>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
            <Link href="/contact">Book Now</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="p-4">
                <Link href="/" className="mb-8 flex items-center gap-2">
                  <Logo />
                </Link>
                <nav className="flex flex-col gap-4 mb-8">
                  {renderNavLinks(true)}
                </nav>
                <div className="flex flex-col gap-2">
                   <Button variant="outline" asChild>
                        <Link href="/login">Author Login</Link>
                    </Button>
                    <Button className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                        <Link href="/contact">Book Now</Link>
                    </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
