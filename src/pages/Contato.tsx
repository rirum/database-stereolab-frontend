import styled from 'styled-components'
import Logo from '../components/Logo'
import Menu from '../components/Menu'
import { Link } from 'react-router-dom';
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Contato() {
    return (
        <>
            <Logo />
            
            <WrapperSocial>
            <WrapperIcon><StyledMail/> <SocialLink to="#"><p>E-mail</p></SocialLink></WrapperIcon>
            <WrapperIcon><StyledInstagram/><SocialLink to="#"><p>Instagram</p></SocialLink></WrapperIcon>
            <WrapperIcon><StyledTikTok/><SocialLink to="#"><p>TikTok</p></SocialLink></WrapperIcon>
            <WrapperIcon><StyledYoutube/><SocialLink to="#"><p>Youtube</p></SocialLink></WrapperIcon>
           
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
    margin-bottom:15px;
    align-items: center;
    p{
        font-family: 'Bebas Neue', sans-serif;
        color: #ECDBBA;
        font-size: 30px;
        margin-top: 20px;
    }
`
const SocialLink = styled(Link)`
    text-decoration: none;
`
const StyledMail = styled(MdOutlineEmail)`
    font-size: 4.5rem;
    color: #C84B31;
`
const StyledInstagram = styled(FaInstagram)`
    font-size: 4.5rem;
    color: #C84B31;
`
const StyledTikTok = styled(FaTiktok)`
    font-size: 4.5rem;
    color: #C84B31;
`

const StyledYoutube = styled(FaYoutube)`
    font-size: 4.5rem;
    color: #C84B31;
`


