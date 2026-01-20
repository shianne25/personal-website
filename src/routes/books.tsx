// src/routes/books.tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/books')({
    component: BooksPage,
})

function BooksPage() {
    return (
        <div className="pt-20 min-h-screen bg-pink-50 px-6 py-20">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-6xl font-light text-rose-800 mb-16 text-center">Books</h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <BookCard
                        title="The Design of Everyday Things"
                        author="Don Norman"
                        category="Design"
                        rating={5}
                    />
                    <BookCard
                        title="Clean Code"
                        author="Robert C. Martin"
                        category="Programming"
                        rating={5}
                    />
                    <BookCard
                        title="Atomic Habits"
                        author="James Clear"
                        category="Self-Help"
                        rating={4}
                    />
                    <BookCard
                        title="Refactoring UI"
                        author="Adam Wathan & Steve Schoger"
                        category="Design"
                        rating={5}
                    />
                    <BookCard
                        title="The Pragmatic Programmer"
                        author="David Thomas & Andrew Hunt"
                        category="Programming"
                        rating={5}
                    />
                    <BookCard
                        title="Deep Work"
                        author="Cal Newport"
                        category="Productivity"
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

function BookCard({ title, author, category, rating }: {
    title: string
    author: string
    category: string
    rating: number
}) {
    return (
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-pink-200 p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-start justify-between mb-4">
                <div className="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-sm">
                    {category}
                </div>
                <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                        <svg
                            key={i}
                            className={`w-5 h-5 ${i < rating ? 'text-rose-400' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    ))}
                </div>
            </div>
            <h3 className="text-2xl font-medium text-rose-800 mb-2">{title}</h3>
            <p className="text-rose-700">{author}</p>
        </div>
    )
}