// src/components/Navigation.tsx
import { Link, useLocation } from '@tanstack/react-router'

export default function Navigation() {
    const location = useLocation()

    const scrollToSection = (sectionId: string) => {
        // Only scroll if we're on the home page
        if (location.pathname === '/') {
            const element = document.getElementById(sectionId)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
        }
    }

    const isHome = location.pathname === '/'

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-pink-50/95 backdrop-blur-sm border-b border-pink-100">
            <div className="max-w-7xl mx-auto px-6 py-5">
                <div className="flex justify-between items-center">
                    <Link to="/" className="text-2xl font-light text-rose-800">
                        Shianne Liang
                    </Link>

                    <div className="flex gap-10">
                        {isHome ? (
                            <>
                                <button
                                    onClick={() => scrollToSection('about')}
                                    className="text-rose-800 hover:text-rose-900 font-medium transition-colors"
                                >
                                    About
                                </button>
                                <button
                                    onClick={() => scrollToSection('experience')}
                                    className="text-rose-800 hover:text-rose-900 font-medium transition-colors"
                                >
                                    Experience
                                </button>
                                <button
                                    onClick={() => scrollToSection('projects')}
                                    className="text-rose-800 hover:text-rose-900 font-medium transition-colors"
                                >
                                    Projects
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/#about" className="text-rose-800 hover:text-rose-900 font-medium transition-colors">
                                    About
                                </Link>
                                <Link to="/#experience" className="text-rose-800 hover:text-rose-900 font-medium transition-colors">
                                    Experience
                                </Link>
                                <Link to="/#projects" className="text-rose-800 hover:text-rose-900 font-medium transition-colors">
                                    Projects
                                </Link>
                            </>
                        )}
                        <Link
                            to="/books"
                            className="text-rose-800 hover:text-rose-900 font-medium transition-colors [&.active]:text-rose-900 [&.active]:font-bold"
                        >
                            Books
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}