import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects')({
    component: Projects,
})

function Projects() {
    return (
        <div className="p-2">
            <h1 className="text-3xl font-bold">My Projects</h1>
            <p>Showcase your work here...</p>
        </div>
    )
}