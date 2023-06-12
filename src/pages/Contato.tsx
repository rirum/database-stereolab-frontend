import styled from 'styled-components'
import Logo from '../components/Logo'
import Menu from '../components/Menu'
import { Link } from 'react-router-dom'
import { MdOutlineEmail } from 'react-icons/md'
import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'

export default function Contato() {
    return (
        <>
            <Logo />

            <WrapperSocial>
                <WrapperIcon>
                    <SocialLink to="mailto:contato@deaaz.net">
                        <StyledMail /> <p>E-mail</p>
                    </SocialLink>
                </WrapperIcon>
                <WrapperIcon>
                    <SocialLink
                        to="https://www.instagram.com/stereolab_oficial/"
                        target="_blank"
                        rel="noopener"
                    >
                        <StyledInstagram />
                        <p>Instagram</p>
                    </SocialLink>
                </WrapperIcon>
                <WrapperIcon>
                    <SocialLink
                        to="https://www.tiktok.com/stereolab_oficial"
                        target="_blank"
                        rel="noopener"
                    >
                        <StyledTikTok />
                        <p>TikTok</p>
                    </SocialLink>
                </WrapperIcon>
                <WrapperIcon>
                    <SocialLink
                        to="https://www.youtube.com/channel/UCWSXEV3feso16JLJwPb_XmA"
                        target="_blank"
                        rel="noopener"
                    >
                        <StyledYoutube />
                        <p>Youtube</p>
                    </SocialLink>
                </WrapperIcon>
            </WrapperSocial>
            <Menu />
        </>
    )
}

const WrapperSocial = styled.div`
    width: 600px;
    height: 150px;
    display: flex;
    justify-content: space-evenly;
    margin-top: 100px;
    margin-bottom: 200px;
`
const WrapperIcon = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    justify-content: center;
    align-items: center;

    p {
        font-family: 'Bebas Neue', sans-serif;
        color: #ecdbba;
        font-size: 30px;
        margin-top: 20px;
    }
`
const SocialLink = styled(Link)`
    text-decoration: none;
`
const StyledMail = styled(MdOutlineEmail)`
    font-size: 4.5rem;
    color: #c84b31;
`
const StyledInstagram = styled(FaInstagram)`
    font-size: 4.5rem;
    color: #c84b31;
`
const StyledTikTok = styled(FaTiktok)`
    font-size: 4.5rem;
    color: #c84b31;
`

const StyledYoutube = styled(FaYoutube)`
    font-size: 4.5rem;
    color: #c84b31;
`
