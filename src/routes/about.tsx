import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
    component: About,
})

function About() {
    return (
        <div className="p-2">
            <h1 className="text-3xl font-bold">About Me</h1>
            <p>Tell your story here...</p>
        </div>
    )
}