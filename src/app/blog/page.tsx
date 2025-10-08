import BlogCard from '@/components/blog/BlogCard';
import ScrollAnimationWrapper from '@/components/shared/ScrollAnimationWrapper';
import type { BlogPost } from '@/lib/definitions';
import { PlaceHolderImages } from '@/lib/placeholder-images';

// Dummy data for blog posts
const DUMMY_POSTS: BlogPost[] = [
    {
        id: '1',
        slug: 'navigating-the-labyrinth-of-gst',
        title: 'Navigating the Labyrinth of GST',
        excerpt: 'A deep dive into the Goods and Services Tax system and how to stay compliant.',
        image: PlaceHolderImages.find(p => p.id === 'blog-1')!,
        author: { id: '1', name: 'Jane Doe', avatar: PlaceHolderImages.find(p => p.id === 'author-1')!, bio: '' },
        publishedAt: '2024-05-20',
        content: '<p>Content for post 1...</p>'
    },
    {
        id: '2',
        slug: 'the-future-of-digital-stamping',
        title: 'The Future of Digital Stamping',
        excerpt: 'Exploring the shift to eStamps and what it means for legal documentation.',
        image: PlaceHolderImages.find(p => p.id === 'blog-2')!,
        author: { id: '1', name: 'Jane Doe', avatar: PlaceHolderImages.find(p => p.id === 'author-1')!, bio: '' },
        publishedAt: '2024-05-18',
        content: '<p>Content for post 2...</p>'
    },
    {
        id: '3',
        slug: 'maximizing-your-epf-returns',
        title: 'Maximizing Your EPF Returns',
        excerpt: 'Strategies and tips to make the most out of your employee provident fund.',
        image: PlaceHolderImages.find(p => p.id === 'blog-3')!,
        author: { id: '1', name: 'Jane Doe', avatar: PlaceHolderImages.find(p => p.id === 'author-1')!, bio: '' },
        publishedAt: '2024-05-15',
        content: '<p>Content for post 3...</p>'
    },
    {
        id: '4',
        slug: 'understanding-income-tax-slabs',
        title: 'Understanding Income Tax Slabs for FY 2024-25',
        excerpt: 'A clear breakdown of the new and old tax regimes for the current financial year.',
        image: PlaceHolderImages.find(p => p.id === 'blog-4')!,
        author: { id: '1', name: 'Jane Doe', avatar: PlaceHolderImages.find(p => p.id === 'author-1')!, bio: '' },
        publishedAt: '2024-05-12',
        content: '<p>Content for post 4...</p>'
    },
    {
        id: '5',
        slug: 'esic-benefits-a-complete-guide',
        title: 'ESIC Benefits: A Complete Guide for Employees',
        excerpt: 'Learn about all the medical and cash benefits available under the ESIC scheme.',
        image: PlaceHolderImages.find(p => p.id === 'blog-5')!,
        author: { id: '1', name: 'Jane Doe', avatar: PlaceHolderImages.find(p => p.id === 'author-1')!, bio: '' },
        publishedAt: '2024-05-10',
        content: '<p>Content for post 5...</p>'
    },
    {
        id: '6',
        slug: 'why-professional-consultation-matters',
        title: 'Why Professional Consultation Matters',
        excerpt: 'The hidden costs of avoiding expert advice in financial and legal matters.',
        image: PlaceHolderImages.find(p => p.id === 'blog-6')!,
        author: { id: '1', name: 'Jane Doe', avatar: PlaceHolderImages.find(p => p.id === 'author-1')!, bio: '' },
        publishedAt: '2024-05-08',
        content: '<p>Content for post 6...</p>'
    },
];


export default function BlogPage() {
    return (
        <div className="container mx-auto px-12 lg:px-52 py-16 md:py-24">
            <ScrollAnimationWrapper>
                <h1 className="font-headline text-4xl md:text-5xl font-bold text-center mb-4">Our Blog</h1>
                <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                    Insights and updates on financial and legal matters from our team of experts.
                </p>
            </ScrollAnimationWrapper>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {DUMMY_POSTS.map((post, index) => (
                    <ScrollAnimationWrapper key={post.id}>
                        <BlogCard post={post} />
                    </ScrollAnimationWrapper>
                ))}
            </div>
        </div>
    );
}
