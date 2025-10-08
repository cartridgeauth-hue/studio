'use client';
import { useRef, useEffect, type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationWrapperProps {
    children: ReactNode;
    className?: string;
}

export default function ScrollAnimationWrapper({ children, className }: ScrollAnimationWrapperProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (element) {
            gsap.fromTo(
                element,
                { y: 50, opacity: 0, scale: 0.95 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.7,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 85%', // Animation starts when the top of the element is 85% from the top of the viewport
                        end: 'bottom 20%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        }
    }, []);

    return (
        <div ref={ref} className={cn(className)}>
            {children}
        </div>
    );
}
