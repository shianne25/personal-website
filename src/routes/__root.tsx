// src/routes/__root.tsx
import { createRootRoute, Outlet } from '@tanstack/react-router'
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Navigation from '../components/Navigation'
import { UglyModeProvider } from '../context/UglyModeContext'

export const Route = createRootRoute({
    component: () => (
        <UglyModeProvider>
            <div className="min-h-screen bg-white">
                <Navigation />
                <Outlet />
            </div>
        </UglyModeProvider>
    ),
})