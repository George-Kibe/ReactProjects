import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignInPage from './auth/sign-in'
import HomePage from './screens/home'
import Dashboard from './screens/dashboard'
import { ClerkProvider } from '@clerk/clerk-react'
import EditResume from './screens/dashboard/resume/[resumeId]/edit/index.jsx'
import ViewResume from './screens/my-resume/[resumeId]/view/index.jsx'
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
console.log("Publishable key: ", PUBLISHABLE_KEY)

// Router instance
const router = createBrowserRouter([
  {
    // path: '/',
    element: <App />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/dashboard/resume/:resumeId/edit',
        element: <EditResume />,
      }
    ],
  },
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/auth/sign-in',
    element: <SignInPage />,
  },
  {
    path:'/my-resume/:resumeId/view',
    element:<ViewResume/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>,
)
