import { createContext } from 'react'

interface UserDataValue {
    email: string
    password: string
    setEmail: (email: string) => void
    setPassword: (password: string) => void
    setUserLogged: (userData: any) => void
}

const UserContext = createContext<UserDataValue>({
    email: '',
    password: '',
    setEmail: (email) => {
        //implementacao futura
    },
    setPassword: (password) => {
        //implementacao futura
    },
    setUserLogged: (userData) => {
        //implementacao futura
    },
})

export default UserContext
