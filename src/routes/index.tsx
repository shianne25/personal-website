// src/routes/index.tsx
import { createFileRoute } from '@tanstack/react-router'
import ExperienceCard from '../components/Experience'
import ProjectCard from '../components/Project'

export const Route = createFileRoute('/')({
    component: HomePage,
})

function HomePage() {
    return (
        <div className="pt-8 bg-pink-50">

            {/* Hero Section */}
            <section className="min-h-screen flex flex-col items-start md:items-center px-4 sm:px-6 lg:px-20 py-20">
                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left: Unicorn Circle
                    <div className="flex justify-center">
                        <div className="w-96 h-96 rounded-full bg-pink-200 flex items-center justify-center">
                            <span className="text-9xl">🦄</span>
                        </div>
                    </div> */}

                    {/* Left: Chuu Circle */}
                    <div className="flex justify-center mt-0 lg:mt-0 lg:-translate-y-12">
                        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-pink-200 flex items-center justify-center overflow-hidden border-8 border-white shadow-lg">
                            <img
                                src="/chuu.png"
                                alt="Chuu"
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                            />
                        </div>
                    </div>

                    {/* Right: Info */}
                    <div className="w-full lg:-mt-2">
                        <h1 className="text-4xl md:text-7xl font-light text-rose-800 mb-4 md:mb-6">
                            Shianne Liang
                        </h1>
                        <p className="text-xl md:text-3xl text-rose-700 mb-5 md:mb-6 font-light">
                            be epic, always.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-4 mb-6">
                            <a href="https://www.linkedin.com/in/shianne-liang-696663254/"
                                target="_blank" rel="noopener noreferrer"
                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-pink-200 flex items-center justify-center hover:bg-pink-300 transition-colors">
                                <svg className="w-8 h-8 text-rose-800" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            <a href="mailto:srliang@uwaterloo.ca" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-pink-200 flex items-center justify-center hover:bg-pink-300 transition-colors">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-rose-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </a>
                            <a href="https://github.com/shianne25" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-pink-200 flex items-center justify-center hover:bg-pink-300 transition-colors">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-rose-800" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                        </div>

                        {/* Traits */}
                        <div className="space-y-3 mb-10">
                            <p className="text-lg sm:text-2xl text-rose-800">syde @ uwaterloo</p>
                            <p className="text-lg sm:text-2xl text-rose-800">tpm + fullstack dev</p>
                            <p className="text-lg sm:text-2xl text-rose-800">kewpie mayo enthusiast</p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="bg-white/50 backdrop-blur-sm rounded-2xl border border-pink-200 p-6 text-center">
                                <div className="text-3xl sm:text-4xl font-light text-rose-800 mb-2">100%</div>
                                <div className="text-sm sm:text-base text-rose-700">Happiness</div>
                            </div>
                            <div className="bg-white/50 backdrop-blur-sm rounded-2xl border border-pink-200 p-6 text-center">
                                <div className="text-3xl sm:text-4xl font-light text-rose-800 mb-2">18</div>
                                <div className="text-sm sm:text-base text-rose-700">Years of Epic</div>
                            </div>
                            <div className="bg-white/50 backdrop-blur-sm rounded-2xl border border-pink-200 p-6 text-center">
                                <div className="text-3xl sm:text-4xl font-light text-rose-800 mb-2">2+</div>
                                <div className="text-sm sm:text-base text-rose-700">Projects</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-10 left-1/2 lg:left-1/4 transform -translate-x-1/2">
                    <svg className="w-8 h-8 text-rose-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="min-h-screen flex items-center justify-center px-6 py-2">
                <div className="max-w-5xl w-full">
                    <h2 className="text-4xl md:text-6xl font-light text-rose-800 mb-16 text-center">About</h2>
                    <div className="bg-white/70 backdrop-blur-sm rounded-3xl border border-pink-200 p-12">
                        <p className="text-2xl text-rose-800 leading-relaxed mb-8">
                            Hello! I'm Shianne.
                        </p>
                        <p className="text-2xl text-rose-800 leading-relaxed">
                            Gonna figure out.
                        </p>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-8">
                <div className="max-w-5xl w-full">
                    <h2 className="text-4xl md:text-6xl font-light text-rose-800 mb-16 text-center">Experience</h2>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-rose-300"></div>

                        <div className="space-y-12">
                            <ExperienceCard
                                period=" Jan. 2026 - Present"
                                title="TPM + Fullstack Developer"
                                company="NeedList.org"
                                description="building good things"
                            />
                            <ExperienceCard
                                period="2021 - 2025"
                                title="Assistant Teacher"
                                company="Spirit of Math Schools"
                                description="helping youth love math and problem-solving"
                            />
                            <ExperienceCard
                                period="birth - 2021"
                                title="Locked in Sigma"
                                company="Home"
                                description="worked to be where I am today"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-8">
                <div className="max-w-6xl w-full">
                    <h2 className="text-4xl md:text-6xl font-light text-rose-800 mb-16 text-center">Projects</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <ProjectCard
                            title="GeekSafe."
                            description="A mobile app that uses contactless scanning (Presage) and Gemini 2.0 Flash to monitor vitals and assess substance-related risks. Built on a React Native frontend and FastAPI backend to deliver real-time, AI-driven health guidance without the need for wearables."
                            image="image0.jpeg"
                            link="https://devpost.com/software/geeksafe"
                        />
                        <ProjectCard
                            title="Our Next Move"
                            description="Dance workshop connecting vulnerable youth to community resources such as 360Kids, CICS, and Routes Newmarket."
                            image="onm.png"
                            link="https://www.instagram.com/ournextmove2025?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                        />
                        <ProjectCard
                            title="Exploding Kittens Digital"
                            description="A digital adaptation of the popular card game, developed using Java and GUI frameworks."
                            image="kittens.avif"
                            link='https://github.com/shianne25/Exploding-Kittens-Project'
                        />
                    </div>
                </div>
            </section>

        </div>
    )
}

// function ExperienceCard({ period, title, company, description }: {
//     period: string
//     title: string
//     company: string
//     description: string
// }) {
//     return (
//         <div className="relative pl-20">
//             {/* Timeline dot */}
//             <div className="absolute left-3.5 top-2 w-5 h-5 rounded-full bg-rose-400 border-4 border-pink-50"></div>

//             <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-pink-200 p-8">
//                 <div className="text-rose-600 font-medium mb-2">{period}</div>
//                 <h3 className="text-3xl font-medium text-rose-800 mb-1">{title}</h3>
//                 <div className="text-xl text-rose-700 mb-4">{company}</div>
//                 <p className="text-lg text-rose-800">{description}</p>
//             </div>
//         </div>
//     )
// }
