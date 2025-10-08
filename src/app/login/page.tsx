import LoginForm from "@/components/auth/LoginForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-200px)] py-12">
            <Card className="w-full max-w-md mx-4">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-headline">Author Login</CardTitle>
                    <CardDescription>
                        Access your dashboard to manage blog posts.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <LoginForm />
                    <p className="mt-4 text-center text-sm text-muted-foreground">
                        Not an author?{" "}
                        <Link href="/contact" className="underline hover:text-accent">
                            Contact us
                        </Link>
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
