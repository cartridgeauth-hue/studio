
'use client';
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
        content: '<p>The Goods and Services Tax (GST) is a cornerstone of India\'s economic reform, creating a unified market by subsuming a plethora of indirect taxes. For businesses, navigating its complexities is not just about compliance but also about leveraging its benefits. This post breaks down the essentials of GST, from understanding its structure (CGST, SGST, IGST) to mastering the input tax credit (ITC) mechanism, ensuring your business stays on the right side of the law while optimizing its tax liabilities.</p>'
    },
    {
        id: '2',
        slug: 'the-future-of-digital-stamping',
        title: 'The Future of Digital Stamping',
        excerpt: 'Exploring the shift to eStamps and what it means for legal documentation.',
        image: PlaceHolderImages.find(p => p.id === 'blog-2')!,
        author: { id: '1', name: 'Jane Doe', avatar: PlaceHolderImages.find(p => p.id === 'author-1')!, bio: '' },
        publishedAt: '2024-05-18',
        content: '<p>eStamping is revolutionizing the way legal and financial documents are validated. This digital transformation offers unparalleled convenience, security, and efficiency compared to traditional stamping methods. We explore the legal framework backing eStamps, the process of obtaining them, and the significant impact this shift has on reducing fraud and speeding up transactions for everything from rental agreements to corporate contracts.</p>'
    },
    {
        id: '3',
        slug: 'maximizing-your-epf-returns',
        title: 'Maximizing Your EPF Returns',
        excerpt: 'Strategies and tips to make the most out of your employee provident fund.',
        image: PlaceHolderImages.find(p => p.id === 'blog-3')!,
        author: { id: '1', name: 'Jane Doe', avatar: PlaceHolderImages.find(p => p.id === 'author-1')!, bio: '' },
        publishedAt: '2024-05-15',
        content: '<p>The Employee Provident Fund (EPF) is more than just a mandatory savings scheme; it\'s a powerful tool for long-term wealth creation. This guide provides actionable strategies to maximize your EPF returns, including understanding the power of compounding, making voluntary contributions (VPF), and exploring options for partial withdrawal for critical life events. Learn how to make your EPF work harder for your retirement goals.</p>'
    },
    {
        id: '4',
        slug: 'understanding-income-tax-slabs',
        title: 'Understanding Income Tax Slabs for FY 2024-25',
        excerpt: 'A clear breakdown of the new and old tax regimes for the current financial year.',
        image: PlaceHolderImages.find(p => p.id === 'blog-4')!,
        author: { id: '1', name: 'Jane Doe', avatar: PlaceHolderImages.find(p => p.id === 'author-1')!, bio: '' },
        publishedAt: '2024-05-12',
        content: '<p>The annual choice between the old and new tax regimes can be confusing for many taxpayers. This article provides a clear, comparative breakdown of the income tax slabs for the Financial Year 2024-25. We analyze the pros and cons of each regime, helping you make an informed decision based on your income, investment habits, and eligibility for deductions under Section 80C and others.</p>'
    },
    {
        id: '5',
        slug: 'esic-benefits-a-complete-guide',
        title: 'ESIC Benefits: A Complete Guide for Employees',
        excerpt: 'Learn about all the medical and cash benefits available under the ESIC scheme.',
        image: PlaceHolderImages.find(p => p.id === 'blog-5')!,
        author: { id: '1', name: 'Jane Doe', avatar: PlaceHolderImages.find(p => p.id === 'author-1')!, bio: '' },
        publishedAt: '2024-05-10',
        content: '<p>The Employees\' State Insurance Corporation (ESIC) scheme offers a comprehensive safety net for employees, covering everything from sickness and maternity to disability and unemployment. This guide details the wide array of medical and cash benefits available to insured persons and their dependents. We explain the eligibility criteria, contribution rates, and the process for claiming benefits, ensuring you can fully leverage this crucial social security scheme.</p>'
    },
    {
        id: '6',
        slug: 'why-professional-consultation-matters',
        title: 'Why Professional Consultation Matters',
        excerpt: 'The hidden costs of avoiding expert advice in financial and legal matters.',
        image: PlaceHolderImages.find(p => p.id === 'blog-6')!,
        author: { id: '1', name: 'Jane Doe', avatar: PlaceHolderImages.find(p => p.id === 'author-1')!, bio: '' },
        publishedAt: '2024-05-08',
        content: '<p>In the complex world of finance and law, trying to "do it yourself" can often lead to costly mistakes. This article highlights the importance of seeking professional consultation for matters like tax planning, legal compliance, and investment strategies. We discuss the hidden costs of avoiding expert advice—from missed opportunities to severe penalties—and show how the right guidance can save you time, money, and stress in the long run.</p>'
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
