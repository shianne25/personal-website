import '../styles/ugly-mode.css'

export default function UglyHomePage() {
    return (
        <div className="ugly-mode pt-8 min-h-screen">
            {/* Chaos Text Scattered */}
            <div className="ugly-chaos ugly-chaos-2 absolute top-10 right-20">TOTALLY AWESOME!</div>

            <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 font-['Comic_Sans_MS',_cursive] text-5xl sm:text-8xl hover:skew-x-12" style={{ backgroundColor: '#d6338a' }}>
                hello , welcome to my website!
            </div>
            {/* Hero Section */}
            <section className="ugly-hero-container relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-20 py-20">
                {/* Weird decorative boxes */}

                <div className="text-9xl absolute top-[30%] right-[10%] font-['Comic_Sans_MS',_cursive]">
                    Hello
                </div>
                {/* Main content */}
                <div className="relative z-10 max-w-4xl items-center">
                    {/* Profile */}
                    <div className="mb-12 flex gap-100">
                        <div className="ugly-text text-7xl mr-auto"> Learning web design</div>
                        <div>
                            <img src="/chuu.png" alt="Sparkles" className="w-32 h-32 absolute top-40 left-0 transform translate-x-1/2 translate-y-1/4" />
                        </div>
                        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full mx-auto overflow-hidden border-8 ugly-image-frame"
                            style={{ borderImage: 'linear-gradient(45deg, #ffffff, #ffff00, #00ff00, #0000ff) 1' }}>
                            <img
                                src="/chuu.png"
                                alt="Chuu"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <img src="/chuu.png" alt="Sparkles" className="w-32 h-32 absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2" />
                        </div>
                    </div>

                    {/* Title */}
                    <h1 className="ugly-title mb-6">
                        SHIANNE LIANG
                    </h1>

                    {/* Tagline */}
                    <div className="comicsans-text mb-8 inline-block" style={{ fontSize: '3rem', color: '#ff00ff', textShadow: '2px 2px 0 #000000' }}>
                        What do you think?
                    </div>

                    {/* Social Icons with chaos */}
                    <div className="flex gap-6 mb-8 justify-center flex-wrap">
                        <a href="https://www.linkedin.com/in/shianne-liang-696663254/"
                            target="_blank" rel="noopener noreferrer"
                            className="w-16 h-16 rounded-full flex items-center justify-center transition-transform hover:scale-125 ugly-float"
                            style={{ backgroundColor: '#00ffff', border: '4px solid #ff00ff', boxShadow: '0 0 20px #ffff00' }}>
                            <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                        <a href="mailto:srliang@uwaterloo.ca"
                            className="w-16 h-16 rounded-full flex items-center justify-center transition-transform hover:scale-125 ugly-float"
                            style={{ backgroundColor: '#ffff00', border: '4px solid #ff0000', boxShadow: '0 0 20px #ff00ff', animationDelay: '0.2s' }}>
                            <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </a>
                        <a href="https://github.com/shianne25" target="_blank" rel="noopener noreferrer"
                            className="w-16 h-16 rounded-full flex items-center justify-center transition-transform hover:scale-125 ugly-float"
                            style={{ backgroundColor: '#00ff00', border: '4px solid #0000ff', boxShadow: '0 0 20px #00ffff', animationDelay: '0.4s' }}>
                            <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                    </div>

                    {/* Traits */}
                    <div className="space-y-4 mb-10">
                        <div className="ugly-border text-black font-bold text-lg">
                            🎓 SYDE @ UWATERLOO
                        </div>
                        <div className="ugly-border text-black font-bold text-lg" style={{ backgroundColor: '#ff00ff', color: '#ff08ff' }}>
                            💻 TPM + FULLSTACK DEV
                        </div>
                        <div className="ugly-border text-black font-bold text-lg" style={{ backgroundColor: '#00ffff' }}>
                            🔥 KEWPIE MAYO ENTHUSIAST
                        </div>
                    </div>

                    <div className="comicsans-text text-4xl font-black mb-8" style={{ color: '#ffff00', textShadow: '3px 3px 0 #ff00ff, 6px 6px 0 #00ffff' }}>
                        I think things should be ugly
                    </div>
                </div>
            </section>

            <div className="text-white py-2 overflow-hidden whitespace-nowrap border-y-8 border-double border-yellow-400" style={{ backgroundColor: '#ff0000' }}>
                <div className="animate-marquee inline-block animate-marquee text-6xl font-black">
                    !!! BIGGEST DEALS IN WATERLOO !!! SYDE 2030 !!! KEWPIE MAYO IS 50% OFF !!!&nbsp;
                    !!! BIGGEST DEALS IN WATERLOO !!! SYDE 2030 !!! KEWPIE MAYO IS 50% OFF !!!
                </div>
            </div>

            {/* About Section */}
            <section id="about" className="min-h-screen flex items-center justify-center px-6 py-8">
                <div className="max-w-5xl w-full">
                    <h2 className="ugly-title mb-16 text-center">ABOUT</h2>
                    <div className="comicsans-text text-lg sm:text-xl text-center" style={{ color: '#00ff00', textShadow: '2px 2px 0 #ff0000' }}>
                        Let's go back to the birth of internet
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="bg-[#ff00ff] min-h-screen flex items-center justify-center px-6 py-8">
                <div className="max-w-5xl w-full">
                    <h2 className="ugly-title mb-16 text-center">EXPERIENCE</h2>

                    <div className="space-y-12">
                        <ExperienceCardUgly
                            period="Jan. 2026 - Present"
                            title="TPM + Fullstack Developer"
                            company="NeedList.org"
                            description="building good things"
                        />
                        <ExperienceCardUgly
                            period="2021 - 2025"
                            title="Assistant Teacher"
                            company="Spirit of Math Schools"
                            description="helping youth love math and problem-solving"
                        />
                        <ExperienceCardUgly
                            period="birth - 2021"
                            title="Locked in Sigma"
                            company="Home"
                            description="worked to be where I am today"
                        />
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-8">
                <div className="max-w-6xl w-full">
                    <h2 className="ugly-title mb-16 text-center">PROJECTS</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <ProjectCardUgly
                            title="GeekSafe."
                            description="A mobile app that uses contactless scanning (Presage) and Gemini 2.0 Flash to monitor vitals and assess substance-related risks. Built on a React Native frontend and FastAPI backend to deliver real-time, AI-driven health guidance without the need for wearables."
                            image="image0.jpeg"
                            link="https://devpost.com/software/geeksafe"
                        />
                        <ProjectCardUgly
                            title="Our Next Move"
                            description="Dance workshop connecting vulnerable youth to community resources such as 360Kids, CICS, and Routes Newmarket."
                            image="onm.png"
                            link="https://www.instagram.com/ournextmove2025?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                        />
                        <ProjectCardUgly
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

function ExperienceCardUgly({ period, title, company, description }: {
    period: string
    title: string
    company: string
    description: string
}) {
    return (
        <div className="ugly-card p-8 transform -rotate-2">
            <div className="text-black font-black mb-2 text-lg" style={{ color: '#ff0000', textShadow: '2px 2px 0 #ffff00' }}>
                {period.toUpperCase()}
            </div>
            <h3 className="text-3xl font-black text-black mb-2" style={{ color: '#0000ff', textShadow: '2px 2px 0 #ffff00' }}>
                {title.toUpperCase()}
            </h3>
            <div className="text-xl font-black text-black mb-4" style={{ color: '#00ff00' }}>
                {company.toUpperCase()}
            </div>
            <p className="text-lg font-bold text-black">
                {description.toUpperCase()}
            </p>
        </div>
    )
}

function ProjectCardUgly({ title, description, image, link }: {
    title: string
    description: string
    image: string
    link: string
}) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="block transform hover:scale-105 transition-transform">
            <div className="ugly-card p-6 h-full" style={{ backgroundColor: '#ffff00', transform: 'rotate(3deg)' }}>
                <div className="mb-4 w-full h-48 rounded-lg overflow-hidden border-4" style={{ borderColor: '#ff0000', backgroundColor: '#00ffff' }}>
                    <img src={image} alt={title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-black mb-3 text-black" style={{ textShadow: '2px 2px 0 #ff00ff' }}>
                    {title.toUpperCase()}
                </h3>
                <p className="text-sm font-bold text-black">
                    {description.toUpperCase()}
                </p>
            </div>
        </a>
    )
}
