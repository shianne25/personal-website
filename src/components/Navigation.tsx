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
        <nav className="fixed top-0 left-0 right-0 z-50 bg-pink-100/95 backdrop-blur-sm border-b border-pink-100">
            <div className="max-w-7xl mx-auto px-6 py-1">
                <div className="flex justify-between items-center">
                    {/* <Link to="/" className="text-2xl font-light text-rose-800">
                        Shianne Liang
                    </Link> */}
                    {/* <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="group flex items-center justify-center w-12 h-12 border-2 border-rose-800 rounded-full text-xl font-medium text-rose-800 transition-all hover:bg-rose-800 hover:text-white transition-transform duration-300 hover:scale-110"
                    >
                        SL
                    </button> */}
                    <Link
                        to="/"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="group flex items-center justify-center w-12 h-12 border-2 border-rose-800 rounded-full text-xl font-medium text-rose-800 transition-all hover:bg-rose-800 hover:text-white transition-transform duration-300 hover:scale-110"
                    >
                        SL
                    </Link>

                    <div className="flex gap-10">
                        {isHome ? (
                            <>
                                <button
                                    onClick={() => scrollToSection('about')}
                                    className="text-rose-800 hover:text-rose-900 font-medium transition-colors transition-transform duration-300 hover:scale-110"
                                >
                                    About
                                </button>
                                <button
                                    onClick={() => scrollToSection('experience')}
                                    className="text-rose-800 hover:text-rose-900 font-medium transition-colors transition-transform duration-300 hover:scale-110"
                                >
                                    Experience
                                </button>
                                <button
                                    onClick={() => scrollToSection('projects')}
                                    className="text-rose-800 hover:text-rose-900 font-medium transition-colors transition-transform duration-300 hover:scale-110"
                                >
                                    Projects
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/"
                                    hash="about"
                                    className="text-rose-800 hover:text-rose-900 font-medium transition-colors transition-transform duration-300 hover:scale-110"
                                >
                                    About
                                </Link>
                                <Link
                                    to="/"
                                    hash="experience"
                                    className="text-rose-800 hover:text-rose-900 font-medium transition-colors transition-transform duration-300 hover:scale-110"
                                >
                                    Experience
                                </Link>
                                <Link
                                    to="/"
                                    hash="projects"
                                    className="text-rose-800 hover:text-rose-900 font-medium transition-colors transition-transform duration-300 hover:scale-110"
                                >
                                    Projects
                                </Link>
                            </>
                        )}
                        <Link
                            to="/books"
                            className="text-rose-800 hover:text-rose-900 font-medium transition-colors [&.active]:text-rose-900 [&.active]:font-bold transition-transform duration-300 hover:scale-110"
                        >
                            Books
                        </Link>
                    </div>
                </div>
            </div>
        </nav >
    )
}