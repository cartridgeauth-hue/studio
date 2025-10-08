'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    SidebarProvider,
    Sidebar,
    SidebarHeader,
    SidebarContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarInset,
    SidebarTrigger,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import Logo from '@/components/shared/Logo';
import { FileText, Home, PlusCircle, UserCircle } from 'lucide-react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const navItems = [
        { href: '/dashboard', label: 'Dashboard', icon: <Home /> },
        { href: '/dashboard/blog', label: 'My Posts', icon: <FileText /> },
        { href: '/dashboard/blog/new', label: 'New Post', icon: <PlusCircle /> },
        { href: '/dashboard/profile', label: 'Profile', icon: <UserCircle /> },
    ];

    return (
        <SidebarProvider>
            <Sidebar>
                <SidebarHeader>
                    <div className="flex items-center justify-between p-2">
                         <Logo />
                    </div>
                </SidebarHeader>
                <SidebarContent>
                    <SidebarMenu>
                        {navItems.map((item) => (
                            <SidebarMenuItem key={item.href}>
                                <Link href={item.href}>
                                    <SidebarMenuButton isActive={pathname === item.href}>
                                        {item.icon}
                                        <span>{item.label}</span>
                                    </SidebarMenuButton>
                                </Link>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarContent>
            </Sidebar>
            <SidebarInset>
                <header className="flex items-center justify-between p-4 border-b md:justify-end">
                    <SidebarTrigger className="md:hidden" />
                    <Button variant="outline" asChild><Link href="/">View Site</Link></Button>
                </header>
                <div className="p-4 sm:p-6 lg:p-8">{children}</div>
            </SidebarInset>
        </SidebarProvider>
    );
}
