import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { BlogPost } from '@/lib/definitions';
import { format } from 'date-fns';
import { Calendar, UserCircle } from 'lucide-react';

interface BlogCardProps {
    post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
    return (
        <Link href={`/blog/${post.slug}`} className="block h-full">
            <Card className="group flex flex-col h-full bg-background border-border/50 hover:border-accent transition-all duration-300 overflow-hidden">
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
                    <CardTitle className="font-headline text-xl group-hover:text-accent transition-colors">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                    <CardDescription className="flex-grow">{post.excerpt}</CardDescription>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mt-4 pt-4 border-t">
                        <div className="flex items-center gap-2">
                           <UserCircle className='w-4 h-4' />
                           <span>{post.author.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <time dateTime={post.publishedAt}>{format(new Date(post.publishedAt), 'MMM d, yyyy')}</time>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}
