import styled from "styled-components";
import Logo from "../components/Logo";
import Menu from "../components/Menu";
import{HiSparkles, HiOutlineInboxIn} from 'react-icons/hi';
import {BsFillCarFrontFill, BsFillBagPlusFill} from 'react-icons/bs' 
export default function Database(){
    return(
        <>
        <Logo/>
        <StyledHeader><h1>O que você vai cadastrar hoje?</h1></StyledHeader>
        <WrapperDatabase>
        <WrapperIcon>
            <StyledCar/>
            <p>Veículos</p>
        </WrapperIcon>
        <WrapperIcon>
            <StyledCategories/>
        <p>Categorias</p>
        </WrapperIcon>
        <WrapperIcon>
            <StyledProduct/>
        <p>Produtos</p>
        </WrapperIcon>
        <WrapperIcon>
            <StyledAcc/>
        <p>Universais</p>
        </WrapperIcon>
        </WrapperDatabase>
        <Menu/>
        </>
    )
}

const StyledHeader = styled.div`
h1{
    font-family: 'Bebas Neue', sans-serif;
    color: #ecdbba;
    font-size: 50px;
}
   
`
const WrapperDatabase = styled.div`
    display: flex;
    flex-direction: column;
    height: 400px;
    margin-top: 60px;


`
const WrapperIcon = styled.div`
    display: flex;
    margin-bottom: 30px;
    
   
    p{
        font-family: 'Bebas Neue', sans-serif;
        color: #ecdbba;
        font-size: 40px;
        margin-top: 10px;
        margin-left: 20px;
    }
`
const StyledCar = styled(BsFillCarFrontFill)`
    font-size: 3.5rem;
    color: #c84b31;
    
`
const StyledCategories = styled(BsFillBagPlusFill)`
    font-size: 3.5rem;
    color: #c84b31;
`
const StyledProduct = styled(HiOutlineInboxIn)`
    font-size: 3.5rem;
    color: #c84b31;
;
`
const StyledAcc = styled(HiSparkles)`
    font-size: 3.5rem;
    color: #c84b31;
;
`
