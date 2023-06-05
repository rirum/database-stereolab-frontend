import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <>
            <ol>
                <Link to="/database">
                    <MenuItem>Database</MenuItem>
                </Link>
                <Link to="/meu-carro">
                    <MenuItem>Meu Carro</MenuItem>
                </Link>
                <Link to="/busca">
                    <MenuItem>Busca</MenuItem>
                </Link>
                <Link to="/manuais">
                    <MenuItem>Manuais</MenuItem>
                </Link>
                <Link to="/contato">
                    <MenuItem>Contato</MenuItem>
                </Link>
            </ol>
        </>
    )
}

const MenuItem = styled.li`
    font-family: 'Bebas Neue', sans-serif;
    color: #eee;
    font-size: 45px;
`
