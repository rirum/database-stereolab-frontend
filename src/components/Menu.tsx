import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Menu() {
    const [activeItem, setActiveItem] = useState('');

    const handleClick = (item: string) => {
        setActiveItem((prevItem) => (prevItem === item ? '' : item));
    };

    interface MenuItemProps {
        active: boolean;
      }

    return (
        <>
            <OrderedList>
                
                    <MenuItem active={activeItem === 'database'} onClick={() => handleClick('database')}>Database
                    {activeItem === 'database' && (
                        <OrderedListHidden>
                        <NavbarLink to="/cadastro-database">Cadastro</NavbarLink>
                        <NavbarLink to="/visualizar">Visualizar</NavbarLink>
                    </OrderedListHidden>
                    
                    )}
                    </MenuItem>
                    
                    <MenuItem active={activeItem === 'meu-carro'} onClick={() => handleClick('meu-carro')}><NavbarLink to="/meu-carro" >Meu Carro</NavbarLink></MenuItem>
                    <MenuItem active={activeItem === 'busca'} onClick={() => handleClick('busca')}><NavbarLink to="/busca">Busca</NavbarLink></MenuItem>
                    <MenuItem active={activeItem === 'manuais'} onClick={() => handleClick('manuais')}><NavbarLink to="/manuais">Manuais</NavbarLink></MenuItem>
                    <MenuItem active={activeItem === 'contato'} onClick={() => handleClick('contato')}><NavbarLink to="/contato">Contate-nos</NavbarLink></MenuItem>
                
                
                
            </OrderedList>
        </>
    )
}

const MenuItem = styled.li<MenuItemProps>`
    font-family: 'Bebas Neue', sans-serif;
    color: #ECDBBA;
    font-size: 45px;
    color: ${({ active }) => (active ? '#C84B31' : '#ECDBBA')};
    font-size: ${({ active }) => (active ? '54px' : '35px')};
  
`
const NavbarLink = styled(Link)`
    text-decoration: none;
    color: #ECDBBA;
    font-size: 35px;
`
const OrderedList = styled.ol`
    display: flex;
    width: 1200px;
    justify-content: space-evenly;
   
`
const OrderedListHidden = styled.ol`
 display: flex;
    flex-direction: column;

`