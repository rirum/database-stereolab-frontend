import styled from 'styled-components'
import Logo from '../components/Logo'
import Menu from '../components/Menu'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { postCategory } from '../services/categoryApi'

export default function CadastroCategorias() {
    const [category, setCategory] = useState('')

    async function submit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        try {
            const post = await postCategory(category)
            console.log(post)
            toast('Categoria cadastrada com sucesso!')
        } catch (error) {
            if (error) {
                toast(
                    'Não foi possível cadastrar a categoria, tente novamente mais tarde'
                )
            }
        }
    }

    return (
        <>
            <Logo />
            <Container>
                <WrapperInput>
                    <StyledHeader>
                        <h1>Selecione a categoria.</h1>
                    </StyledHeader>

                    <StyledSelect>
                        <option value="" hidden></option>
                        <option value="teste"> teste</option>
                        <option value="teste"> teste</option>
                        <option value="teste"> teste</option>
                        <option value="teste"> teste</option>
                        <option value="teste"> teste</option>
                    </StyledSelect>
                </WrapperInput>

                <WrapperInput>
                    <StyledHeader>
                        <h1>Ou cadastre a categoria do produto</h1>
                    </StyledHeader>
                    <ContainerForm>
                        <form onSubmit={submit}>
                            <input
                                placeholder="Categoria do Produto"
                                required
                                onChange={(e) => setCategory(e.target.value)}
                            ></input>
                            <button>Cadastrar</button>
                        </form>
                    </ContainerForm>
                </WrapperInput>
            </Container>
            <Menu />
        </>
    )
}

const Container = styled.div`
    width: 600px;
    height: 500px;
`
const WrapperInput = styled.div`
    height: 200px;
`
const StyledSelect = styled.select`
    width: 200px;
    height: 30px;
    margin-top: 20px;
    margin-bottom: 40px;
`
const StyledHeader = styled.div`
    h1 {
        font-size: 40px;
    }
`
const ContainerForm = styled.div`
    margin-top: 20px;
    form {
        display: flex;
        flex-direction: row;
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
        width: 300px;
        height: 45px;
        margin-bottom: 10px;
        margin-left: 20px;
        border-radius: 10px;
        border: 1px solid white;
        background-color: #2c2e43;
        box-shadow: none;
        font-family: 'Bebas Neue', sans-serif;
        font-size: 30px;
        color: white;
    }
`
