// src/routes/__root.tsx
import { createRootRoute, Outlet } from '@tanstack/react-router'
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Navigation from '../components/Navigation'
import { DisplayModeProvider } from '../context/DisplayModeContext'

export const Route = createRootRoute({
    component: () => (
        <DisplayModeProvider>
            <div className="min-h-screen bg-white">
                {/* <Navigation /> */}
                <Outlet />
            </div>
        </DisplayModeProvider>
    ),
})