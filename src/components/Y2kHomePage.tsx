import { useState, useEffect, useRef } from 'react'
import '../styles/ugly-mode.css'
import { allBooks } from '../book-reviews/bookReviews' // Ensure this path is correct
import BookCard from './Book';

export interface Book {
    title: string;
    author: string;
    category: string;
    rating: number;
    commentary: string;
}

type TabKey = 'about' | 'experience' | 'projects' | 'books'

const tracks = [
    { title: "Ouroborus", artist: "Maiorca", duration: 200, color: ["#ff6600", "#ffcc00", "#ff3300"], url: "/track1.m4a" },
    { title: "You Might", artist: "g0nny ft. SHIRT", duration: 183, color: ["#8800ff", "#cc44ff", "#440088"], url: "/track2.m4a" },
    { title: "I Won't Cry Anymore", artist: "Marvin Gaye", duration: 173, color: ["#0055cc", "#44aaff", "#003399"], url: "/track3.m4a" },
    { title: "Paglaho", artist: "Midday Wednesday", duration: 282, color: ["#cc0033", "#ff4466", "#880022"], url: "/track4.m4a" },
    { title: "RIPCORD", artist: "greek", duration: 163, color: ["#006644", "#00cc88", "#003322"], url: "/track5.m4a" },
]

// Module-level singleton: loads Spotify IFrame API exactly once across all mounts
// let _spotifyApiPromise: Promise<unknown> | null = null
// function loadSpotifyApi(): Promise<unknown> {
//     if (_spotifyApiPromise) return _spotifyApiPromise
//     _spotifyApiPromise = new Promise((resolve) => {
//         if ((window as any).SpotifyIframeApi) { resolve((window as any).SpotifyIframeApi); return }
//         const prev = (window as any).onSpotifyIframeApiReady
//             ; (window as any).onSpotifyIframeApiReady = (IFrameAPI: unknown) => {
//                 ; (window as any).SpotifyIframeApi = IFrameAPI
//                 if (prev) prev(IFrameAPI)
//                 resolve(IFrameAPI)
//             }
//         const script = document.createElement('script')
//         script.src = 'https://open.spotify.com/embed/iframe-api/v1'
//         script.async = true
//         document.body.appendChild(script)
//     })
//     return _spotifyApiPromise
// }

const tabLabels: Record<TabKey, string> = {
    about: 'About Me',
    experience: 'Experience Timeline',
    projects: 'Featured Projects',
    books: 'Book & Learning Corner',
}

export default function Y2kHomePage() {
    const [activeTab, setActiveTab] = useState<TabKey>('about')

    const audioRef = useRef<HTMLAudioElement>(new Audio(tracks[0].url))

    const [searchQuery, setSearchQuery] = useState('')
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);
    const filteredBooks = allBooks.filter(book =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase())
    )
    const [isLoading, setIsLoading] = useState(true);
    const [loadingText, setLoadingText] = useState<string[]>([]);

    const [currentTrackIdx, setCurrentTrackIdx] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [elapsed, setElapsed] = useState(0)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const tickerRef = useRef<ReturnType<typeof setInterval> | null>(null)
    const vizFrameRef = useRef<number | null>(null)
    const barsRef = useRef<number[]>(Array(18).fill(0).map(() => Math.random()))
    const barTargetsRef = useRef<number[]>(Array(18).fill(0).map(() => Math.random()))
    const isPlayingRef = useRef(false)
    const currentTrackIdxRef = useRef(0)

    const fmtTime = (s: number) => {
        return Math.floor(s / 60) + ':' + (s % 60 < 10 ? '0' : '') + Math.floor(s % 60)
    }

    const startPlay = () => {
        setIsPlaying(true)
        isPlayingRef.current = true
        if (tickerRef.current) clearInterval(tickerRef.current)
        startViz()
    }

    const stopPlay = () => {
        setIsPlaying(false)
        isPlayingRef.current = false
        if (tickerRef.current) clearInterval(tickerRef.current)
        if (vizFrameRef.current) cancelAnimationFrame(vizFrameRef.current)
    }

    const togglePlay = () => {
        const audio = audioRef.current;
        if (!audio) return;
        if (isPlaying) {
            audio.pause();
            stopPlay();
        } else {
            audio.play().catch(e => console.log("User interaction required", e));
            startPlay();
        }
    }

    const loadTrack = (idx: number) => {
        setCurrentTrackIdx(idx);
        currentTrackIdxRef.current = idx;
        setElapsed(0);
        const audio = audioRef.current;
        if (!audio) return;

        // Stop current viz before switching
        if (vizFrameRef.current) cancelAnimationFrame(vizFrameRef.current);

        audio.src = tracks[idx].url;
        audio.load();
        audio.play()
            .then(() => {
                setIsPlaying(true);
                isPlayingRef.current = true;
                startViz(); // ← always start viz on load
            })
            .catch(err => {
                console.error("Playback failed:", err);
                setIsPlaying(false);
                isPlayingRef.current = false;
            });
    };

    const nextTrack = () => {
        // Use the Ref because it updates instantly, unlike state
        const nextIdx = (currentTrackIdxRef.current + 1) % tracks.length;
        loadTrack(nextIdx);
    };

    const prevTrack = () => {
        const prevIdx = (currentTrackIdxRef.current - 1 + tracks.length) % tracks.length;
        loadTrack(prevIdx);
    };

    const startViz = () => {
        if (!canvasRef.current) return
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const frame = () => {
            if (!isPlayingRef.current) return
            const t = tracks[currentTrackIdxRef.current]
            const colors = t.color
            ctx.clearRect(0, 0, 102, 102)
            ctx.fillStyle = '#001a55'
            ctx.fillRect(0, 0, 102, 102)

            barsRef.current = barsRef.current.map((b, i) => {
                if (Math.random() < 0.1) barTargetsRef.current[i] = 0.15 + Math.random() * 0.85
                return b + (barTargetsRef.current[i] - b) * 0.18
            })

            const bw = 4, gap = 1, n = 18
            const totalW = n * (bw + gap) - gap
            const startX = (102 - totalW) / 2
            barsRef.current.forEach((h, i) => {
                const barH = Math.max(3, Math.floor(h * 70))
                const x = startX + i * (bw + gap)
                const y = 51 - barH / 2
                const grad = ctx.createLinearGradient(x, y, x, y + barH)
                grad.addColorStop(0, colors[0])
                grad.addColorStop(0.5, colors[1])
                grad.addColorStop(1, colors[2])
                ctx.fillStyle = grad
                ctx.fillRect(x, y, bw, barH)
            })

            const now = Date.now() / 1000
            ctx.save()
            ctx.translate(51, 51)
            ctx.rotate(now * 1.2)
            ctx.beginPath();
            (ctx as any).arc(0, 0, 20, 0, Math.PI * 2)
            ctx.strokeStyle = 'rgba(255,200,0,0.25)'
            ctx.lineWidth = 8
            ctx.stroke()
            ctx.beginPath();
            (ctx as any).arc(0, 0, 20, now % (Math.PI * 2), now % (Math.PI * 2) + Math.PI)
            ctx.strokeStyle = colors[0]
            ctx.lineWidth = 2
            ctx.stroke()
            ctx.beginPath();
            (ctx as any).arc(0, 0, 6, 0, Math.PI * 2)
            ctx.fillStyle = '#003399'
            ctx.fill()
            ctx.beginPath();
            (ctx as any).arc(0, 0, 3, 0, Math.PI * 2)
            ctx.fillStyle = '#ffcc00'
            ctx.fill()
            ctx.restore()

            vizFrameRef.current = requestAnimationFrame(frame)
        }
        if (vizFrameRef.current) cancelAnimationFrame(vizFrameRef.current)
        frame()
    }

    useEffect(() => {
        return () => {
            if (tickerRef.current) clearInterval(tickerRef.current)
            if (vizFrameRef.current) cancelAnimationFrame(vizFrameRef.current)
        }
    }, [])

    // Load Spotify IFrame API and create the controller — module-level promise is StrictMode-safe
    // useEffect(() => {
    //     let destroyed = false
    //     loadSpotifyApi().then((IFrameAPI: unknown) => {
    //         if (destroyed || !embedRef.current) return
    //             ; (IFrameAPI as any).createController(
    //                 embedRef.current,
    //                 { uri: `spotify:track:${tracks[0].spotifyId}`, width: 300, height: 80 },
    //                 (EmbedController: any) => {
    //                     if (destroyed) return
    //                     controllerRef.current = EmbedController
    //                     EmbedController.addListener('playback_update', (e: any) => {
    //                         if (destroyed) return
    //                         const { position, isPaused } = e.data
    //                         setElapsed(Math.floor(position / 1000))
    //                         if (isPaused) {
    //                             if (isPlayingRef.current) {
    //                                 isPlayingRef.current = false
    //                                 setIsPlaying(false)
    //                                 if (vizFrameRef.current) cancelAnimationFrame(vizFrameRef.current)
    //                             }
    //                         } else {
    //                             if (!isPlayingRef.current) {
    //                                 isPlayingRef.current = true
    //                                 setIsPlaying(true)
    //                                 startViz()
    //                             }
    //                         }
    //                     })
    //                 }
    //             )
    //     })
    //     return () => { destroyed = true; controllerRef.current = null }
    // }, [])

    const t = tracks[currentTrackIdx]

    useEffect(() => {
        const audio = audioRef.current;

        const handleTimeUpdate = () => {
            setElapsed(Math.floor(audio.currentTime));
        };

        const handleEnded = () => {
            const nextIdx = (currentTrackIdxRef.current + 1) % tracks.length;
            loadTrack(nextIdx);
        };

        audio.addEventListener('timeupdate', handleTimeUpdate); // 4
        audio.addEventListener('ended', handleEnded);

        return () => { // 5
            audio.removeEventListener('timeupdate', handleTimeUpdate);
            audio.removeEventListener('ended', handleEnded);
        };
    }, [])

    useEffect(() => {
        const sequence = [
            "Starting SHIANNE_OS v1.0...",
            "Returning to the birth of the internet...",
            "Loading SHIANNE_OS v1.0...",
            "Establishing Connection...",
            "Welcome to the World Wide Web."
        ];

        let currentLine = 0;
        const interval = setInterval(() => {
            if (currentLine < sequence.length) {
                setLoadingText(prev => [...prev, sequence[currentLine]]);
                currentLine++;
            } else {
                clearInterval(interval);
                setTimeout(() => setIsLoading(false), 800); // Small delay for "logged in" feel
            }
        }, 300); // Speed of the text lines

        return () => clearInterval(interval);
    }, []);

    if (isLoading) {
        return (
            <div className="bios-screen">
                <div className="bios-header">
                    <div className="bios-logo">★</div>
                    <div>Powerful Aura</div>
                </div>
                <div className="bios-content">
                    {loadingText.map((line, i) => (
                        <div key={i} className="bios-line">{line}</div>
                    ))}
                    <div className="bios-cursor">_</div>
                </div>
            </div>
        );
    }

    return (
        <div className="app">
            <div style={{ background: '#d0d8e8', borderBottom: '2px solid #888', padding: '3px 8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '10px', color: '#333', fontFamily: 'Arial', fontWeight: 'bold' }}>Website</span>
                <div style={{ flex: 1, background: '#fff', border: '2px inset #888', padding: '2px 6px', fontSize: '11px', color: '#000033', fontFamily: 'monospace' }}>https://www.shianneliang.me/</div>
                <div style={{ background: 'linear-gradient(180deg,#f0f0f0,#d0d0d0)', border: '2px outset #888', padding: '2px 10px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer', fontFamily: 'Arial' }}>Search!</div>
            </div>

            {/* Top bar */}
            <div className="topbar flex items-center gap-4 px-6 py-3">             <div className="logo-badge">頑張って</div>
                <div className="logo-text">Shianne Website</div>
            </div>

            {/* Banner */}
            <div className="banner">
                <div className="banner-scene">
                    <div className="banner-sky"></div>
                    <div className="ground"></div>
                    <div className="path"></div>
                    <div className="tree" style={{ left: '220px', bottom: '28px' }}><div className="tree-top2"></div><div className="tree-top"></div><div className="tree-trunk"></div></div>
                    <div className="tree" style={{ left: '260px', bottom: '28px' }}><div className="tree-top2"></div><div className="tree-top"></div><div className="tree-trunk"></div></div>
                    <div className="church"><div className="church-steeple"></div><div className="church-roof"></div><div className="church-body"></div></div>
                    <div className="cat-char bouncing-cat-dvd">
                        <img src={"shianne.jpg"} alt="shianne" style={{ width: '100%', height: '85%' }} />
                        {/* <div className="cat-head"><div className="cat-ear-l"></div><div className="cat-ear-r"></div><div className="cat-eye-l"></div><div className="cat-eye-r"></div><div className="cat-nose"></div></div>
                        <div className="cat-body"><div className="cat-belly"></div><div className="cat-tail"></div></div> */}
                    </div>
                </div>
                <div className="banner-text-area">
                    <div className="banner-title">Hello! I'm Shianne!</div>
                    <div className="flex flex-row gap-4 justify-center md:justify-start py-2">
                        {/* <div className="banner-title flex flex-row gap-4 justify-left items-center py-2"> */}
                        {/* LinkedIn - Matching Industrial Grey */}
                        <a
                            href="https://www.linkedin.com/in/shianne-liang-696663254/"
                            target="_blank" rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center 
             bg-[#c0c0c0] border-[4px] border-t-white border-l-white border-b-[#808080] border-r-[#808080] 
             active:border-t-[#808080] active:border-l-[#808080] active:border-b-white active:border-r-white 
             hover:brightness-110"
                        >
                            <svg className="w-7 h-7 text-black p-1 filter drop-shadow-[2px_2px_0px_#ffffff]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>

                        {/* Email - Matching Industrial Grey */}
                        <a
                            href="mailto:srliang@uwaterloo.ca"
                            className="w-8 h-8 flex items-center justify-center 
             bg-[#c0c0c0] border-[4px] border-t-white border-l-white border-b-[#808080] border-r-[#808080] 
             active:border-t-[#808080] active:border-l-[#808080] active:border-b-white active:border-r-white 
             hover:brightness-110"
                        >
                            <svg className="w-7 h-7 text-black p-1 filter drop-shadow-[2px_2px_0px_#ffffff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </a>
                        <a
                            href="https://github.com/shianne25"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center 
             bg-[#c0c0c0] border-[4px] border-t-white border-l-white border-b-[#808080] border-r-[#808080] 
             active:border-t-[#808080] active:border-l-[#808080] active:border-b-white active:border-r-white 
             hover:brightness-110 shadow-lg"
                        >
                            <svg
                                className="w-7 h-7 text-black p-1 filter drop-shadow-[2px_2px_0px_#ffffff]"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                    </div>
                    <div className="banner-sub-title">syde @ uwaterloo <br></br> tpm + fullstack dev @ needlist.org <br></br> kewpie mayo enthusiast</div>
                </div>
            </div>

            {/* Tabs */}
            <div className="tab-row">
                <div className={`tab ${activeTab === 'about' ? 'active' : ''}`} onClick={() => setActiveTab('about')}>About</div>
                <div className={`tab ${activeTab === 'experience' ? 'active' : ''}`} onClick={() => setActiveTab('experience')}>Experience</div>
                <div className={`tab ${activeTab === 'projects' ? 'active' : ''}`} onClick={() => setActiveTab('projects')}>Projects</div>
                <div className={`tab ${activeTab === 'books' ? 'active' : ''}`} onClick={() => setActiveTab('books')}>Books</div>
            </div>

            {/* Layout */}
            <div className="layout">
                {/* SIDEBAR: NOW PLAYING */}
                <div className="sidebar">
                    <div className="np-header">
                        <div className="np-header-dot"></div>
                        <span className="np-header-text">♪ NOW PLAYING</span>
                    </div>

                    <div className="np-art-wrap">
                        <div className="np-art" id="albumArt">
                            <canvas id="vizCanvas" ref={canvasRef} width="102" height="102"></canvas>
                            <div className="np-art-label"><div className="np-art-label-text">track {currentTrackIdx + 1}</div></div>
                        </div>
                    </div>

                    <div className="np-info">
                        <div className="np-track">{t.title}</div>
                        <div className="np-artist">{t.artist}</div>
                    </div>

                    <div className="np-progress-wrap">
                        <div className="np-progress-bar" id="progressBar">
                            <div className="np-progress-fill" style={{ width: (elapsed / t.duration * 100) + '%' }}></div>
                        </div>
                        <div className="np-time-row">
                            <span className="np-time">{fmtTime(elapsed)}</span>
                            <span className="np-time">{fmtTime(t.duration)}</span>
                        </div>
                    </div>

                    <div className="np-controls">
                        <div className="ctrl-btn" onClick={prevTrack} title="Previous">
                            <svg width="12" height="12" viewBox="0 0 12 12"><polygon points="11,2 5,6 11,10" fill="#003399" /><rect x="1" y="2" width="3" height="8" fill="#003399" /></svg>
                        </div>
                        <div className={`ctrl-btn play-btn ${isPlaying ? 'playing' : ''}`} id="playBtn" onClick={togglePlay}>
                            {isPlaying ? (
                                <svg id="pauseIcon" width="14" height="14" viewBox="0 0 14 14"><rect x="3" y="2" width="3" height="10" fill="#fff" /><rect x="8" y="2" width="3" height="10" fill="#fff" /></svg>
                            ) : (
                                <svg id="playIcon" width="14" height="14" viewBox="0 0 14 14"><polygon points="3,2 12,7 3,12" fill="#fff" /></svg>
                            )}
                        </div>
                        <div className="ctrl-btn" onClick={nextTrack} title="Next">
                            <svg width="12" height="12" viewBox="0 0 12 12"><polygon points="1,2 7,6 1,10" fill="#003399" /><rect x="8" y="2" width="3" height="8" fill="#003399" /></svg>
                        </div>
                    </div>


                    <div className="np-playlist-header"><span className="np-playlist-label">▼ PLAYLIST</span></div>
                    <div className="np-playlist" id="playlist">
                        {tracks.map((track, idx) => (
                            <div key={idx} className={`pl-item ${idx === currentTrackIdx ? 'active' : ''}`} onClick={() => { loadTrack(idx) }}>
                                <span className="pl-num">{idx === currentTrackIdx && isPlaying ? '♪' : (idx + 1)}</span>
                                <div className="pl-info">
                                    <div className="pl-title">{track.title}</div>
                                </div>
                                <span className="pl-dur">{fmtTime(track.duration)}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* MAIN CONTENT */}
                <div className="main">
                    {activeTab === 'about' && (
                        <div>
                            <div className="section-header">
                                <div className="section-header-dot"></div>
                                <span className="section-header-text">{tabLabels.about}</span>
                            </div>
                            <div className="content-box">
                                <div className="content-box-inner">
                                    <div className="content-body">Hello, I'm Shianne! <br></br> I've got an interest in software development and project management. <br></br> Beyond my laptop, I like to dance, eat and watch the NBA. <br></br> I'm interested in technology, specifically in creating software development solutions. Though innovation is key, I still value the progress that got us here in the first place, hence the old Netscape design. Things should be fun! </div>
                                </div>
                            </div>
                            <div className="notice-box">
                                <div className="notice-header"><span className="notice-tag">NEW</span>April 16th</div>
                                <div className="notice-body"> I know this one headshot of mine is on everything. <span style={{ color: 'blue' }}>I'll get a cooler headshot soon!!</span> <br></br> Also new book review up! It's about Murakami's Hard Boiled Wonderland and the End of the World. Interesting read fun to review. </div>
                            </div>
                            <div className="notice-box">
                                <div className="notice-body">So excited for <span style={{ color: '#cc3300', fontWeight: 'bold' }}>SUMMERLOO</span>. Hehehehe</div>
                            </div>
                        </div>
                    )}
                    {activeTab === 'experience' && (
                        <div>
                            <div className="section-header"><div className="section-header-dot"></div><span className="section-header-text">Experience Timeline</span><span className="section-header-jp">Work</span></div>
                            <div className="content-box"><div className="content-title">Work History</div><div className="grid-cards">
                                <Card title="NeedList.org" subtitle="TPM + Fullstack (2026-now)" details="building good things!" />
                                <Card title="Spirit of Math" subtitle="Assistant Teacher (2021-2025)" details="we love math!" />
                                <Card title="Home" subtitle="Sigma Builder (birth-2021)" details="worked to be where I am today" /></div></div>
                        </div>
                    )}
                    {activeTab === 'projects' && (
                        <div>
                            <div className="section-header"><div className="section-header-dot"></div><span className="section-header-text">Featured Projects</span><span className="section-header-jp">Things I've made!</span></div>
                            <div className="content-box"><div className="content-title">Featured Projects</div><div className="grid-cards">
                                <ProjectCard title="GeekSafe" subtitle="contactless health" details="A mobile app that uses contactless scanning (Presage) and Gemini 2.0 Flash to monitor vitals and assess substance-related risks. Built on a React Native frontend and FastAPI backend to deliver real-time, AI-driven health guidance without the need for wearables." image="/image0.jpeg" link="https://devpost.com/software/geeksafe" />
                                <ProjectCard title="Our Next Move" subtitle="community dance workshop" details="Dance workshop connecting vulnerable youth to community resources such as 360Kids, CICS, and Routes Newmarket." image="onm.png" link="https://www.instagram.com/ournextmove2025?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" />
                                <ProjectCard title="Exploding Kittens Digital" subtitle="game build" details="A digital adaptation of the popular card game, developed using Java and GUI frameworks." image="kittens.avif" link="https://github.com/shianne25/Exploding-Kittens-Project" /></div></div>
                        </div>
                    )}
                    {activeTab === 'books' && (
                        <div className="animate-in fade-in duration-300">
                            <div className="section-header">
                                <div className="section-header-dot"></div>
                                <span className="section-header-text">Book & Learning Corner</span>
                            </div>

                            {/* Y2K Search Bar */}
                            <div className="mb-6 p-4 bg-[#c0c0c0] border-2 border-inset border-white shadow-inner flex flex-col sm:flex-row gap-4 items-center">
                                <label className="text-xs font-bold uppercase text-[#000080]">Search Database:</label>
                                <input
                                    type="text"
                                    placeholder="Find a title..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="flex-1 bg-white border-2 border-b-white border-r-white border-t-[#808080] border-l-[#808080] px-2 py-1 text-sm outline-none focus:bg-yellow-50"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {filteredBooks.map((book, index) => (
                                    <div key={index} onClick={() => setSelectedBook(book)}>
                                        <BookCard {...book} />
                                    </div>
                                ))}
                            </div>

                            {filteredBooks.length === 0 && (
                                <div className="text-center py-10 border-2 border-dashed border-[#808080] text-[#808080] font-bold italic">
                                    NO DATA FOUND FOR: "{searchQuery}"
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            <div className="footer">
                <span className="footer-text"> personal website inspired by sampopark & old Netscape layouts</span>
                <span className="footer-copyright">Built with React, TanStack, Spotify Embed</span>
            </div>

            {
                selectedBook && (
                    <div
                        className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/50 backdrop-pixelate"
                        onClick={() => setSelectedBook(null)}
                    >
                        <div
                            className="bg-[#c0c0c0] border-[4px] border-t-white border-l-white border-b-black border-r-black p-1 max-w-lg w-full shadow-[10px_10px_0px_rgba(0,0,0,0.5)]"
                            onClick={e => e.stopPropagation()}
                        >
                            {/* Window Header */}
                            <div className="bg-[#000080] px-2 py-1 flex justify-between items-center mb-4">
                                <span className="text-white text-xs font-bold">Review_Detail.exe</span>
                                <button onClick={() => setSelectedBook(null)} className="bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-black border-r-black px-2 text-xs font-bold active:border-inset">X</button>
                            </div>

                            <div className="p-4 bg-white border-2 border-inset border-[#808080]">
                                <h2 className="text-3xl font-black text-[#000080] leading-none mb-1">{selectedBook.title}</h2>
                                <p className="text-lg font-bold text-rose-800 mb-4">by {selectedBook.author}</p>
                                <div className="bg-yellow-100 p-3 border border-yellow-300">
                                    <h4 className="text-[10px] uppercase font-black mb-1">Internal Commentary:</h4>
                                    <p className="text-sm italic leading-relaxed text-black">"{selectedBook.commentary}"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div >
    )
}

function Card({ title, subtitle, details }: { title: string; subtitle: string; details: string }) {
    return (
        <div className="grid-card">
            <div className="grid-card-title">{title}</div>
            <div className="grid-card-sub">{subtitle}</div>
            <div className="grid-card-body">{details}</div>
        </div>
    )
}

function ProjectCard({ title, subtitle, details, link, image }: {
    title: string;
    subtitle: string;
    details: string;
    image?: string;
    link?: string;
}) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="y2k-card-anchor">
            <div className="y2k-card">
                {/* Window Header */}
                <div className="y2k-card-header">
                    <span className="y2k-header-text">{title}</span>
                    <div className="y2k-header-controls">
                        <div className="y2k-control-btn">_</div>
                        <div className="y2k-control-btn">X</div>
                    </div>
                </div>

                {/* Image "Monitor" Section */}
                {image && (
                    <div className="y2k-card-image-wrapper">
                        <img src={image} alt={title} className="y2k-card-img" />
                    </div>
                )}

                {/* Content Area */}
                <div className="y2k-card-content">
                    <div className="grid-card-sub">{subtitle}</div>
                    <div className="grid-card-body">{details}</div>
                </div>

                {/* Status Bar */}
                <div className="y2k-card-footer">
                    <span className="footer-status">Status: Ready</span>
                    <span className="footer-kb">1.2MB</span>
                </div>
            </div>
        </a>
    )
}
