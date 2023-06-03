import styled from 'styled-components'
import Home from './pages/Home'

function App() {
    return (
        <>
            <ContainerApp>
                <Home />
            </ContainerApp>
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
