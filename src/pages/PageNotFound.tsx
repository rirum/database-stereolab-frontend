import styled from "styled-components";
import Menu from "../components/Menu";
import Logo from "../components/Logo";

export default function PageNotFound(){
    return(
        <>
        <Logo/>
        <Container>
        <WrapperText>
        <h1>404</h1>
        <p>not found</p>
        </WrapperText>
        </Container>
       
        <Menu/>
        </>
        
    )
}

const Container = styled.div`
    width: 600px;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const WrapperText = styled.div`
        font-family: 'Bebas Neue', sans-serif;
        color: #ECDBBA;
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-top: 100px;
        margin-bottom: 200px;
    h1{
        font-size: 150px;
    }
    p{
       font-size:30px;
    }
`