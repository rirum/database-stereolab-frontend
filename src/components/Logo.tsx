import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Logo() {
    return (
        <>
            <LogoLink to="/">
                <StyledLogo>
                    <h1>Stereolab</h1>
                </StyledLogo>
            </LogoLink>
        </>
    )
}

const StyledLogo = styled.div`
    font-size: 150px;
    color: #c84b31;
    font-family: 'Bebas Neue', sans-serif;
    margin-top: 120px;
`
const LogoLink = styled(Link)`
    text-decoration: none;
`
