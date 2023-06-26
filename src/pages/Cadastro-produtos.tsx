import styled from 'styled-components'
import Menu from '../components/Menu'
import Logo from '../components/Logo'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify'
import { postProduct } from '../services/productApi';
import { getVehicle, getModelById, getVersionsByModeloId, getModelByVehicleId, getVersionsByModelId } from '../services/vehicleApi';

export default function CadastroProdutos() {
    const params = useParams();
    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [codigo, setCodigo] = useState('');
    const [marca, setMarca] = useState('');
    const [fabricante, setFabricante] = useState('');
    const [observacao, setObservacao] = useState('');
    const [foto, setFoto] = useState('');
    const [link, setLink] = useState('');
    const [vehicle, setVehicle] = useState('');
    const [listVehicle, setListVehicle] = useState<Vehicle[]>([]);
    const [model, setModel] = useState('');
    const [listModel, setListModel] = useState<Model[]>([]);
    const [version, setVersion] = useState(''); 
    const [listVersion, setListVersion] = useState<Version[]>([]); 

    interface Vehicle {
        id: number
        nome: string
    }
    interface Model {
        id: number
        nome: string
    }

    interface Version {
        id: number
        nome: string
    }

   
    useEffect(() => {
        async function fetchVehicle() {
            try {
                const vehicleResponse = await getVehicle(vehicle)
                setListVehicle(vehicleResponse)
                
                // if (vehicleResponse){
                //     const brandResponse = await getModelById(vehicleResponse.marcaId)
                //     setModel(brandResponse);
                //     console.log(brandResponse);

                //     if (brandResponse) {
                //         const versionResponse = await getVersionsByModeloId(brandResponse.id)
                //         setVersion(versionResponse);
                //         console.log(versionResponse);
                //     }
                // }
                
            } catch (error) {
                if (error) {
                    console.log(error)
                    toast('Não foi possível recuperar a lista de veiculos')
                }
            }
        }
        fetchVehicle()
    }, [])

    async function fetchModels(vehicleId: string){
        try{
            const numberId = Number(vehicleId)
            const modelResponse = await getModelByVehicleId(numberId)
            setListModel(modelResponse)
        } catch(error){
            console.log(error);
        }
    }
    async function fetchVersions(modelId: string){
        try{
            const numberId = Number(modelId)
            const versionResponse = await getVersionsByModelId(numberId)
            setListVersion(versionResponse)
        } catch(error){
            console.log(error);
        }
    }


    async function submit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        try {
           console.log(vehicle)
            const post = await postProduct(nome, codigo, marca,fabricante, observacao, foto, link, vehicle, model, version)
            toast('Produto cadastrado com sucesso!')
            
        } catch (error: any) {
          console.log(error.message)
                toast(
                    'Não foi possível cadastrar a categoria, tente novamente mais tarde'
                )
            }
        }
        const handleVehicleChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
            const selectedVehicleId = event.target.value;
            setVehicle(selectedVehicleId);
          
            await fetchModels(selectedVehicleId);
          };

          const handleModelChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
            const selectedModelId = event.target.value;
            setModel(selectedModelId);

            await fetchVersions(selectedModelId)
          };
    
          const handleVersionChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
            const selectedVersionId = event.target.value;
            setVersion(selectedVersionId);
           
          };
    return (

        <>
            <Logo />
            <StyledContainer>
            <StyledHeader>
                <h1>Insira os dados do produto:</h1>
                <h2>*Dados obrigatórios</h2>
                </StyledHeader>
                <StyledParagraph>
                <p>Você está na categoria: {params.nome}</p> 
                </StyledParagraph>
               
                <StyledSelect
                onChange={handleVehicleChange}>
                    <option value="" disabled selected>Selecione a marca</option>
                    {listVehicle && listVehicle.map((vehicle) => (
                        <option key={vehicle.id} value={vehicle.id}>
                            {' '}
                            {vehicle.nome}
                        </option>
                    ))}
                </StyledSelect>
                <StyledSelect 
                onChange={handleModelChange}>
                    <option value="" disabled selected>Selecione o modelo</option>
                    {listModel && listModel.map((model) => (
                         <option key={model.id} value={model.id}>
                         {' '}
                         {model.nome}
                     </option>
                    ))}
                </StyledSelect>
                <StyledSelect onChange={handleVersionChange}>
                    <option value="" disabled selected>Selecione a versão</option>
                    {listVersion && listVersion.map((version) => (
                         <option key={version.id} value={version.id}>
                         {' '}
                         {version.nome}
                     </option>
                    ))}
                </StyledSelect>
                <WrapperInput>
                <ContainerForm>
            <form onSubmit={submit} >
                <input  placeholder="Nome do Produto*" required onChange={(e) => setNome(e.target.value)}></input>
                <input  placeholder="Codigo do Produto*" required onChange={(e) => setCodigo(e.target.value)}></input>
                <input  placeholder="Marca do Produto*" required onChange={(e) => setMarca(e.target.value)}></input>
                <input  placeholder="Codigo do Fabricante*" required onChange={(e) => setFabricante(e.target.value)}></input>
                <input  placeholder="Observações" onChange={(e) => setObservacao(e.target.value)}></input>
                <input  placeholder="Foto do Produto" onChange={(e) => setFoto(e.target.value)}></input>
                <input  placeholder="Link para vídeo" onChange={(e) => setLink(e.target.value)}></input>
                <StyledButton>Cadastrar</StyledButton>
            </form> 
          
                </ContainerForm>
               
                </WrapperInput>
            </StyledContainer>
          
            <Menu />
        </>
    )
}

const StyledContainer = styled.div`
    width: 600px;
    height: 400px;
`
const StyledHeader = styled.div`
display: flex;
h1{
    font-size: 40px;
}
 h2{
font-size: 20px;
margin-top: 18px;
margin-left: 10px;
 }
`

const StyledParagraph = styled.div`

margin-top: 10px;
    p{
        font-size: 25px;
    }
    
`

const WrapperInput = styled.div`
    height: 200px;
`
const StyledSelect = styled.select`

    width: 180px;
    height: 30px;
    margin-top: 20px;
    margin-right: 20px;
    font-size: 15px;
`

const ContainerForm = styled.div`
  margin-top: 10px;
  width: 600px;

    form {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    } 
    input {
        width: 175px;
        height: 30px;
        margin-bottom: 10px;
        border-radius: 10px;
        border: 1px solid #d9d9d9;
        margin-right: 15px;
        ::placeholder {
            font-family: 'Bebas Neue', sans-serif;
            font-size: 18px;
            color: #2C2E43;
            text-align: center;
            padding: 10px;
        }
    }
    button{
        
    
    }
   
`
const StyledButton = styled.button`

        width: 175px;
        height: 30px;
        margin-bottom: 10px;
        
        border-radius: 10px;
        border: 1px solid white;
        background-color: #2c2e43;
        box-shadow: none;
        font-family: 'Bebas Neue', sans-serif;
        font-size: 15px;
        color: white;
`