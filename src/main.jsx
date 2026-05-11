import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createRouter, createRoute, createRootRoute, RouterProvider } from '@tanstack/react-router'
import Index from "./routes/index"
import './index.css'

const rootRoute = createRootRoute()

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index,
})

const routeTree = rootRoute.addChildren([indexRoute])
const router = createRouter({ routeTree })

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)