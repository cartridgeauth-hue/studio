
'use client';
import BlogCard from '@/components/blog/BlogCard';
import ScrollAnimationWrapper from '@/components/shared/ScrollAnimationWrapper';
import { DUMMY_POSTS } from '@/lib/dummy-data';


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
                {DUMMY_POSTS.map((post) => (
                    <ScrollAnimationWrapper key={post.id}>
                        <BlogCard post={post} />
                    </ScrollAnimationWrapper>
                ))}
            </div>
        </div>
    );
}
