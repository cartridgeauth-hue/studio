'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function NewBlogPostPage() {
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold font-headline">Create New Blog Post</h1>
            
            <div className="space-y-6">
                <h2 className="text-2xl font-bold font-headline">Write Your Post</h2>
                <div className="space-y-4">
                    <Label htmlFor="title">Blog Title</Label>
                    <Input id="title" placeholder="Your blog title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="space-y-4">
                    <Label htmlFor="content">Blog Content</Label>
                    <Textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} rows={20} />
                </div>

                <div className="flex justify-end gap-4">
                    <Button variant="outline">Save as Draft</Button>
                    <Button>Publish Post</Button>
                </div>
            </div>
        </div>
    );
}
