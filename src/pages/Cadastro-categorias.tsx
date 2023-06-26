import styled from 'styled-components'
import Logo from '../components/Logo'
import Menu from '../components/Menu'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { postCategory, getAllCategories } from '../services/categoryApi'
import { useNavigate } from 'react-router-dom'

export default function CadastroCategorias() {
    const [category, setCategory] = useState('')
    const [listCategory, setListCategory] = useState<Category[]>([])
    const navigate = useNavigate()
   
    interface Category {
        id: number
        nome: string
    }
    useEffect(() => {
        async function getCategory() {
            try {
                const response = await getAllCategories(category)
                setListCategory(response)
            } catch (error) {
                if (error) {
                    toast('Não foi possível recuperar a lista de categorias')
                }
            }
        }
        getCategory()
    }, [])

    async function submit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        try {
            const post = await postCategory(category)
            toast('Categoria cadastrada com sucesso!')
            navigate(`/categoria/${post.id}/${post.nome}`)
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

    function handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const categoryId = parseInt(event.target.value)
        const selectedCategory = listCategory.find((category) => category.id === categoryId);
        if (selectedCategory) {
      navigate(`/categoria/${selectedCategory.id}/${selectedCategory.nome}`);
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

                    <StyledSelect onChange={handleSelectChange}>
                        <option value="" hidden></option>
                        {listCategory &&
                            listCategory.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {' '}
                                    {category.nome}
                                </option>
                            ))}
                    </StyledSelect>
                    <RegisterButton >Ir para Cadastro</RegisterButton>
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
    font-size: 20px;
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

const RegisterButton = styled.button`
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
`
