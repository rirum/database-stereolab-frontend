import Logo from "../components/Logo";
import styled from "styled-components";
import { Link } from 'react-router-dom';

export default function Cadastro(){
    return(
        <>
        <Logo/>
        <ContainerForm>
            <form>
                <input placeholder="nome" type="name" required />
                <input placeholder="e-mail" type="email" required />
                <input placeholder="senha" type="password" required />
                <input placeholder="repita sua senha" type="password" required />
                <button>Cadastre-se</button>
            </form>
            <ContainerLink>
            <Link to='/cadastro' style={{textDecoration:'none'}}><p>Faça seu login</p></Link>
            </ContainerLink>
            
        </ContainerForm>
        </>
    )
}


const ContainerForm = styled.div`
    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    input{
        width: 300px;
        height: 50px;
        margin-bottom: 10px;
        border-radius: 10px;
        border: 1px solid #D9D9D9;
        ::placeholder{
            font-family: 'Bebas Neue', sans-serif;
            font-size: 30px;
            color: #2C2E43;
            text-align: center;
        }
    }
    button{
        width: 310px;
        height: 50px;
        margin-bottom: 10px;
        border-radius: 10px;
        border: 1px solid white;
        background-color:#2C2E43; 
        box-shadow: none;
        font-family: 'Bebas Neue', sans-serif;
        font-size: 30px;
        color: white;
    }
`
const ContainerLink = styled.div`
margin-top: 10px;
    p{
        font-family: 'Poppins';
        color: white;
        font-size: 30px;
        text-align: center;
    }

`