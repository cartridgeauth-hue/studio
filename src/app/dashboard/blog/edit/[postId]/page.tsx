
import { notFound } from 'next/navigation';
import BlogContentGenerator from '@/components/blog/BlogContentGenerator';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { DUMMY_POSTS } from '@/lib/dummy-data';

export default function EditBlogPostPage({ params }: { params: { postId: string } }) {
    const post = DUMMY_POSTS.find(p => p.id === params.postId);

    if (!post) {
        notFound();
    }

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold font-headline">Edit Blog Post</h1>
            
            <BlogContentGenerator />

            <div className="space-y-6 pt-8 border-t">
                <h2 className="text-2xl font-bold font-headline">Edit & Finalize Your Post</h2>
                <div className="space-y-4">
                    <Label htmlFor="title">Blog Title</Label>
                    <Input id="title" placeholder="Your final blog title" defaultValue={post.title} />
                </div>
                <div className="space-y-4">
                    <Label htmlFor="content">Blog Content</Label>
                    <Textarea id="content" placeholder="Your final blog content..." rows={15} defaultValue={post.content.replace(/<p>/g, '').replace(/<\/p>/g, '\n\n')} />
                </div>

                <div className="flex justify-end gap-4">
                    <Button variant="outline">Save as Draft</Button>
                    <Button>Publish Changes</Button>
                </div>
            </div>
        </div>
    );
}
