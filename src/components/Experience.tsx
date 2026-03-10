export default function ExperienceCard({ period, title, company, description }: {
    period: string
    title: string
    company: string
    description: string
}) {
    return (
        <div className="relative pl-5 md:pl-20">
            {/* Timeline dot */}
            <div className="absolute left-3.5 top-2 w-4 h-4 md:w-5 md:h-5 rounded-full bg-rose-400 border-3 md:border-4 border-pink-50"></div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-pink-200 p-5 md:p-8">
                <div className="text-sm sm:text-base text-rose-600 font-medium mb-2">{period}</div>
                <h3 className="text-xl sm:text-3xl font-medium text-rose-800 mb-1">{title}</h3>
                <div className="text-lg sm:text-xl text-rose-700 mb-4">{company}</div>
                <p className="text-base sm:text-lg text-rose-800">{description}</p>
            </div>
        </div>
    )
}