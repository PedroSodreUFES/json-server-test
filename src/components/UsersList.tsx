import useUsers from "../hooks/useUsers";

export default function UsersList() {
    const { isLoadingUsers, users} = useUsers()

    if (isLoadingUsers) {
        return <div>Carregando todos os usuários...</div>
    }

    return (
        <ul>
            {users.map(user => <li key={user.id}>Nome: {user.name} / Id: {user.id}</li>)}
        </ul>
    )
}