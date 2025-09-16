import { useState } from "react"
import UserInfo from "./components/UserInfo"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserInfo />
    </>
  )
}

export default App
