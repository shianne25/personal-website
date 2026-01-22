import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react' // Step 1: Add this
import BookCard from '../components/Book'

export const Route = createFileRoute('/books')({
    component: BooksPage,
})
interface Book {
    title: string;
    author: string;
    category: string;
    rating: number;
    commentary: string;
}
function BooksPage() {
    // Step 2: Create the search "memory" (state)
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);

    // Step 3: Move your books into an Array
    const allBooks = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            category: "Design",
            rating: 5,
            commentary: "skfuhsdkf"
        },
        {
            title: "Clean Code",
            author: "Robert C. Martin",
            category: "Programming",
            rating: 5,
            commentary: "skfuhsdkf"
        },
        {
            title: "Atomic Habits",
            author: "James Clear",
            category: "Self-Help",
            rating: 4,
            commentary: "skfuhsdkf"
        },
        {
            title: "Refactoring UI",
            author: "Adam Wathan & Steve Schoger",
            category: "Design",
            rating: 5,
            commentary: "skfuhsdkf"
        },
        {
            title: "The Pragmatic Programmer",
            author: "David Thomas & Andrew Hunt",
            category: "Programming",
            rating: 5,
            commentary: "skfuhsdkf"
        }
    ]

    // Step 4: Logic to filter books as you type
    const filteredBooks = allBooks.filter(book =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <div className="pt-20 min-h-screen bg-pink-50 px-6 py-20">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-6xl font-light text-rose-800 mb-16 text-center">Books</h1>

                {/* Header Row: Bubble on Left, Search on Right */}
                <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex">
                        <div className="flex items-center gap-3 px-6 py-2 rounded-full border-2 border-rose-200 bg-white/50">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                            <h3 className="text-xl font-medium text-rose-800">Current Read: THE MONGOLS</h3>
                        </div>
                    </div>

                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery('')}
                            className="absolute right-10 text-rose-300 hover:text-rose-500 transition-colors"
                            aria-label="Clear search"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    )}

                    {/* Step 5: The Search Bar */}
                    <div className="relative w-full md:w-72">
                        <input
                            type="text"
                            placeholder="Search title or author..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-5 py-2.5 rounded-2xl border-2 border-rose-200 bg-white/50 text-rose-800 placeholder:text-rose-300 focus:outline-none focus:border-rose-400 transition-all"
                        />
                        <div className="absolute right-4 top-3 text-rose-300">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Step 6: Map through the filtered results */}
                {/* <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {filteredBooks.map((book, index) => (
                        <BookCard
                            key={index}
                            title={book.title}
                            author={book.author}
                            category={book.category}
                            rating={book.rating}
                            commentary={book.commentary}
                        />
                    ))}
                </div> */}
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {filteredBooks.map((book, index) => (
                        <div key={index} onClick={() => setSelectedBook(book)} className="cursor-pointer">
                            <BookCard {...book} />
                        </div>
                    ))}
                </div>

                {selectedBook && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-rose-900/20 backdrop-blur-md"
                        onClick={() => setSelectedBook(null)} // Click outside to close
                    >
                        <div
                            className="bg-white rounded-3xl p-10 max-w-lg w-full shadow-2xl border border-pink-100 relative animate-in fade-in zoom-in duration-300"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the card itself
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedBook(null)}
                                className="absolute top-6 right-6 text-rose-300 hover:text-rose-500"
                            >
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="space-y-4">
                                <span className="bg-rose-100 text-rose-800 px-4 py-1 rounded-full text-sm font-medium">
                                    {selectedBook.category}
                                </span>
                                <h2 className="text-4xl font-medium text-rose-800">{selectedBook.title}</h2>
                                <p className="text-2xl text-rose-700">by {selectedBook.author}</p>

                                <div className="py-6 border-t border-pink-50 mt-6">
                                    <h4 className="text-sm uppercase tracking-widest text-rose-400 mb-3 font-bold">My Thoughts</h4>
                                    <p className="text-xl text-rose-800 leading-relaxed italic">
                                        "{selectedBook.commentary}"
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>


            {/* If no books match the search */}
            {filteredBooks.length === 0 && (
                <p className="text-center text-rose-300 py-20 text-xl font-light">
                    No books found matching "{searchQuery}"
                </p>
            )}
        </div>
    )
}