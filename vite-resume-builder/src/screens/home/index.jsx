import Header from "@/components/custom/Header"
import { UserButton } from "@clerk/clerk-react"

const HomePage = () => {
  return (
    <div>
      <Header />
      <UserButton />
    </div>
  )
}

export default HomePage