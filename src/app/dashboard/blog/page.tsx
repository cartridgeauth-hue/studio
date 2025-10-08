import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FileEdit, PlusCircle, Trash2 } from 'lucide-react';
import Link from 'next/link';

const DUMMY_POSTS = [
    { id: '1', title: 'Navigating the Labyrinth of GST', status: 'Published', publishedAt: '2024-05-20' },
    { id: '2', title: 'The Future of Digital Stamping', status: 'Published', publishedAt: '2024-05-18' },
    { id: '3', title: 'Maximizing Your EPF Returns', status: 'Draft', publishedAt: '---' },
];

export default function ManageBlogPage() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold font-headline">My Blog Posts</h1>
                <Button asChild>
                    <Link href="/dashboard/blog/new"><PlusCircle /> New Post</Link>
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">All Posts</CardTitle>
                    <CardDescription>Manage, edit, or delete your articles.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Title</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {DUMMY_POSTS.map((post) => (
                                <TableRow key={post.id}>
                                    <TableCell className="font-medium">{post.title}</TableCell>
                                    <TableCell>{post.status}</TableCell>
                                    <TableCell>{post.publishedAt}</TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="ghost" size="icon" asChild>
                                            <Link href={`/dashboard/blog/edit/${post.id}`}><FileEdit className="w-4 h-4" /></Link>
                                        </Button>
                                        <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
