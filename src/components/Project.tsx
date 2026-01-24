export default function ProjectCard({ title, description, image, link }: {
    title: string
    description: string
    image: string
    link?: string
}) {
    return (
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-pink-200 overflow-hidden hover:shadow-xl transition-shadow">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={image} alt={title} className="w-full h-64 object-cover" />
                <div className="p-8">
                    <h3 className="text-3xl font-medium text-rose-800 mb-3">{title}</h3>
                    <p className="text-lg text-rose-700">{description}</p>
                </div>
            </a>
        </div>
    )
}