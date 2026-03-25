// src/components/Navigation.tsx
import { Link, useLocation } from '@tanstack/react-router'
import { useState } from 'react'
import { useUglyMode } from '../hooks/useUglyMode'

export default function Navigation() {
    const location = useLocation()
    const [open, setOpen] = useState(false)
    const { isUgly, toggleUgly } = useUglyMode()

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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-1">
                <div className="flex justify-between items-center">
                    <Link
                        to="/"
                        onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                            setOpen(false)
                        }}
                        className="group flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 border-2 border-rose-800 rounded-full text-lg sm:text-xl font-medium text-rose-800 transition-all hover:bg-rose-800 hover:text-white transition-transform duration-300 hover:scale-110"
                    >
                        SL
                    </Link>

                    <button
                        onClick={() => setOpen((v) => !v)}
                        className="sm:hidden text-rose-800 p-2 rounded-lg bg-white/75 hover:bg-white"
                        aria-label="Toggle mobile menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
                        </svg>
                    </button>

                    <div className="hidden sm:flex sm:flex-row sm:items-center sm:gap-10 gap-2 font-medium text-rose-800">
                        {isHome ? (
                            <>
                                <button
                                    onClick={() => {
                                        scrollToSection('about')
                                        setOpen(false)
                                    }}
                                    className="text-rose-800 hover:text-rose-900 font-medium transition-colors transition-transform duration-300 hover:scale-110"
                                >
                                    About
                                </button>
                                <button
                                    onClick={() => {
                                        scrollToSection('experience')
                                        setOpen(false)
                                    }}
                                    className="text-rose-800 hover:text-rose-900 font-medium transition-colors transition-transform duration-300 hover:scale-110"
                                >
                                    Experience
                                </button>
                                <button
                                    onClick={() => {
                                        scrollToSection('projects')
                                        setOpen(false)
                                    }}
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
                                    onClick={() => setOpen(false)}
                                    className="text-rose-800 hover:text-rose-900 font-medium transition-colors transition-transform duration-300 hover:scale-110"
                                >
                                    About
                                </Link>
                                <Link
                                    to="/"
                                    hash="experience"
                                    onClick={() => setOpen(false)}
                                    className="text-rose-800 hover:text-rose-900 font-medium transition-colors transition-transform duration-300 hover:scale-110"
                                >
                                    Experience
                                </Link>
                                <Link
                                    to="/"
                                    hash="projects"
                                    onClick={() => setOpen(false)}
                                    className="text-rose-800 hover:text-rose-900 font-medium transition-colors transition-transform duration-300 hover:scale-110"
                                >
                                    Projects
                                </Link>
                            </>
                        )}
                        <Link
                            to="/books"
                            onClick={() => setOpen(false)}
                            className="text-rose-800 hover:text-rose-900 font-medium transition-colors [&.active]:text-rose-900 [&.active]:font-bold transition-transform duration-300 hover:scale-110"
                        >
                            Books
                        </Link>
                        <button
                            onClick={toggleUgly}
                            className={`px-3 py-1 rounded-lg font-medium transition-all transition-transform duration-300 hover:scale-110 ${isUgly
                                ? 'bg-lime-300 text-black border-2 border-pink-500 hover:bg-pink-400'
                                : 'bg-rose-200 text-rose-800 border-2 border-rose-300 hover:bg-rose-300'
                                }`}
                            title="Toggle ugly mode"
                        >
                            {isUgly ? 'Return' : ''}
                        </button>
                    </div>
                </div>
                {/* mobile dropdown content */}
                {open && (
                    <div className="sm:hidden mt-2 flex flex-col gap-2 bg-pink-100/95 p-3 rounded-lg border border-pink-200">
                        {isHome ? (
                            <>
                                <button
                                    onClick={() => {
                                        scrollToSection('about')
                                        setOpen(false)
                                    }}
                                    className="text-rose-800 hover:text-rose-900 font-medium text-left"
                                >
                                    About
                                </button>
                                <button
                                    onClick={() => {
                                        scrollToSection('experience')
                                        setOpen(false)
                                    }}
                                    className="text-rose-800 hover:text-rose-900 font-medium text-left"
                                >
                                    Experience
                                </button>
                                <button
                                    onClick={() => {
                                        scrollToSection('projects')
                                        setOpen(false)
                                    }}
                                    className="text-rose-800 hover:text-rose-900 font-medium text-left"
                                >
                                    Projects
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/"
                                    hash="about"
                                    onClick={() => setOpen(false)}
                                    className="text-rose-800 hover:text-rose-900 font-medium"
                                >
                                    About
                                </Link>
                                <Link
                                    to="/"
                                    hash="experience"
                                    onClick={() => setOpen(false)}
                                    className="text-rose-800 hover:text-rose-900 font-medium"
                                >
                                    Experience
                                </Link>
                                <Link
                                    to="/"
                                    hash="projects"
                                    onClick={() => setOpen(false)}
                                    className="text-rose-800 hover:text-rose-900 font-medium"
                                >
                                    Projects
                                </Link>
                            </>
                        )}
                        <Link
                            to="/books"
                            onClick={() => setOpen(false)}
                            className="text-rose-800 hover:text-rose-900 font-medium"
                        >
                            Books
                        </Link>
                        <button
                            onClick={() => {
                                toggleUgly()
                                setOpen(false)
                            }}
                            className={`px-3 py-1 rounded-lg font-medium transition-all w-full text-left ${isUgly
                                ? 'bg-lime-300 text-black border-2 border-pink-500 hover:bg-pink-400'
                                : 'bg-rose-200 text-rose-800 border-2 border-rose-300 hover:bg-rose-300'
                                }`}
                            title="Toggle ugly mode"
                        >
                            {isUgly ? 'Return' : '👓'}
                        </button>
                    </div>
                )}
            </div>
        </nav >
    )
}