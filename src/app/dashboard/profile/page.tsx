import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { FileEdit } from 'lucide-react';
import Link from 'next/link';


const DUMMY_POSTS: { id: string, title: string, publishedAt: string }[] = [];

export default function ProfilePage() {
    const DUMMY_AUTHOR = {
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
        bio: 'An expert in financial regulations and tax law with over 10 years of experience. Jane is passionate about simplifying complex topics for a broader audience.',
        avatar: PlaceHolderImages.find(p => p.id === 'author-1'),
    };
    
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold font-headline">My Profile</h1>

            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Author Information</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col md:flex-row items-start gap-8">
                    <div className="flex flex-col items-center gap-4">
                        <Avatar className="w-24 h-24">
                            {DUMMY_AUTHOR.avatar && <AvatarImage src={DUMMY_AUTHOR.avatar.imageUrl} alt={DUMMY_AUTHOR.name} data-ai-hint={DUMMY_AUTHOR.avatar.imageHint} />}
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <Button variant="outline" size="sm">Edit Profile</Button>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold font-headline">{DUMMY_AUTHOR.name}</h2>
                        <p className="text-muted-foreground mb-4">{DUMMY_AUTHOR.email}</p>
                        <p className="text-foreground">{DUMMY_AUTHOR.bio}</p>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Post History</CardTitle>
                    <CardDescription>A list of all your published articles.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Title</TableHead>
                                <TableHead>Published Date</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {DUMMY_POSTS.length > 0 ? (
                                DUMMY_POSTS.map((post) => (
                                    <TableRow key={post.id}>
                                        <TableCell className="font-medium">{post.title}</TableCell>
                                        <TableCell>{post.publishedAt}</TableCell>
                                        <TableCell className="text-right">
                                            <Button variant="ghost" size="icon" asChild>
                                                <Link href={`/dashboard/blog/edit/${post.id}`}><FileEdit className="w-4 h-4" /></Link>
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                             ) : (
                                <TableRow>
                                    <TableCell colSpan={3} className="text-center text-muted-foreground">
                                        No posts found.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
