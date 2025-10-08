import SignupForm from "@/components/auth/SignupForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function SignupPage() {
    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-200px)] py-12">
            <Card className="w-full max-w-md mx-4">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-headline">Author Registration</CardTitle>
                    <CardDescription>
                        Registration is currently by invitation only.
                    </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                   <p className="text-muted-foreground">If you are interested in becoming an author, please get in touch with our team.</p>
                   <Link href="/contact" className="underline hover:text-accent mt-4 inline-block">
                        Contact Us
                    </Link>
                </CardContent>
            </Card>
        </div>
    );
}
