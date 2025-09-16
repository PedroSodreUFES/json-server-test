import UserInfo from "./components/UserInfo"
import NewUserForm from "./components/NewUserForm"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import UsersList from "./components/UsersList"

const queryClient = new QueryClient() // colocar fora para ele nunca ser alterado

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserInfo />
      <hr />
      <NewUserForm />
      <hr />
      <UsersList />
    </QueryClientProvider>
  )
}

export default App
