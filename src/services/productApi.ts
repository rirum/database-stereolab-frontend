import api from './api'

export async function postProduct(nome: string,
    codigoProduto: string,
    marcaProduto: string,
    codigoFabricante: string,
    // categoriaProdutoId: number,
    // versaoCarroId:number,
    observacoes: string,
    link: string,
    imagem: string,
    vehicle: Vehicle,
    model: Model,
    version: Version,
     ):Promise<any>{
    const response = await api.post('/product', {nome,
        codigoProduto,
        marcaProduto,
        codigoFabricante,
       
        observacoes,
        link,
        imagem,
        vehicle,
        model,
        version})
        return response.data;
}

export async function getAllProducts(nome: string,
    codigoProduto: string,
    marcaProduto: string,
    codigoFabricante: string,
    categoriaProdutoId: number,
    versaoCarroId:number ){
        try{
            const response = await api.get('/product', {params: {nome,
                codigoProduto,
                marcaProduto,
                codigoFabricante,
                categoriaProdutoId,
                versaoCarroId }})
                return response.data
        }catch(error){
            console.log(error.message)
        }
    }

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
