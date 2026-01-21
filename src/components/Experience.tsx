export default function ExperienceCard({ period, title, company, description }: {
    period: string
    title: string
    company: string
    description: string
}) {
    return (
        <div className="relative pl-20">
            {/* Timeline dot */}
            <div className="absolute left-3.5 top-2 w-5 h-5 rounded-full bg-rose-400 border-4 border-pink-50"></div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-pink-200 p-8">
                <div className="text-rose-600 font-medium mb-2">{period}</div>
                <h3 className="text-3xl font-medium text-rose-800 mb-1">{title}</h3>
                <div className="text-xl text-rose-700 mb-4">{company}</div>
                <p className="text-lg text-rose-800">{description}</p>
            </div>
        </div>
    )
}