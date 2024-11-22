// import { useEffect, useState } from 'react';

// const RainOfBinary = () => {
//     const [binary, setBinary] = useState<number[]>([]);

//     const generateRandomBinary = () => {
//         // Create an array of 0s and 1s
//         const newBinary = Array.from({ length: 50 }, () => Math.round(Math.random()));
//         setBinary(newBinary);
//     };

//     useEffect(() => {
//         const interval = setInterval(generateRandomBinary, 500); // Update every 300ms
//         return () => clearInterval(interval); // Clean up on component unmount
//     }, []);

//     return (
//         <div className="absolute inset-0 overflow-hidden z-10 h-full w-full object-cover">
//             {binary.map((bit, index) => (
//                 <span
//                     key={index}
//                     className="absolute text-teal-400 text-xl"
//                     style={{
//                         top: `${Math.random() * 100}vh`,
//                         left: `${Math.random() * 100}vw`,
//                         animation: `animate-fadeInOut ${(Math.random() * 3 + 1).toFixed(2)}s infinite`,
//                     }}
//                 >
//                     {bit}
//                 </span>
//             ))}
//         </div>
//     );
// };

// export default RainOfBinary;


import { useEffect, useRef } from 'react';

const RainOfBinary = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const createBinaryRain = () => {
            const span = document.createElement('span');
            span.textContent = Math.round(Math.random()).toString();

            // Add Tailwind classes for styling
            span.className =
                'absolute text-cyan-300 text-xl opacity-80 pointer-events-none';
            span.style.top = `${Math.random() * 100}vh`; // Random vertical position
            span.style.left = `${Math.random() * 100}vw`; // Random horizontal position
            span.style.opacity = '0'; // Start invisible
            span.style.transition = `opacity ${(Math.random() * 2 + 1).toFixed(2)}s ease`; // Smooth fade

            // Append the element to the container
            container.appendChild(span);

            // Trigger the animation by updating the opacity
            requestAnimationFrame(() => {
                span.style.opacity = '1'; // Fade in
            });

            // Remove the element after fade-out
            setTimeout(() => {
                span.style.opacity = '0'; // Fade out
                setTimeout(() => {
                    container.removeChild(span); // Remove after fade-out
                }, 2000); // Match fade-out duration
            }, Math.random() * 2000 + 1000); // Stay visible for a random duration
        };

        // Interval to create binary elements
        const interval = setInterval(() => {
            for (let i = 0; i < 10; i++) createBinaryRain(); // Create a few at a time
        }, 300);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 overflow-hidden z-10"></div>
    );
};

export default RainOfBinary;


