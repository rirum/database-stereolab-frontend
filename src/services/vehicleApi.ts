import api from './api';

export async function getVehicle(nome: string){
    const response = await api.get('/vehicle', {params: {nome}})
    return response.data;
}

export async function getModelById(marcaId: number){
    const response = await api.get(`/vehicle/model?marcaId=${marcaId}`)
    return response.data;
}
export async function getModelByVehicleId(vehicleId: number){
    const response = await api.get(`/vehicle/model/${vehicleId}`)
    return response.data;
}
// export async function getVersionsByModeloId(modeloId: number){
//     const response = await api.get(`/vehicle/model/version?modelo_id=${modeloId}`)
//     return response.data;
// }

export async function getVersionsByModelId(modelId: number){
    const response = await api.get(`/vehicle/model/version/${modelId}`)
    return response.data;
}
