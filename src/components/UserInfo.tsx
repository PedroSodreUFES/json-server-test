import { useEffect } from "react"
import useUser from "../hooks/useUser"

export default function UserInfo() {
    const { getUser, user, userRequestStatus } = useUser() 

    useEffect(() => {
        getUser("gus");
    }, [getUser])

    if (userRequestStatus === 'loading') {
        return <div>Carregando usuário</div>
    }
    return (
        <ul>
            <li>Nome: {user?.name} </li>
            <li>Id: {user?.id}</li>
        </ul>
    )
}