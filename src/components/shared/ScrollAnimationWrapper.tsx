'use client';
import { useRef, useEffect, type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationWrapperProps {
    children: ReactNode;
    className?: string;
    animation?: gsap.TweenVars;
}

export default function ScrollAnimationWrapper({ 
    children, 
    className, 
    animation = { y: 50, opacity: 0, scale: 0.95 } 
}: ScrollAnimationWrapperProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (element) {
            gsap.fromTo(
                element,
                animation,
                {
                    y: 0,
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 85%',
                        end: 'bottom 20%',
                        scrub: 1, // Link animation to scroll position
                        toggleActions: 'play reverse play reverse',
                    },
                }
            );
        }
    }, [animation]);

    return (
        <div ref={ref} className={cn(className)}>
            {children}
        </div>
    );
}
