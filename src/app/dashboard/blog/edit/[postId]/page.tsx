'use client';

import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { DUMMY_POSTS } from '@/lib/dummy-data';
import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';

export default function EditBlogPostPage({ params }: { params: { postId: string } }) {
    const post = DUMMY_POSTS.find(p => p.id === params.postId);
    
    if (!post) {
        notFound();
    }

    const [content, setContent] = useState(post.content);
    const [title, setTitle] = useState(post.title);


    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold font-headline">Edit Blog Post</h1>
            
            <div className="space-y-6">
                <h2 className="text-2xl font-bold font-headline">Edit & Finalize Your Post</h2>
                <div className="space-y-4">
                    <Label htmlFor="title">Blog Title</Label>
                    <Input id="title" placeholder="Your final blog title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="space-y-4">
                    <Label htmlFor="content">Blog Content</Label>
                    <Textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} rows={20} />
                </div>

                <div className="flex justify-end gap-4">
                    <Button variant="outline">Save as Draft</Button>
                    <Button>Publish Changes</Button>
                </div>
            </div>
        </div>
    );
}
