import Logo from '../components/Logo'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { signIn } from '../services/authApi'
import UserContext from '../context/UserContext'
import { toast } from 'react-toastify'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { setUserLogged } = useContext(UserContext)
    const navigate = useNavigate()

    async function submit(event: any) {
        event.preventDefault()

        try {
            const userData = await signIn(email, password)
            console.log(userData)
            setUserLogged(userData)
            toast('Login realizado com sucesso')
            navigate('/cadastro')
        } catch (error) {
            if (error) {
                toast('Não foi possivel fazer o login')
            }
        }
    }

    return (
        <>
            <Logo />
            <ContainerForm>
                <form onSubmit={submit}>
                    <input
                        placeholder="e-mail"
                        type="email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        placeholder="senha"
                        type="password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button>Login</button>
                </form>
                <ContainerLink>
                    <Link to="/signup" style={{ textDecoration: 'none' }}>
                        <p>Cadastre-se</p>
                    </Link>
                </ContainerLink>
            </ContainerForm>
        </>
    )
}

const ContainerForm = styled.div`
    form {
        display: flex;
        flex-direction: column;
    }
    input {
        width: 300px;
        height: 40px;
        margin-bottom: 10px;
        border-radius: 10px;
        border: 1px solid #d9d9d9;
        ::placeholder {
            font-family: 'Bebas Neue', sans-serif;
            font-size: 18px;
            color: #bdbdc2;
            text-align: center;
            padding: 10px;
        }
    }
    button {
        width: 310px;
        height: 50px;
        margin-bottom: 10px;
        border-radius: 10px;
        border: 1px solid white;
        background-color: #2c2e43;
        box-shadow: none;
        font-family: 'Bebas Neue', sans-serif;
        font-size: 30px;
        color: white;
    }
`
const ContainerLink = styled.div`
    margin-top: 10px;
    p {
        font-family: 'Poppins';
        color: white;
        font-size: 30px;
        text-align: center;
    }
`
