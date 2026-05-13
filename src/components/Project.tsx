// import '../styles/ugly-mode.css'

// export default function ProjectCard({ title, description, image, link }: {
//     title: string
//     description: string
//     image: string
//     link?: string
// }) {
//     return (
//         <div className="project-card bg-white/70 backdrop-blur-sm rounded-2xl border border-pink-200 overflow-hidden hover:shadow-xl transition-shadow">
//             <a href={link} target="_blank" rel="noopener noreferrer">
//                 <img src={image} alt={title} className="w-full h-48 sm:h-64 object-cover" />
//                 <div className="p-5 sm:p-8">
//                     <h3 className="text-xl sm:text-3xl font-medium text-rose-800 mb-3">{title}</h3>
//                     <p className="text-base sm:text-lg text-rose-700">{description}</p>
//                 </div>
//             </a>
//         </div>
//     )
// }

import { useState } from 'react';

export default function ProjectCard({ title, subtitle, details, image, link }: {
    title: string
    subtitle: string
    details: string
    image: string
    link?: string
}) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="project-card bg-white/70 backdrop-blur-sm rounded-2xl border border-pink-200 overflow-hidden shadow-md"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)', // Bouncy effect
                zIndex: isHovered ? 50 : 1,
                position: 'relative',
                cursor: 'pointer'
            }}
        >
            <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ overflow: 'hidden' }}>
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-48 sm:h-64 object-cover"
                        style={{
                            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                            transition: 'transform 0.5s ease',
                        }}
                    />
                </div>
                <div className="p-5 sm:p-8">
                    <h3 className="text-xl sm:text-3xl font-medium text-rose-800 mb-1">{title}</h3>
                    <p className="text-xs font-bold uppercase text-rose-400 mb-3">{subtitle}</p>
                    <p className="text-base sm:text-lg text-rose-700">{details}</p>
                </div>
            </a>
        </div>
    )
}