import styled from 'styled-components'

export default function Home() {
    return (
        <>
            <LandingPage>
                <SimpleText>
                    <p>database</p>
                </SimpleText>
                <Headline>
                    <h1>Stereolab</h1>
                </Headline>
            </LandingPage>
        </>
    )
}

const LandingPage = styled.div`
    display: flex;
    height: 100vh;
    font-family: 'Bebas Neue', sans-serif;
    flex-direction: column;
    line-height: none;
`

const SimpleText = styled.div`
    height: 110px;
    width: 1025px;
    justify-content: flex-end;
    display: flex;
    margin-top: 200px;

    p {
        color: #ecdbba;
        font-size: 100px;
    }
`
const Headline = styled.div`
    height: 270px;
    h1 {
        font-size: 300px;
        color: #c84b31;
    }
`
