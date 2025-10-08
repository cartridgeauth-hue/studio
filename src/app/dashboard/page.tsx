import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlusCircle, UserCircle } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold font-headline mb-4">Welcome, Author!</h1>
            <p className="text-muted-foreground mb-8">Here's a quick overview of your dashboard.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline">Create New Content</CardTitle>
                        <CardDescription>Start writing your next masterpiece.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4">Use our AI-powered tools to help you generate engaging blog posts.</p>
                        <Button asChild>
                            <Link href="/dashboard/blog/new"><PlusCircle /> New Blog Post</Link>
                        </Button>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline">Manage Your Profile</CardTitle>
                        <CardDescription>Keep your author details up to date.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4">Update your bio and view your post history.</p>
                        <Button asChild variant="secondary">
                            <Link href="/dashboard/profile"><UserCircle /> Go to Profile</Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
