
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { DUMMY_POSTS, DUMMY_AUTHORS } from '@/lib/dummy-data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import BlogCard from '@/components/blog/BlogCard';

export function generateStaticParams() {
    return DUMMY_AUTHORS.map(author => ({
        authorId: author.id,
    }));
}

export default function AuthorPage({ params }: { params: { authorId: string } }) {
    const author = DUMMY_AUTHORS.find(a => a.id === params.authorId);

    if (!author) {
        notFound();
    }

    const authorPosts = DUMMY_POSTS.filter(p => p.author.id === author.id);

    return (
        <div className="container mx-auto px-6 lg:px-52 py-16 md:py-24">
            <header className="mb-16">
                <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                    <Avatar className='w-32 h-32 md:w-48 md:h-48 border-4 border-accent shadow-lg'>
                        <AvatarImage src={author.avatar.imageUrl} alt={author.name} data-ai-hint={author.avatar.imageHint} />
                        <AvatarFallback className="text-4xl">{author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="max-w-2xl">
                        <h1 className="font-headline text-4xl md:text-5xl font-bold mb-2">{author.name}</h1>
                        <p className="text-lg text-muted-foreground">{author.bio}</p>
                    </div>
                </div>
            </header>

            <main>
                <h2 className="font-headline text-3xl font-bold mb-8 text-center md:text-left">Articles by {author.name}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {authorPosts.map(post => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            </main>
        </div>
    );
}
