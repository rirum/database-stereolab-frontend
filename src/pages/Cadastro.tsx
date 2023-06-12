import Logo from '../components/Logo'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { signUp } from '../services/signUpApi'

export default function Cadastro() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [name, setName] = useState('')
    const navigate = useNavigate()

    async function submit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        if (password !== repeatPassword) {
            toast('As senhas não coincidem, por favor digite novamente')
            return
        }

        try {
            const signUpData = await signUp(name, email, password)
            toast('Cadastro realizado com sucesso')
            navigate('/login')
        } catch (error) {
            if (error) {
                toast('Tente novamente mais tarde')
            }
        }
    }

    return (
        <>
            <Logo />
            <ContainerForm>
                <form onSubmit={submit}>
                    <input
                        placeholder="nome"
                        type="name"
                        required
                        onChange={(e) => setName(e.target.value)}
                    />
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
                    <input
                        placeholder="repita sua senha"
                        type="password"
                        required
                        onChange={(e) => setRepeatPassword(e.target.value)}
                    />
                    <button type="submit">Cadastre-se</button>
                </form>
                <ContainerLink>
                    <Link to="/login" style={{ textDecoration: 'none' }}>
                        <p>Faça seu login</p>
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
        justify-content: center;
        align-items: center;
    }
    input {
        width: 300px;
        height: 40px;
        margin-bottom: 10px;
        border-radius: 10px;
        border: 1px solid #d9d9d9;
        ::placeholder {
            font-family: 'Bebas Neue', sans-serif;
            margin-top: 10px;
            font-size: 18px;
            color: #bdbdc2;
            text-align: center;
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
