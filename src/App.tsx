import styled from 'styled-components'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Contato from './pages/Contato'
import Cadastro from './pages/Cadastro'
import { ToastContainer } from 'react-toastify'

function App() {
    return (
        <>
        <ToastContainer/>
        <BrowserRouter>
        <ContainerApp>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/contato' element={<Contato />}/>
            <Route path='/cadastro' element={<Cadastro />}/>
           
            
                
        </Routes>
        </ContainerApp>
            
            </BrowserRouter>
        
            </>
    )
}

export default App

const ContainerApp = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: #393e46;
    margin: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
`
