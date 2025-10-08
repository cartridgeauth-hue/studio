
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { DUMMY_POSTS } from '@/lib/dummy-data';
import { format } from 'date-fns';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, UserCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export function generateStaticParams() {
    return DUMMY_POSTS.map(post => ({
        slug: post.slug,
    }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = DUMMY_POSTS.find(p => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    const otherPosts = DUMMY_POSTS.filter(p => p.id !== post.id).slice(0, 3);

    return (
        <div className="container mx-auto px-12 lg:px-52 py-16 md:py-24">
            <article className="max-w-4xl mx-auto">
                <header className="mb-12 text-center">
                    <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
                    <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                           <UserCircle className='w-4 h-4' />
                           <span>{post.author.name}</span>
                        </div>
                        <span className="text-muted-foreground/50">|</span>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <time dateTime={post.publishedAt}>{format(new Date(post.publishedAt), 'MMMM d, yyyy')}</time>
                        </div>
                    </div>
                </header>

                <div className="relative w-full h-64 md:h-96 mb-12 rounded-lg overflow-hidden">
                    <Image
                        src={post.image.imageUrl}
                        alt={post.image.description}
                        fill
                        className="object-cover"
                        data-ai-hint={post.image.imageHint}
                    />
                </div>

                <div
                    className="prose dark:prose-invert max-w-none text-lg leading-relaxed space-y-6"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

            </article>
            
            <aside className="max-w-4xl mx-auto mt-16 pt-12 border-t">
                 <div className='flex items-center gap-4 p-6 rounded-lg bg-card border'>
                    <Avatar className='w-16 h-16'>
                        <AvatarImage src={post.author.avatar.imageUrl} alt={post.author.name} data-ai-hint={post.author.avatar.imageHint} />
                        <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                        <h3 className="font-headline text-xl font-bold">About {post.author.name}</h3>
                        <p className='text-muted-foreground mt-1'>{post.author.bio}</p>
                    </div>
                 </div>
            </aside>

             <aside className="max-w-4xl mx-auto mt-16 pt-12 border-t">
                 <h2 className="font-headline text-3xl font-bold mb-8 text-center">More From The Blog</h2>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     {otherPosts.map(otherPost => (
                         <Link key={otherPost.id} href={`/blog/${otherPost.slug}`} className='block group'>
                             <div className='bg-card p-6 rounded-lg h-full border hover:border-accent transition-colors'>
                                 <h3 className='font-headline text-xl font-bold group-hover:text-accent transition-colors'>{otherPost.title}</h3>
                                 <p className='text-muted-foreground text-sm mt-2 line-clamp-2'>{otherPost.excerpt}</p>
                             </div>
                         </Link>
                     ))}
                 </div>
             </aside>
        </div>
    );
}

// Add basic prose styles to globals.css if they are not there
// You might need to install @tailwindcss/typography if not already installed.
// The "prose" classes are used above for styling the blog content.
