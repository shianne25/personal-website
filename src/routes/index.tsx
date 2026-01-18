import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
    component: Home,
})

function Home() {
    return (
        <div className="p-2">
            <h1 className="text-3xl font-bold">Welcome to My Website</h1>
            <p>This is the home page</p>
        </div>
    )
}