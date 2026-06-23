import { useState, useEffect, useRef } from 'react';
import { frames } from '../ascii-me-frames';

function AsciiMemoji() {
    const [frameIndex, setFrameIndex] = useState(0);
    const dirRef = useRef<'inc' | 'dec'>('inc');
    const preRef = useRef<HTMLPreElement>(null);

    // font size scaling
    useEffect(() => {
    function updateFontSize() {
        if (!preRef.current) return;

        const containerWidth = preRef.current.clientWidth;
        const containerHeight = preRef.current.clientHeight;

        const lines = frames[0].split('\n');
        const longestLine = lines.reduce((a: string, b: string) =>
            a.length > b.length ? a : b, '');

        const charRatio = 0.6;
        const isMobile = containerWidth < 768; // matches Tailwind's md: breakpoint

        let fontSize: number;

        if (isMobile) {
            // scale by height only — width will crop, that's fine
            fontSize = containerHeight / (lines.length * charRatio * 0.66);
        } else {
            // scale to fit both dimensions on desktop
            const fontSizeByWidth = containerWidth / (longestLine.length * charRatio);
            const fontSizeByHeight = containerHeight / (lines.length * charRatio * 0.66);
            fontSize = Math.min(fontSizeByWidth, fontSizeByHeight);
        }

        preRef.current.style.fontSize = `${fontSize}px`;
        preRef.current.style.lineHeight = `${fontSize * 0.66}px`;
    }

        updateFontSize();
        const observer = new ResizeObserver(updateFontSize);
        if (preRef.current) observer.observe(preRef.current);
        return () => observer.disconnect();
    }, []);

    // animation loop
    useEffect(() => {
        const fps = 10;
        const fpsInterval = 1000 / fps;
        let then = Date.now();
        let animId: number;

        function animate() {
            animId = requestAnimationFrame(animate);
            const now = Date.now();
            const elapsed = now - then;

            if (elapsed > fpsInterval) {
                then = now - (elapsed % fpsInterval);
                setFrameIndex((prev) => {
                    const max = frames.length;
                    if (dirRef.current === 'inc') {
                        if (prev === max - 1) { dirRef.current = 'dec'; return prev - 1; }
                        return prev + 1;
                    } else {
                        if (prev === 0) { dirRef.current = 'inc'; return prev + 1; }
                        return prev - 1;
                    }
                });
            }
        }

        animId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animId);
    }, []);

    return (
        <pre
            ref={preRef}
            className="absolute
                        inset-0
                        font-mono
                        text-white/60
                        pointer-events-none
                        select-none
                        overflow-hidden
                        z-[1]
                        leading-none
                        whitespace-pre
                        flex
                        items-center
                        justify-center
                        
                        md:text-white/30">
            {frames[frameIndex]}
        </pre>
    );
}

export default AsciiMemoji;