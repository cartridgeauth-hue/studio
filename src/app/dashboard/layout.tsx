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
    SidebarRail,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Briefcase, FileText, Home, MessageSquare, PlusCircle, UserCircle } from 'lucide-react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const navItems = [
        { href: '/dashboard', label: 'Dashboard', icon: <Home /> },
        { href: '/dashboard/queries', label: 'Queries', icon: <MessageSquare /> },
        { href: '/dashboard/blog', label: 'My Posts', icon: <FileText /> },
        { href: '/dashboard/blog/new', label: 'New Post', icon: <PlusCircle /> },
        { href: '/dashboard/profile', label: 'Profile', icon: <UserCircle /> },
    ];

    return (
        <SidebarProvider>
            <Sidebar collapsible="icon" variant="floating">
                <SidebarHeader>
                    <div className="flex items-center justify-center p-2">
                         <div className="flex items-center gap-2 p-2">
                           <Briefcase className="h-6 w-6 text-accent" />
                         </div>
                    </div>
                </SidebarHeader>
                <SidebarContent>
                    <SidebarMenu className='gap-4'>
                        {navItems.map((item) => (
                            <SidebarMenuItem key={item.href}>
                                <Link href={item.href}>
                                    <SidebarMenuButton 
                                        size="lg"
                                        isActive={pathname.startsWith(item.href) && (item.href === '/dashboard' ? pathname === item.href : true)}
                                        tooltip={item.label}
                                    >
                                        {item.icon}
                                        <span>{item.label}</span>
                                    </SidebarMenuButton>
                                </Link>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarContent>
                <SidebarRail />
            </Sidebar>
            <SidebarInset>
                <header className="flex items-center justify-between p-4 border-b md:justify-end">
                    <SidebarTrigger className="md:hidden" />
                    <Button variant="outline" asChild><Link href="/">View Site</Link></Button>
                </header>
                <div className="px-4 py-8 sm:px-6 lg:px-52">{children}</div>
            </SidebarInset>
        </SidebarProvider>
    );
}
