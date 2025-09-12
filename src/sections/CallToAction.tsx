"use client";
import { useEffect, useRef, useState } from "react";

export default function CallToAction() {
    const [isHovered, setIsHovered] = useState(false);
    const scope = useRef<HTMLDivElement>(null);
    const animationRef = useRef<Animation | null>(null);

    useEffect(() => {
        if (scope.current) {
            animationRef.current = scope.current.animate(
                [
                    { transform: "translateX(0%)" },
                    { transform: "translateX(-50%)" },
                ],
                {
                    duration: 30000,
                    iterations: Infinity,
                    easing: "linear",
                }
            );
        }
    }, []);

    useEffect(() => {
        if (animationRef.current) {
            animationRef.current.playbackRate = isHovered ? 0.5 : 1;
        }
    }, [isHovered]);

    return (
        <section className="py-24">
            <div className="overflow-x-clip p-4 flex">
                <div
                    ref={scope}
                    className="flex flex-none gap-16 pr-16 text-7xl md:text-8xl font-medium group cursor-pointer"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="flex items-center gap-16">
                            <span className="text-lime-400 text-7xl">&#10038;</span>
                            <span className="group-hover:text-lime-400">Try it for free</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
