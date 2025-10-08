import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, FileText, Landmark, MessageSquareQuote } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import ScrollAnimationWrapper from '@/components/shared/ScrollAnimationWrapper';

const services = [
  {
    icon: <Landmark className="w-8 h-8 text-accent" />,
    title: 'EPFO Queries',
    description: 'Expert guidance on employee provident fund matters.',
  },
  {
    icon: <Landmark className="w-8 h-8 text-accent" />,
    title: 'ESIC Queries',
    description: 'Resolving all your ESIC-related questions and concerns.',
  },
  {
    icon: <FileText className="w-8 h-8 text-accent" />,
    title: 'Issuance of eStamps',
    description: 'Quick and easy processing of digital stamp papers.',
  },
  {
    icon: <FileText className="w-8 h-8 text-accent" />,
    title: 'Notarisation of documents',
    description: 'Reliable and official notarisation for all your important documents.',
  },
  {
    icon: <MessageSquareQuote className="w-8 h-8 text-accent" />,
    title: 'Income Tax Queries',
    description: 'Professional advice for your income tax filings and issues.',
  },
  {
    icon: <MessageSquareQuote className="w-8 h-8 text-accent" />,
    title: 'GST Queries',
    description: 'Comprehensive support for all your GST needs.',
  },
];

const featuredPosts = [
  {
    id: '1',
    title: 'Navigating the Labyrinth of GST',
    excerpt: 'A deep dive into the Goods and Services Tax system and how to stay compliant.',
    image: PlaceHolderImages.find(p => p.id === 'blog-1'),
  },
  {
    id: '2',
    title: 'The Future of Digital Stamping',
    excerpt: 'Exploring the shift to eStamps and what it means for legal documentation.',
    image: PlaceHolderImages.find(p => p.id === 'blog-2'),
  },
  {
    id: '3',
    title: 'Maximizing Your EPF Returns',
    excerpt: 'Strategies and tips to make the most out of your employee provident fund.',
    image: PlaceHolderImages.find(p => p.id === 'blog-3'),
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full text-center py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper>
            <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter mb-4">
              Expert Guidance, Simplified.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              theledgerco.in provides seamless access to professional consultations for your financial and legal queries. Book your appointment today and gain clarity.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">Book an Appointment</Link>
            </Button>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-16 md:py-24 bg-accent text-accent-foreground overflow-x-hidden">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper animation={{ y: 50, opacity: 0, scale: 0.95 }}>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
              Our Services
            </h2>
          </ScrollAnimationWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <ScrollAnimationWrapper 
                key={index}
                animation={
                  (index % 2 === 0) ? { x: -100, opacity: 0, scale: 0.95 } : // Left column
                  { x: 100, opacity: 0, scale: 0.95 } // Right column
                }
              >
                <Card className="h-full bg-white border-border/20 hover:bg-gray-200 transition-colors duration-300 text-black">
                  <CardHeader className="flex flex-row items-center gap-4">
                    {service.icon}
                    <CardTitle className="font-headline text-xl text-black">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-black/80">{service.description}</p>
                  </CardContent>
                </Card>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper animation={{ y: 50, opacity: 0, scale: 0.95 }}>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
              From Our Blog
            </h2>
          </ScrollAnimationWrapper>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <ScrollAnimationWrapper key={post.id} animation={{ y: 50, opacity: 0, scale: 0.95 }}>
                <Link href={`/blog/${post.id}`}>
                  <Card className="group overflow-hidden h-full">
                    {post.image && (
                      <div className="overflow-hidden">
                        <Image
                          src={post.image.imageUrl}
                          alt={post.image.description}
                          width={600}
                          height={400}
                          data-ai-hint={post.image.imageHint}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{post.excerpt}</p>
                    </CardContent>
                  </Card>
                </Link>
              </ScrollAnimationWrapper>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/blog">
                Read More Posts <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 md:py-32 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimationWrapper animation={{ y: 50, opacity: 0, scale: 0.95 }}>
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4 text-accent-foreground">
              Ready to Solve Your Queries?
            </h2>
            <p className="text-lg md:text-xl text-accent-foreground/80 max-w-3xl mx-auto mb-8">
              Don't let questions linger. Get expert advice tailored to your needs.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </div>
  );
}
