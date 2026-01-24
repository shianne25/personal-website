export default function BookCard({ title, author, category, rating, commentary }: {
    title: string
    author: string
    category: string
    rating: number
    commentary: string
}) {
    return (
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-pink-200 p-6 hover:shadow-xl transition-shadow h-56 flex flex-col">
            <div className="flex items-start justify-between mb-3">
                <div className="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-sm">
                    {category}
                </div>
                <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                        <svg
                            key={i}
                            className={`w-4 h-4 ${i < rating ? 'text-rose-400' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    ))}
                </div>
            </div>

            <h3 className="text-xl font-medium text-rose-800 mb-1">{title}</h3>
            <p className="text-sm text-rose-700 mb-3">by {author}</p>

            <div className="mt-auto pt-3 border-t border-pink-100">
                <p className="text-rose-800/80 italic text-xs leading-relaxed line-clamp-2">
                    "{commentary}"
                </p>
                <p className="text-rose-400 text-xs mt-1 font-medium">
                    Click for full review →
                </p>
            </div>
        </div>
    )
}