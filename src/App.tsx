import styled from 'styled-components'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Contato from './pages/Contato'
import SignUp from './pages/SignUp'
import Cadastro from './pages/Cadastro'
import PageNotFound from './pages/PageNotFound'
import { ToastContainer, toast } from 'react-toastify'
import UserContext from './context/UserContext'
import { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import CadastroCategorias from './pages/Cadastro-categorias'

function App() {
    const [userLogged, setUserLogged] = useState(null)
    return (
        <>
            <ToastContainer
                position="top-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <UserContext.Provider value={{ setUserLogged }}>
                <BrowserRouter>
                    <ContainerApp>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/contato" element={<Contato />} />
                            <Route path="/signup" element={<SignUp />} />
                            <Route path="/cadastro" element={<Cadastro />} />
                            <Route
                                path="/cadastro-categorias"
                                element={<CadastroCategorias />}
                            />
                            <Route path='/*' element={<PageNotFound />} />
                        </Routes>
                    </ContainerApp>
                </BrowserRouter>
            </UserContext.Provider>
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
    font-family: 'Bebas Neue', sans-serif;
    color: #ECDBBA;
`
