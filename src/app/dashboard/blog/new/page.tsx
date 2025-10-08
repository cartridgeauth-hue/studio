import BlogContentGenerator from '@/components/blog/BlogContentGenerator';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function NewBlogPostPage() {
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold font-headline">Create New Blog Post</h1>
            
            <BlogContentGenerator />

            <div className="space-y-6 pt-8 border-t">
                <h2 className="text-2xl font-bold font-headline">Edit & Finalize Your Post</h2>
                <div className="space-y-4">
                    <Label htmlFor="title">Blog Title</Label>
                    <Input id="title" placeholder="Your final blog title" />
                </div>
                <div className="space-y-4">
                    <Label htmlFor="content">Blog Content</Label>
                    <Textarea id="content" placeholder="Your final blog content..." rows={15} />
                </div>

                <div className="flex justify-end gap-4">
                    <Button variant="outline">Save as Draft</Button>
                    <Button>Publish Post</Button>
                </div>
            </div>
        </div>
    );
}
