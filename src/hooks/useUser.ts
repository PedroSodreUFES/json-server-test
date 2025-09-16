import { useState } from "react"
import { fetcher } from "../helpers/api"
import type { User } from "../models/user"
import { useCallback } from "react"

export default function useUser() {
    const [user, setUser] = useState<User | null>(null)
    const [requestStatus, setRequestStatus] = useState<'loading' | 'saving' | 'idle'>("idle")

    const getUser = useCallback(async (username: string) => {
        try {
            setRequestStatus("loading")

            const data = await fetcher(`users/${username}`)

            setUser(data)
        } catch (error) {
            console.error(error)
            alert("Erro ao buscar usuário")
        } finally {
            setRequestStatus("idle")
        }
    }, [])

    return {
        user,
        userRequestStatus: requestStatus,
        getUser,
    }
}