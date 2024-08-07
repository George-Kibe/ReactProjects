import { Navigate, Outlet } from 'react-router-dom'
import './App.css'
import { useUser } from '@clerk/clerk-react'
import Header from './components/custom/Header';
import { Toaster } from './components/ui/sonner';

function App() {
  const {user, isLoaded, isSignedIn} = useUser();
  console.log("Current User: ", user);

  if (isLoaded && !isSignedIn) {
    return <Navigate to={'/auth/sign-in'} />
  }
  return (
    <>
      <Header />
      <Outlet />
      <Toaster />
    </>
  )
}

export default App
