import styled from 'styled-components'
import Logo from '../components/Logo'
import Menu from '../components/Menu'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { BiSave } from 'react-icons/bi'

export default function CadastroMarca() {
    const [brand, setBrand] = useState('')
    const [model, setModel] = useState('')
    const [version, setVersion] = useState('')

    const navigate = useNavigate()

    async function submit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        try {
            // const post = await postCategory(category)
            toast('Categoria cadastrada com sucesso!')
            // navigate(`/categoria/${post.id}`)
        } catch (error: any) {
            if (error && error.response && error.response.status === 409) {
                toast('Categoria já existente, escolha acima')
            } else {
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
                <ContainerLeft>
                    <h1>Selecione o veículo</h1>
                    <StyledSelect>
                        <option value="" hidden></option>
                        <option>teste</option>
                    </StyledSelect>
                    <StyledSelect>
                        <option value="" hidden></option>
                        <option>teste</option>
                    </StyledSelect>
                    <StyledSelect>
                        <option value="" hidden></option>
                        <option>teste</option>
                    </StyledSelect>
                    <StyledButtonRegister>
                        Ir para o cadastro de produtos
                    </StyledButtonRegister>
                </ContainerLeft>

                <ContainerRight>
                    <h1>Cadastre o veículo</h1>
                    <ContainerForm>
                        <form onSubmit={submit}>
                            <WrapperInput>
                                {' '}
                                <input
                                    placeholder="Marca do veículo (ex: Vw, Audi...)"
                                    required
                                    onChange={(e) => setBrand(e.target.value)}
                                ></input>
                                <StyledButton>
                                    <StyledSave />
                                </StyledButton>
                            </WrapperInput>
                            <WrapperInput>
                                <input
                                    placeholder="Modelo do Veículo (ex: Gol, A3...)"
                                    required
                                    onChange={(e) => setModel(e.target.value)}
                                ></input>
                                <StyledButton>
                                    <StyledSave />
                                </StyledButton>
                            </WrapperInput>

                            <WrapperInput>
                                <input
                                    placeholder="Versão do Veículo (ex: G5, Sportback...)"
                                    required
                                    onChange={(e) => setVersion(e.target.value)}
                                ></input>
                                <StyledButton>
                                    <StyledSave />
                                </StyledButton>
                            </WrapperInput>
                        </form>
                    </ContainerForm>
                </ContainerRight>
            </Container>
            <Menu />
        </>
    )
}

const Container = styled.div`
    width: 600px;
    height: 500px;
    display: flex;
    justify-content: space-between;
`
const ContainerLeft = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    h1 {
        font-size: 40px;
    }
`
const StyledSelect = styled.select`
    width: 300px;
    height: 40px;
    margin-top: 20px;
`

const ContainerRight = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    margin-left: 50px;
    h1 {
        font-size: 40px;
    }
`

const ContainerForm = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: row;

    input {
        width: 300px;
        height: 40px;
        margin-bottom: 20px;
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
`
const StyledButton = styled.button`
    width: 45px;
    height: 45px;
    border-radius: 10px;
    margin-left: 10px;
    border: 1px solid white;
    background-color: #2c2e43;

    font-family: 'Bebas Neue', sans-serif;

    color: white;
    align-items: center;
`

const StyledButtonRegister = styled.button`
    width: 300px;
    height: 45px;

    border-radius: 10px;
    margin-top: 25px;
    border: 1px solid white;
    background-color: #2c2e43;
    box-shadow: none;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 20px;
    color: white;
`
const StyledSave = styled(BiSave)`
    font-size: 2rem;
    color: #ecdbba;
`
const WrapperInput = styled.div`
    display: flex;
`
