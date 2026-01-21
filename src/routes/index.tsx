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
            <section className="min-h-screen flex items-center px-6 lg:px-20 py-20">
                <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Unicorn Circle
                    <div className="flex justify-center">
                        <div className="w-96 h-96 rounded-full bg-pink-200 flex items-center justify-center">
                            <span className="text-9xl">🦄</span>
                        </div>
                    </div> */}

                    {/* Left: Chuu Circle */}
                    <div className="flex justify-center -mt-32">
                        <div className="w-96 h-96 rounded-full bg-pink-200 flex items-center justify-center overflow-hidden border-8 border-white shadow-lg">
                            <img
                                src="/chuu.png"
                                alt="Chuu"
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                            />
                        </div>
                    </div>

                    {/* Right: Info */}
                    <div className="lg:-mt-8">
                        <h1 className="text-7xl font-light text-rose-800 mb-6">
                            Shianne Liang
                        </h1>
                        <p className="text-3xl text-rose-700 mb-10 font-light">
                            Creating beautiful digital experiences
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-4 mb-12">
                            <a href="https://www.linkedin.com/in/shianne-liang-696663254/"
                                target="_blank" rel="noopener noreferrer"
                                className="w-16 h-16 rounded-full bg-pink-200 flex items-center justify-center hover:bg-pink-300 transition-colors">
                                <svg className="w-8 h-8 text-rose-800" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            <a href="mailto:srliang@uwaterloo.ca" className="w-16 h-16 rounded-full bg-pink-200 flex items-center justify-center hover:bg-pink-300 transition-colors">
                                <svg className="w-8 h-8 text-rose-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </a>
                            <a href="https://github.com/shianne25" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full bg-pink-200 flex items-center justify-center hover:bg-pink-300 transition-colors">
                                <svg className="w-8 h-8 text-rose-800" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                        </div>

                        {/* Traits */}
                        <div className="space-y-3 mb-12">
                            <p className="text-2xl text-rose-800">Designer & Developer</p>
                            <p className="text-2xl text-rose-800">Creative Thinker</p>
                            <p className="text-2xl text-rose-800">Problem Solver</p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-white/50 backdrop-blur-sm rounded-2xl border border-pink-200 p-6 text-center">
                                <div className="text-4xl font-light text-rose-800 mb-2">10+</div>
                                {/* <div className="text-rose-700">Happiness</div> */}
                                <img src="https://assets.change.org/photos/7/ao/ua/JIaoUaSpSDVKnzR-800x450-noPad.jpg?1660224338" alt="Shianne Liang" className="rounded-2xl border border-pink-200 shadow-lg w-full max-w-2xl h-auto" />
                            </div>
                            <div className="bg-white/50 backdrop-blur-sm rounded-2xl border border-pink-200 p-6 text-center">
                                <div className="text-4xl font-light text-rose-800 mb-2">18</div>
                                {/* <div className="text-rose-700">Years</div> */}
                                <img src="https://assets.change.org/photos/7/ao/ua/JIaoUaSpSDVKnzR-800x450-noPad.jpg?1660224338" alt="Shianne Liang" className="rounded-2xl border border-pink-200 shadow-lg w-full max-w-2xl h-auto" />
                            </div>
                            <div className="bg-white/50 backdrop-blur-sm rounded-2xl border border-pink-200 p-6 text-center">
                                <div className="text-4xl font-light text-rose-800 mb-2">20+</div>
                                {/* <div className="text-rose-700">Days</div> */}
                                <img src="https://assets.change.org/photos/7/ao/ua/JIaoUaSpSDVKnzR-800x450-noPad.jpg?1660224338" alt="Shianne Liang" className="rounded-2xl border border-pink-200 shadow-lg w-full max-w-2xl h-auto" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                    <svg className="w-8 h-8 text-rose-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
                <div className="max-w-5xl w-full">
                    <h2 className="text-6xl font-light text-rose-800 mb-16 text-center">About</h2>
                    <div className="bg-white/70 backdrop-blur-sm rounded-3xl border border-pink-200 p-12">
                        <p className="text-2xl text-rose-800 leading-relaxed mb-8">
                            Hello! I'm Shianne, a passionate designer and developer who loves creating beautiful
                            and functional digital experiences. With a keen eye for aesthetics and a strong
                            technical foundation, I bring ideas to life through code and design.
                        </p>
                        <p className="text-2xl text-rose-800 leading-relaxed">
                            When I'm not coding or designing, you can find me exploring new technologies,
                            reading books, or working on creative side projects. I believe in the power of
                            continuous learning and always strive to push the boundaries of what's possible.
                        </p>
                    </div>
                </div>
            </section>

            {/*CHUUUUUUCHUUUCHUUU */}
            <div className="flex justify-center">
                <img src="https://assets.change.org/photos/7/ao/ua/JIaoUaSpSDVKnzR-800x450-noPad.jpg?1660224338" alt="Shianne Liang" className="rounded-2xl border border-pink-200 shadow-lg w-full max-w-2xl h-auto" />
            </div>

            {/* Experience Section */}
            <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-20">
                <div className="max-w-5xl w-full">
                    <h2 className="text-6xl font-light text-rose-800 mb-16 text-center">Experience</h2>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-rose-300"></div>

                        <div className="space-y-12">
                            <ExperienceCard
                                period="2023 - Present"
                                title="Senior Designer"
                                company="Creative Studio"
                                description="Leading design projects and mentoring junior designers"
                            />
                            <ExperienceCard
                                period="2021 - 2023"
                                title="Full Stack Developer"
                                company="Tech Company"
                                description="Built scalable web applications using modern technologies"
                            />
                            <ExperienceCard
                                period="2007 - 2021"
                                title="silly baka"
                                company="Digital Agency"
                                description="Designed user interfaces and conducted user research"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
                <div className="max-w-6xl w-full">
                    <h2 className="text-6xl font-light text-rose-800 mb-16 text-center">Projects</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <ProjectCard
                            title="Modern Workspace"
                            description="A beautiful web application with modern design and intuitive user experience"
                            image="https://assets.change.org/photos/7/ao/ua/JIaoUaSpSDVKnzR-800x450-noPad.jpg?1660224338"
                        />
                        <ProjectCard
                            title="Mobile Design System"
                            description="Mobile-first responsive design system with reusable components"
                            image="https://assets.change.org/photos/7/ao/ua/JIaoUaSpSDVKnzR-800x450-noPad.jpg?1660224338"
                        />
                        <ProjectCard
                            title="E-commerce Platform"
                            description="Full-featured online shopping experience with seamless checkout"
                            image="https://assets.change.org/photos/7/ao/ua/JIaoUaSpSDVKnzR-800x450-noPad.jpg?1660224338"
                        />
                        <ProjectCard
                            title="Portfolio Website"
                            description="Personal portfolio showcasing creative work and design skills"
                            image="https://assets.change.org/photos/7/ao/ua/JIaoUaSpSDVKnzR-800x450-noPad.jpg?1660224338"
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
